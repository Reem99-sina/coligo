import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
export async function DELETE(request:Request,{params}:{params:{quizId:string}}){
    try{
       const quize=await prisma.quiz.deleteMany({
        where:{
          id:params?.quizId
        }
       })
       return NextResponse.json(quize)
    }catch(error:any){
        return new NextResponse("internal error ",{status:500})
    }
}