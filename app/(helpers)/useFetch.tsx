import axios from "axios"
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;
const token = ''
const headers = {
    Authorization: `Bearer ${token}`
}

export const useFetch=({props}: any)=>{
const [data, setData] = useState<any>(null)

    axios.post(`${url}`, {props}, {headers})
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