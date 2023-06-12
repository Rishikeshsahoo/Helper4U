const express = require("express");
const { Division } = require("../models");

const router = express.Router();


router.post("/",async (req,res)=>{
    try{
        const {name}=req.body
        const data= await Division.create({name})
        res.json(data)
    }
    catch(err)
    {
        console.log(err)
        res.sendStatus(400)
    }
})

router.get("/",async (req,res)=>{
    try{
        const data= await Division.findAll();
        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
})

module.exports=router;