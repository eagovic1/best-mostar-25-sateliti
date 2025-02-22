const db = require('../config/db');
const Group = db.Group;
const Group_Volunteer = db.Group_Volunteer;

exports.createGroup = async (req, res) => {
  try{
      const { founder_id, name, num_of_members, max_num_of_members } = req.body;

      const group = await Group.create({ founder_id, name, num_of_members, max_num_of_members});
      const group_volunteer = await Group_Volunteer.create({ founder_id, GroupId: group.id});
      
      return res.status(200).json({message: "Group created successfully", group: group});
  }catch(error){
    res.status(500).json({message: "Internal server error", error: error.message});
  }
};

exports.getGroup = async (req, res) => {
  try{

  }catch(error){
    res.status(500).json({message: "Internal server error", error: error.message});
  }
}

exports.updateGroup = async (req, res) => {
  try{

  }catch(error){
    res.status(500).json({message: "Internal server error", error: error.message});
  }
}

exports.deleteGroup = async (req, res) => {
  try{
    
  }
  catch(error){
    res.status(500).json({message: "Internal server error", error: error.message});
  }
};