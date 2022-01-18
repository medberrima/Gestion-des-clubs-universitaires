// const Evenement = require("../models/");

// exports.postParticipant = async (req,res)=>{
//   try{ 
//     const newParticipant = new Participant({...req.body});
//     const response = await newParticipant.save();
//     res.send({response: response, message: 'Participant is saved' });
//   }catch(error){
//     console.log(error)
//     res.status(500).send({message: "can not save it"})
//   }
// }

// exports.GetAllParticipant = async (req,res)=>{
//   try{
//     const result= await Participant.find();
//     res.send({response: result, message: `getting Participant successfully `})
//   } catch(error){
//     res.status(500).send({message: `can not get Participant `})
//   }
// }


// exports.GetParticipantById = async (req,res)=>{
//   try {
//     const result= await Participant.findOne({_id:req.params.id});
//     res.send({response: result, message: 'getting Participant successfully'})
//   } catch (error) {
//     res.status(500).send({message: `can not get Participant with id ${req.params.id} `})
//   }
// }

// exports.deleteEvent = async (req,res)=>{
//   try {
//     const result= await Participant.deleteOne({_id:req.params.id});
//     result.n
//       ? res.send({response:"user delete"})
//       : res.send({message: `there is no event with id: ${req.params.id} `})
//   } catch (error) {
//     res.status(500).send({message: `there is no id`})
//   }
// }

// exports.updateEvent = async (req,res)=>{
//   try {
//     const result= await Participant.updateOne(
//       {_id:req.params.id},
//       {$set:{...req.body}}
//     );
//     console.log(result) ;
//     result.nModified
//       ? res.send({message:"Participant updated"})
//       : res.send({message:"Participant already updated"})
//   } catch (error) {
//     res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
//   }
// }
