export const formatFecha = fecha => {
    const fechaNueva = new Date(fecha);
    // const opciones = {
    //     year: 'numeric',
    //     month: 'long',
    //     day: '2-digits'
    // }
    const opciones = {  year: 'numeric', month: 'short', day: 'numeric' };
    // console.log(fechaNueva.toLocaleDateString('es-ES', opciones))

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}