import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import {MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  height:"50%",
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddModal({nopen, setNopen,handleSubmit}) {
    const handleClose = () => setNopen(false);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [status,setstatus]=useState(0);
  
   const clear=()=>{
      setTitle("")
      setDescription("")
      setstatus(0)
    }
   
  return (
   
      <Modal
        open={nopen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{height:"100%", padding:"60px 0 10px 0",display:"flex", flexDirection:"column", justifyContent:'space-between'}}>
          <TextField
          id="outlined-required"
          label="Title"
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
         <TextField

          id="outlined-required"
          label="Description"
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
        />
         <Select
            value={status}
            label="Age"
            onChange={(e)=>{setstatus(e.target.value)}}
        >
            <MenuItem value={0}>Pending</MenuItem>
            <MenuItem value={1}>In Progress</MenuItem>
            <MenuItem value={2}>Complete</MenuItem>
        </Select>
        <Button variant="contained"  onClick={()=>{handleSubmit(title,description,status); clear(); setNopen(false)}}>Add</Button>
          </div>
        </Box>
      </Modal>

  );
}
