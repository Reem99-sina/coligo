import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import getSession from "@/app/actions/getSessions"
import getCurrentUser from "@/app/actions/getCurrentUser"
export async function POST(request: Request) {

    try {
        const data = await getSession()
        if(data?.user?.email){
            const currentUser = await getCurrentUser(data?.user?.email)
            const body = await request.json()
            const { announcement, question, answer } = body
            const quize = await prisma.quiz.create({
                data: {
                    user: {
                        connect: {
                            id: currentUser?.id  // Provide the user ID
                        }
                    }, question, answer
                }
            })
    
            return NextResponse.json(quize)
        }else{
        return new NextResponse("need login ", { status: 400 })

        }
        
        // return 
    } catch (error: any) {
        console.log(error, "error")
        return new NextResponse("internal error ", { status: 500 })
    }
}
