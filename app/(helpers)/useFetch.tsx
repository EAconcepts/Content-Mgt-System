import axios from "axios"
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;
const token = ''
const headers = {
    Authorization: `Bearer ${token}`
}
const [data, setData] = useState<any>(null)

export const useFetch=({data}: any)=>{
    axios.post(`${url}`, {data}, {headers})
    .then((response)=>{
        console.log(response)
       setData(response)
    })
    .catch((err)=>{
        console.log(err)
        // setData(err)
    })
    return{data}
}