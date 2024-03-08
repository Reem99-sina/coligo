"use client"
import {SessionProvider} from "next-auth/react"
import React from "react"
import {useSession} from "next-auth/react"
import {useRouter} from "next/navigation"
// import getSession from "@/app/actions/getSessions"
interface AuthContextProps{
    children:React.ReactNode
}
export default function AuthContext({children}:AuthContextProps){
    
    
return (
<>
<SessionProvider>
    {children}
</SessionProvider>
</>
)
}