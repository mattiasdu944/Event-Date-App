import axios from "axios";
const usuarioApi = axios.create({
    baseURL:`/api`
})

export default usuarioApi;