import axios from "axios";
const usuarioApi = axios.create({
    baseURL:`${process.env.HOSTING}/api`
})

export default usuarioApi;