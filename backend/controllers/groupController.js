const db = require('../config/db');
const Group = db.Group;
const Group_Volunteer = db.Group_Volunteer;

exports.createGroup = async (req, res) => {
  try {
    const { founder_id, name, num_of_members, max_num_of_members } = req.body;

    const group = await Group.create({ founder_id, name, num_of_members, max_num_of_members });
    const group_volunteer = await Group_Volunteer.create({ founder_id, GroupId: group.id });

    return res.status(200).json({ message: "Group created successfully", group: group });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const group = await Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    return res.status(200).json({ group: group });
  }
  catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll();
    return res.status(200).json({ groups: groups });
  }
  catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

exports.updateGroup = async (req, res) => {
  try {
    const { name, num_of_members, max_num_of_members } = req.body;
    const group = await Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    group.name = name;
    group.num_of_members = num_of_members;
    group.max_num_of_members = max_num_of_members;
    await group.save();
    return res.status(200).json({ message: "Group updated successfully", group: group });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findOne({ where: { id: req.params.id } });
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    await group.destroy();
    return res.status(200).json({ message: "Group deleted successfully" });
  }
  catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

exports.joinGroup = async (req, res) => {
  try {
    const { volunteer_id, group_id } = req.body;
    const group = await Group.findOne({ where: { id: group_id } });
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    if (group.num_of_members >= group.max_num_of_members) {
      return res.status(400).json({ message: "Group is full" });
    }
    group.num_of_members += 1;
    await group.save();
    const group_volunteer = await Group_Volunteer.create({ volunteer_id, GroupId: group.id });
    return res.status(200).json({ message: "Volunteer joined group successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

exports.leaveGroup = async (req, res) => {
  try {
    const { volunteer_id, group_id } = req.body;
    const group = await Group.findOne({ where: { id: group_id } });
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    if (group.num_of_members <= 0) {
      return res.status(400).json({ message: "Group is empty" });
    }
    group.num_of_members -= 1;
    await group.save();
    const group_volunteer = await Group_Volunteer.destroy({ where: { volunteer_id, GroupId: group.id } });
    return res.status(200).json({ message: "Volunteer left group successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

exports.numOfEventsByGroup = async (req, res) => {
  try {
    const groups = await Group.findAll();
    const group_events = [];

    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      const group_volunteers = await Group_Volunteer.findAll({ where: { GroupId: group.id } });
      const group_volunteer_ids = group_volunteers.map(group_volunteer => group_volunteer.volunteer_id);
      const group_events_count = await db.Event_Volunteer.count({
        where: {
          VolunteerId: group_volunteer_ids,
          confirmed: true
        },
        distinct: true,
        col: 'EventId'
      });
      group_events.push({ group: group, num_of_events: group_events_count });
    }

    return res.status(200).json({ group_events: group_events });
  }
  catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
