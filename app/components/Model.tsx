import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button,TextField}from "@mui/material"
const Model=({open,handleClose,children,onSubmit}:{open:boolean,handleClose:()=>void,children:React.ReactNode,onSubmit:()=>void})=>{
return(
    <>
     <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event:any) => {
            event.preventDefault();
            onSubmit()
            handleClose();
          },
        }}
      >
        {children}
      </Dialog>
    </>
)
}
export default Model