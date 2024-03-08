"use client"
import {Box,Typography,Avatar,Divider,Button} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {useRouter} from "next/navigation"
import toast from 'react-hot-toast';
import axios from "axios"
const AvaterCard=({data,type}:{data:any,type:string})=>{
    const router=useRouter()
    const onDelete=async()=>{
        if(type=="announcement"){
            await axios.delete(`/api/announcement/${data?.id}`).then(()=>{
                router.refresh()
            }).catch(()=>{
                toast.error("some thing wrong")
            })
        }else{
            await axios.delete(`/api/quiz/${data?.id}`).then(()=>{
                router.refresh()
            }).catch(()=>{
                toast.error("some thing wrong")
            }) 
        }
       
    }
return (
    <>
    <Box sx={{display:"flex",color:"black",my:2,alignItems:"center"}}>
        {data?.title&&<><Avatar/>
        <Typography sx={{mx:2}}>
            name
        </Typography>
        <Divider orientation="vertical" flexItem sx={{mx:2}}/>
        <Typography >
            {data?.title}
        </Typography></>}
        {(data?.question||data?.answer)&&
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography >
            {data?.question}
        </Typography>
        <Typography >
            {data?.answer}
        </Typography>
        <Button variant="outlined" color="primary">
            start quize
        </Button>
        </Box>}
        <Button sx={{marginLeft:"auto",color:"red"}} onClick={()=>{
            onDelete()
        }}> <DeleteIcon/></Button>
    </Box>
    </>
)
}
export default AvaterCard