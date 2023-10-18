import axios from "axios"


export const baseurl= axios.create({
    baseURL:"http://localhost:4000",
    withCredentials:true,
})