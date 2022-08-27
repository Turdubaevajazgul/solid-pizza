import axios from "axios"
import { base_url } from "../constants/constants"


const http = axios.create({
    baseURL: base_url,
})

const Api = {
    getPizza: () => http.get("pizza"),
    deletePizza: (id) => http.delete("pizza/" + id),
    create: (status, data) => http.post(status, data),

    getPotable: () => http.get("potable"),
    deletePotable: (id) => http.delete("potable/" + id),
}

export default Api;