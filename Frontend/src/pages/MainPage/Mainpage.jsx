import React, { useEffect, useState } from 'react'
import axios from "axios"

import Sidebar from "../../components/sidebar/Sidebar"
import Tasks from '../../components/Tasks/Tasks';
import AddModal from '../../components/addModal/AddModal';
import AddDivModal from '../../components/addDivModal/AddDivModal';
function Mainpage() {
  const [division,setDivision]= useState({});
  const [currentDivision, setCurrentDivision]=useState("")
  const [toggle, setToggle]=useState(0)
  const [nopen, setNopen]=useState(false)
  const [openDiv, setOpenDiv]=useState(false)


  const handleSubmit=(title,description,status)=>{
    console.log(`bull`)
    axios.post("http://localhost:4000/user/task",{title,description,status,division:currentDivision,priority:0})
    .then((res)=>{console.log(res.data); setToggle((prev)=>(prev+1)%2)})
    .catch((err)=>{console.log(err)})
  }
  const handleAddDiv=(name)=>{
    axios.post("http://localhost:4000/division/",{name})
    .then((res)=>{console.log(res.data); setToggle((prev)=>(prev+1)/2)})
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/division/")
    .then((response)=>{
      setDivision(response.data)
      if(response.data!==null && response.data.length>0 && currentDivision==="")
      {
        setCurrentDivision(response.data[0].name)
      }
    })
    .catch((err)=>{
      setCurrentDivision("")
      console.log(err)
    })
  },[toggle])

  
  return (
    <div style={{backgroundColor:"#f5f5f5" ,height:"100vh"}}>
      <AddModal nopen={nopen} setNopen={setNopen} handleSubmit={handleSubmit}></AddModal>
      <AddDivModal openDiv={openDiv} setOpenDiv={setOpenDiv} handleAddDiv={handleAddDiv}></AddDivModal>
        <Sidebar setOpenDiv={setOpenDiv}  setNopen={ setNopen} setToggle={setToggle} division={division} currentDivision={currentDivision} setCurrentDivision={setCurrentDivision}></Sidebar>
        <Tasks toggle={toggle} setToggle={setToggle} division={division} currentDivision={currentDivision} ></Tasks>
    </div>
  )
}

export default Mainpage