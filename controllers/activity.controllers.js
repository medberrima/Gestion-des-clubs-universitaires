const Activity = require("../models/Activity");

exports.postActivity = async (req,res)=>{
  try{ 
    const newActivity = new Activity({...req.body});
    const response = await newActivity.save();
    res.send({response: response, message: 'Activity is saved' });
  }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
  }
}

exports.GetAllActivity = async (req,res)=>{
  try{
    const result= await Activity.find().populate("club");
    res.send({response: result, message: `getting Activity successfully `})
  } catch(error){
    res.status(500).send({message: error})
  }
}


exports.GetActivityById = async (req,res)=>{
  try {
    const result= await Activity.findOne({_id:req.params.id}).populate("club");
    res.send({response: result, message: 'getting Activity successfully'})
  } catch (error) {
    res.status(500).json({message: error});
    console.log(error);
  }
}

exports.deleteActivity = async (req,res)=>{
  try {
    const result= await Activity.deleteOne({_id:req.params.id});
    result.n
      ? res.send({response:"Activity delete"})
      : res.send({message: `there is no Activity with id: ${req.params.id} `})
  } catch (error) {
    res.status(500).send({message: `there is no id`})
  }
}

exports.updateActivity = async (req,res)=>{
  try {
    const result= await Activity.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
    // console.log(result) ;
    result.nModified
      ? res.send({message:"Activity updated"})
      : res.send({message:"Activity already updated"})
    console.log(result.nModified);  
  } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
  }
}
