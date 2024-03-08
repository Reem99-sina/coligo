

import prisma from "@/app/libs/prismadb"
import getSession from "@/app/actions/getSessions"
import getCurrentUser from "@/app/actions/getCurrentUser"

const getAnnouncement=async()=>{
    try{
        const data=await getSession()
        if(data?.user?.email){
            const currentUser=await getCurrentUser(data?.user?.email)
            const session = await prisma.announcement.findMany({
                where:{
                    userId:currentUser?.id,
                    
                },include:{
                    quize:{
                        include:{
                            announcement:true
                        }
                    }
                }
            })
            return session
        }else{
            return null
        }
        
    }catch(error:any){
        return null
    }
}
export default getAnnouncement