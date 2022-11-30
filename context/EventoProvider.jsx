import { createContext, useState } from 'react';

const EventoContext = createContext();

const EventoProvider = ({ children }) => {
    const url = `${process.env.NEXT_PUBLIC_HOSTNAME}/api/eventos`

    const [formError, setFormError] = useState(false)
    const [evento, setEvento] = useState({
        titulo: '',
        descripcion: '',
        imagen_evento: '',
        fecha_evento: '',
        hora_evento: '',
        modalidad: '',
        localizacion: '',
        direccion: '',
        slug: '',
        categoria: '',
    })


    const submitImage = async (e) => {

        
        const form = e.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'imagen_evento');
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);
        formData.append('upload_preset', 'eventdate');

        const res = await fetch('https://api.cloudinary.com/v1_1/mattiasduarte/image/upload', {
            method: 'POST',
            body: formData
        })
        const result = await res.json();
        const obj = {...evento, imagen_evento:result.secure_url};


        const response = await fetch( url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(obj)
        })

        setEvento({
            titulo: '',
            descripcion: '',
            imagen_evento: '',
            fecha_evento: '',
            hora_evento: '',
            modalidad: '',
            localizacion: '',
            direccion: '',
            slug: '',
            categoria: '',
        })


        return obj;

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if( evento.titulo.trim() === '' || evento.descripcion.trim() === '' || evento.direccion.trim() === '' 
        || evento.categoria.trim() === '' || evento.modalidad.trim() === '' || evento.localizacion.trim() === ''
        || evento.fecha_evento.trim() === '' || evento.hora_evento.trim() === '') {
            setFormError(true)
            return;
        }

        submitImage(e)
    }

    return (
        <EventoContext.Provider value={{
            evento,
            setEvento,
            formError,
            setFormError,
            handleSubmit
        }}>
            {children}
        </EventoContext.Provider>
    )
}
export { EventoProvider };
export default EventoContext;