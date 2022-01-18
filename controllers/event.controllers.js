const Evenement = require("../models/Event");

exports.postEvent = async (req,res)=>{
  try{ 
    const newEvenement = new Evenement({...req.body});
    const response = await newEvenement.save();
    res.send({response: response, message: 'Evenement is saved' });
  }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
  }
}

exports.GetAllEvent = async (req,res)=>{
  try{
    const result= await Evenement
    .find()
    // .populate('etudiant') 
    .populate('club') ;
    res.send({response: result, message: `getting Evenement successfully `})
  } catch(error){
    res.status(500).send({message: error})
  }
}


exports.GetEventById = async (req,res)=>{
  try {
    const result= await Evenement
    .findOne({_id:req.params.id})
    // .populate('etudiant') ;
    .populate('club') ;
    res.send({response: result, message: 'getting Evenement successfully'})
  } catch (error) {
    res.status(500).json({message: error});
    console.log(error);
  }
}

exports.deleteEvent = async (req,res)=>{
  try {
    const result= await Evenement.deleteOne({_id:req.params.id});
    result.n
      ? res.send({response:"event delete"})
      : res.send({message: `there is no event with id: ${req.params.id} `})
  } catch (error) {
    res.status(500).send({message: `there is no id`})
  }
}

exports.updateEvent = async (req,res)=>{
  try {
    const result= await Evenement.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
    // console.log(result) ;
    result.nModified
      ? res.send({message:"Evenement updated"})
      : res.send({message:"Evenement already updated"})
    console.log(result.nModified);  
  } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
  }
}
