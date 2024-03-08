import prisma from "@/app/libs/prismadb"
import {NextResponse} from "next/server"
export async function DELETE(request:Request,{params}:{params:{announcementId:string}}){
    try{
       const announcement=await prisma.announcement.deleteMany({
        where:{
          id:params?.announcementId
        }
       })
       return NextResponse.json(announcement)
    }catch(error:any){
        return new NextResponse("internal error ",{status:500})
    }
}