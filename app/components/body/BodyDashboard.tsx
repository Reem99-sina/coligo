"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const BodyDashboard=()=>{
return(
    <Card sx={{ maxWidth: "100%",m:2,p:5,".MuiButtonBase-root":{borderRadius:"5px",display: "flex",flexDirection: "row-reverse" }}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={"/download.jpeg"}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="span" sx={{backgroundImage: "linear-gradient(#17969d,#8ecfd2)",backgroundClip: "text",color: "transparent"}}>
          EXAM TIME
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

)
}
export default BodyDashboard