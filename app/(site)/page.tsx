"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Input from "@/app/components/input/Input";
import { Button,Box } from "@mui/material";
import { signIn,signOut } from "next-auth/react";
import { MouseEventHandler } from "react";
import {useRouter} from "next/navigation"
import toast from 'react-hot-toast';
import {useEffect,useState} from "react"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

export default  function Home() {
   const router=useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
        email: "",
    }
})
  const handleClick: SubmitHandler<FieldValues>=async(data)=>{

      // setLoginStatus(true)
      signIn("credentials",{...data,redirect:false}).then((callback)=>{
        console.log(callback,"callback")
        if(callback?.error){
          toast.error("invalid credential")
      }
      if(callback?.ok&&!callback?.error){
          toast.success("logged in")
          router.push('/dashboard')
          // params.set("data", data?.email);
      }
      })
  }


  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <Input  label={"email"} register={register} id={"email"} errors={errors} />
    <Button  variant="contained" color="primary" onClick={handleSubmit(handleClick)}>
      Log in 
    </Button>
    <Button  variant="contained" color="primary" sx={{mx:2}}onClick={()=>signOut()}>
      Log out 
    </Button>
    </Box>
    </>
  );
}
