import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import {TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '40%',
  left: '55%',
  height:"60%",
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({open, setOpen,selectedTask,handleSubmit,handleDelete}) {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title,setTitle]=useState(null);
    const [description,setDescription]=useState(null);
    const [status,setstatus]=useState(null);
    
      useEffect(()=>{
          setTitle(selectedTask.title);
          setDescription(selectedTask.description)
          setstatus(selectedTask.status)
      },[selectedTask])
      
      
  
  return (
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{height:"100%", padding:"70px 0 30px 0",display:"flex", flexDirection:"column", justifyContent:'space-between'}}>
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
        <Button variant="contained"  onClick={()=>{handleSubmit(title,description,status); setOpen(false)}}>Change</Button>
        <Button variant="contained" color='error' onClick={()=>{handleDelete(); setOpen(false)}}>Delete</Button>
          </div>
        </Box>
      </Modal>

  );
}
