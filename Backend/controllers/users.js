const express = require("express");
const validate = require("../lib/middlewares/middlewares");
const { Tasks } = require("../models");

const router = express.Router();

//get all the tasks
router.get("/" ,async (req, res) => {
  try {
    const data = await Tasks.findAll();
    res.status(200).json(data)
  } catch (err) {
    console.log(err);
    res.sendStatus(400)
  }
});

//get task by id
router.get("/task/:uuid",async (req,res)=>{
    try{
        const data= await Tasks.findOne({ where: { uuid: req.params.uuid } })
        res.status(200).json(data)
    }
    catch(err)
    {
      res.status(400).send(err)
    }
})

//get tasks by division

router.get("/taskdivision/:division",async (req,res)=>{
  try{
      const data= await Tasks.findAll({where:{division:req.params.division}})
      res.status(200).json(data)
  }
  catch(err)
  {

  }
})

//add a new task
router.post("/task",validate, async (req, res) => {
  const { division, title, description, priority, status } = req.body;
  console.log(req.body)
  try {
    const data = await Tasks.create({
      division,
      title,
      description,
      priority,
      status,
    });
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


//delete a task
router.delete("/task/:uuid",async (req,res)=>{
  try
  {
    const data=  await Tasks.destroy({ where: { uuid: req.params.uuid } })
    res.status(200).json(data)
  }
  catch(err)
  {
    res.send(500).json(err)
  }
})

//update an existing task
router.patch("/task/:uuid",validate,async (req,res)=>{
  const { division, title, description, priority, status } = req.body;
  const param={division, title, description, priority, status}
  try{
    const data= Tasks.update(param,{ where: { uuid: req.params.uuid } })
    res.status(200).json(data);
  }
  catch(err)
  {
    console.log("err",err)
    res.status(500).send(err)
  } 

})


// router.get("/")

module.exports = router;
