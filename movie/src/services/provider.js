import axios from "axios"
import { BASE_URL } from "./api"


export const getAllData = async (endPoint) => {
    let res = await axios(BASE_URL + endPoint)
    return res.data
}