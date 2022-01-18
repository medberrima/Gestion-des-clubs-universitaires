const Club = require("../models/Club");

exports.postClub = async (req,res)=>{
  try{ 
    const newClub = new Club({...req.body});
    const response = await newClub.save();
    res.send({response: response, message: 'Club is saved' });
  }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
  }
}

exports.GetAllClub = async (req,res)=>{
  try{
    const result= await Club.find();
    res.send({response: result, message: `getting Club successfully `})
  } catch(error){
    res.status(500).send({message: error})
  }
}


exports.GetClubById = async (req,res)=>{
  try {
    const result= await Club.findOne({_id:req.params.id});
    res.send({response: result, message: 'getting Club successfully'})
  } catch (error) {
    res.status(500).json({message: error});
    console.log(error);
  }
}

exports.deleteClub = async (req,res)=>{
  try {
    const result= await Club.deleteOne({_id:req.params.id});
    result.n
      ? res.send({response:"Club delete"})
      : res.send({message: `there is no Club with id: ${req.params.id} `})
  } catch (error) {
    res.status(500).send({message: `there is no id`})
  }
}

exports.updateClub = async (req,res)=>{
  try {
    const result= await Club.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
    // console.log(result) ;
    result.nModified
      ? res.send({message:"Club updated"})
      : res.send({message:"Club already updated"})
    console.log(result.nModified);  
  } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
  }
}
