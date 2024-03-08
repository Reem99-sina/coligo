"use client"
import { Icon, Typography, Box, Button, Menu, MenuItem, Accordion, ListItem, ListItemButton, ListItemText, List, AccordionSummary, AccordionDetails, SvgIconTypeMap } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useRouter} from "next/navigation"
import React, { useEffect } from "react"
import { OverridableComponent } from "@mui/material/OverridableComponent";
const EachRoute=({ data }: { data: { label: string,href:string,icon:React.ReactNode,active: boolean,onClick?:(() => Promise<undefined>) | undefined} })=>{
    const router=useRouter()
    const [anchorEl, setAnchorEl] = React.useState<null | any>(null);
    const [open, setOpen] = React.useState(false)
    const handleClick = (event: React.MouseEvent<any>) => { setAnchorEl(event.currentTarget); setOpen(true) };
    const handleClose = () => { setAnchorEl(null); setOpen(false) }
return(
    <>
     <Box onClick={() => {
        router.push(data?.href)
         }}
      sx={{ 
         display: "flex",
         my: 2, 
         justifyContent: "flex-start",
         alignItems:"center",
         backgroundColor: data?.active ? "white" : "transparent",
         py:2,":hover":{backgroundColor:  "white"}
       }} 
       onMouseEnter={handleClick} 
       onMouseLeave={handleClose}>
            

        <Icon fontSize="medium" sx={{
          mx: 2, color: data?.active||open ? "#279297" : "white",
         backgroundColor: data?.active ||open? "white" : "transparent",
                        
         }} >
          {data?.icon ? data?.icon : <AccountBalanceIcon />}
        </Icon>
               
         <Box sx={{color: data?.active||open ? "#279297" : "white"}}>
            {data?.label}
            </Box>
        </Box>
    </>
)
}
export default EachRoute