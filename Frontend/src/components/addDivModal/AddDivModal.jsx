import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import {TextField } from '@mui/material';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  height:"30%",
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddDivModal({openDiv, setOpenDiv,handleAddDiv}) {
    const handleClose = () =>setOpenDiv(false);
    const [name,setName]=useState("");
    
  return (
   
      <Modal
        open={openDiv}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{height:"100%", padding:"40px 0 10px 0",display:"flex", flexDirection:"column", justifyContent:'space-between'}}>
          <TextField
          id="outlined-required"
          label="Name of Division"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        
        <Button variant="contained" color="success" onClick={()=>{handleAddDiv(name); setOpenDiv(false)}}>Add</Button>
          </div>
        </Box>
      </Modal>

  );
}
