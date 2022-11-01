import axios from "axios";

const usuarioApi = axios.create({
    baseURL:`${process.env.HOST}/api`
})

export default usuarioApi;