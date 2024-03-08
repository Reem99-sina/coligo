import {NextResponse} from "next/server"
import prisma from "@/app/libs/prismadb"
import getSession from "@/app/actions/getSessions"
import getCurrentUser from "@/app/actions/getCurrentUser"
export async function POST(request:Request){
    
    try{
        const data=await getSession()
        if(data?.user?.email){
            const currentUser=await getCurrentUser(data?.user?.email)
            const body=await request.json()
            const{title,quize}=body
    
           const announcement=await prisma.announcement.create({
            data:{
                title,user:{connect: {
                    id: currentUser?.id // Provide the user ID
                  }},quize:{
                    connect:{
                        id:quize?.value
                    }
                }
            }
           })
           
           return NextResponse.json(announcement)
        }else{
        return new NextResponse("need login ",{status:401})

        }
    }catch(error:any){
        console.log(error,"error")
        return new NextResponse("internal error ",{status:500})
    }
}
