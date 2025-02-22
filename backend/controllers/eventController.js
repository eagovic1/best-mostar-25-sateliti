const Event = require('../models/event');

exports.addEvent = async (req, res) =>{
  try{
    const {id, company_id, location, name, description} = req.body;

    
  }
  catch(error){
    res.status(500).json({message : "Internal server error: ", error: error.message});
  }
};

exports.getEvent = async (req, res) => {
  try{

  }
  catch(error){
    res.status(500).json({message : "Internal server error: ", error: error.message});
  }
};

exports.updateEvent = async (req, res) =>{
  try{

  }
  catch(error){
    res.status(500).json({message : "Internal server error: ", error: error.message});
  }
};

exports.removeEvent = async (req, res) =>{
  try{

  }
  catch(error){
    res.status(500).json({message : "Internal server error: ", error: error.message});
  }
};