"use client"
import {Box,Typography,DialogTitle,DialogContent,DialogContentText,TextField,DialogActions,Button} from "@mui/material"
import AvaterCard from "./AvaterCard"
import {useState} from "react"
import Input from "@/app/components/input/Input";
import getCurrentUser from "@/app/actions/getCurrentUser"
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Quiz } from "@prisma/client"
import Model from "@/app/components/Model"
import Select from "@/app/components/input/Select"
import axios from "axios"
import {toast} from "react-hot-toast"
import {useRouter} from "next/navigation"
const ReviewCard=({title,description,link,dataReview,flex,type,qizes=[]}:
    {title:string,description:string,link:string,dataReview:any[]|null,flex:number,type:string,qizes:Quiz[]|[]}
    )=>{
    let [open,setOpen]=useState(false)
    const [isLoading, setLoading] = useState(false)
    const router=useRouter()
    const { register, handleSubmit,setValue,watch, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            quize: "",
            
        }
    })
    const form = useForm<FieldValues>({
        defaultValues: {
            question: "",
            answer: "",
            
        }
    })
    const quize=watch("quize")
    const question=form.watch("question")
    const answer=form.watch("answer")

    const onSubmit:SubmitHandler<FieldValues>=async(data)=>{
        setLoading(true)
        if(type=="announcement"){
            await axios.post("/api/announcement",{...data}).then(()=>{
                
                toast.success("created announcement done")
                router.refresh()
            }).catch(()=>{
                toast.error("something wrong")
        }).finally(()=>{
                setLoading(false);
                setOpen(false)
            })
        }else{
            await axios.post("/api/quiz",{answer,question}).then(()=>{
               
                toast.success("created quize done")
                router.refresh()
            })
            .catch(()=>{
                toast.error("something wrong")
            })
            .finally(()=>{
                setLoading(false);
                setOpen(false)
            })
        }
        
    }
    return(
    <>
    <Box sx={{backgroundColor:"white",m:2,p:5,borderRadius:"5px",width:"100%",flex}}>
        <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <Box>
            <Typography sx={{color:"black"}}>
                {title}
            </Typography>
            <Typography sx={{color:"gray"}}>
                {description}
            </Typography>
        </Box>
        <Box sx={{color:"#17969d",cursor:"pointer"}} onClick={()=>setOpen(true)}>{link}</Box>
        </Box>
    {dataReview?.map((each)=><AvaterCard key={each}data={each} type={type}/>)}

    </Box>
    <Model open={open} handleClose={()=>setOpen(false)} onSubmit={handleSubmit(onSubmit)}>
        {type=="announcement"?<>
        <DialogTitle>Announcement</DialogTitle>
        <DialogContent>
          <Input label={"title"} register={register} id={"title"} errors={errors} />
          {Boolean(qizes?.length)&&qizes?.length>0&&<Select
            label="quize"
            isMulti={false}
            options={
                qizes?.map((user)=>({
                    value:user.id,
                    label:user.question
                }))
            }
            onChange={(value) => setValue("quize", value, { shouldValidate: true })}
            value={quize}
        />}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button type="submit">create</Button>
        </DialogActions>    
        </>:<>
        <DialogTitle>Quize</DialogTitle>
        <DialogContent>
          <Input label={"question"} register={form?.register} id={"question"} errors={form?.formState?.errors} />
          <Input label={"answer"} register={form?.register} id={"answer"} errors={form?.formState?.errors} />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button type="submit">create</Button>
        </DialogActions>    
        </>}
    
    </Model>
    </>
)
}
export default ReviewCard