const Etudiant = require("../models/Etudiant");

exports.postEtudiant = async (req,res)=>{
  try{ 
    const newEtudiant = new Etudiant({...req.body});
    const response = await newEtudiant.save();
    res.send({response: response, message: 'Etudiant is saved' });
  }catch(error){
    console.log(error)
    res.status(500).send({message: "can not save it"})
  }
}

exports.GetAllEtudiant = async (req,res)=>{
  try{
    const result= await Etudiant.find();
    res.send({response: result, message: `getting Etudiant successfully `})
  } catch(error){
    res.status(500).send({message: `can not get Etudiant `})
  }
}


exports.GetEtudiantById = async (req,res)=>{
  try {
    const result= await Etudiant.findOne({_id:req.params.id});
    res.send({response: result, message: 'getting Etudiant successfully'})
  } catch (error) {
    res.status(500).send({message: `can not get Etudiant with id ${req.params.id} `})
  }
}

exports.deleteEtudiant = async (req,res)=>{
  try {
    const result= await Etudiant.deleteOne({_id:req.params.id});
    result.n
      ? res.send({response:"etudiant delete"})
      : res.send({message: `there is no student with id: ${req.params.id} `})
  } catch (error) {
    res.status(500).send({message: `there is no id`})
  }
}

exports.updateEtudiant = async (req,res)=>{
  try {
    const result= await Etudiant.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
    // console.log(result) ;
    result.nModified
      ? res.send({message:"Etudiant updated"})
      : res.send({message:"Etudiant already updated"})
    console.log(result.nModified);  
  } catch (error) {
    res.status(500).send({message: `not updated : id ${req.params.id} not  found`})
  }
}
