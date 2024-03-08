import getSession from "./getSessions"
import prisma from "@/app/libs/prismadb"
const getCurrentUser=async(email:string)=>{
    try{
        const session = await prisma.user.findUnique({
            where:{
                email:email
            },include:{
                announcements:{
                    include:{
                        quize:true
                    }
                }
            }
        })
       
        return session
    }catch(error:any){
        return null
    }
}
export default getCurrentUser