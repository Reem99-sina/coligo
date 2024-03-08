
import {AuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"
import getSession from "@/app/actions/getSessions"

export const authOptions:AuthOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email:{
                    label:"email",type:"text"
                },
            },
            async authorize(credentials){
               
                const existedUser=await prisma.user.findUnique({where:{ email:credentials?.email}})
                
                if(Boolean(existedUser)){
                    return existedUser
                }
                const res= await prisma.user.create({data:{
                    email:credentials?.email
                }})
               const user=await prisma.user.findUnique({where:{id:res?.id}})
               return  user
            }
        })
    ],debug:process.env.NODE_ENV==="development",
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXTAUTH_SECRET,
    callbacks: {},

}