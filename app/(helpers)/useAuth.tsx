'use client'

import { UsersProps } from "@/@types"
import { useEffect, useState } from "react"


const useAuth=()=>{
    const [user, setUser] = useState<UsersProps | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(()=>{
        const userCookie = document.cookie.split(';').find((item)=>item.trim().startsWith('user='))
        const userInfo = userCookie?.split('=')[1]
        const userData = userInfo ? JSON.parse(userInfo) : null

        const tokenCookie = document.cookie.split(';').find((item)=>item.trim().startsWith('token='))
        const userToken = tokenCookie?.split('=')[1]
        const accessToken = userToken ? JSON.parse(userToken) : null

        if(userData && userToken){
            setUser(userData)
            setToken(accessToken)
        }
    },[])
    return {user, token}
}

export default useAuth