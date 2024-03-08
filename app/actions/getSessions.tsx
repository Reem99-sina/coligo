
import {getServerSession} from "next-auth"
import { authOptions } from "@/app/libs/authOptions"
// import { useSession } from "next-auth/react";

export default async function getSession(){
    return await getServerSession(authOptions)
}