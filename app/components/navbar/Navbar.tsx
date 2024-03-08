"use client"
import { Box, Typography, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
 
    return (
        <Box sx={{ height: "100px", display: "flex", backgroundColor: "white",alignItems:"center",justifyContent:"space-around" }}>
            <Box>
                <Typography sx={{color:"gray",fontWeight:"700",fontSize:"20px"}}>
                    Welcome
                </Typography>
            </Box>
            <Box sx={{display:"flex",alignItems:"center"}}>
                <TextField   variant="outlined" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} placeholder="search" sx={{".MuiInputBase-input":{padding:"10px"},".MuiInputBase-root":{borderRadius:"10px"}}}/>
                <Box>
                    <NotificationsIcon  sx={{color:"#279297",mx:1,fontSize:"20px"}}/>
                    <EmailIcon    sx={{color:"#279297",mx:2,fontSize:"20px"}}/>
                    <AccountCircleIcon   sx={{color:"#279297",mx:1,fontSize:"20px"}}/>
                </Box>
            </Box>
        </Box>
    )
}
export default Navbar