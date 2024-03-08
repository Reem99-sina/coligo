"use client"
import { Box, Divider, Icon, Typography } from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useRoutes from "@/app/hooks/useRoutes";
import EachRoute from "./eachRoute";
import Navbar from "@/app/components/navbar/Navbar"
function Sidebar({children}:{children:React.ReactNode}) {
  const routes=useRoutes()
  return (
    <>
    <Box sx={{ border: "none",
    direction:(theme:any)=>theme?.direction,
    width:"250px",
    backgroundImage: 'linear-gradient(#17969d,#8ecfd2)',
    transition:"all 0.5s",
    height:"100vh",
    position:"fixed",color:"black",zIndex:39 }}>
    <Box sx={{ display: "flex", position: "relation", p: 2, alignItems: "center", justifyContent:  "center" }}>
                <Box sx={{color:"white",fontSize:"20px",fontWeight: 700 }}>
                    Colligo
                </Box>
                
            </Box>
            <Divider />
            {routes.map((route)=><EachRoute key={route?.href} data={route}/>)}
            <Box>
              
            </Box>
    </Box>
    <Box sx={{ml:"250px"}}>
      <Navbar/>
      {children}
    </Box>
    </>
  )
}
export default Sidebar