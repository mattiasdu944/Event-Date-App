import { dbEventos } from "../../database/index";

const PageEvento = ({ evento }) => {


    return (
        <div>PageEvento</div>
    )
}


export async function getServerSideProps({params}) {
    const {slug} = params

    const evento = await dbEventos.getEventBySlug( slug )

    if( !evento ){
        return{
            redirect:{
                destination:'/',
                permanent:false
            }
        }
    }

    return {
        props: {
            evento
        },
    }
}



export default PageEvento