const db = require('../config/db');
const Event = db.Event;

exports.addEvent = async (req, res) => {
  try {
    const { company_id, location, name, description } = req.body;

    const event = await Event.create({ company_id, location, name, description });

    res.status(200).json({ message: "Event created successfully!", event: event });
  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const { id } = req.params; 

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found!" });
    }

    return res.status(200).json({
      message: "Data retrieved successfully!",
      data: {
        id: event.id,
        company_id: event.company_id,
        location: event.location,
        name: event.name,
        description: event.description,
        date: event.date
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const id = req.params.id;  // Get id from URL params, not body
    const { company_id, location, name, description, date } = req.body;

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Event with given id not found!" });
    }

    event.company_id = company_id || event.company_id;
    event.location = location || event.location;
    event.name = name || event.name;
    event.description = description || event.description;
    event.date = date || event.date;

    await event.save();

    return res.status(200).json({ message: "Event updated successfully!", event });
  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};

exports.removeEvent = async (req, res) => {
  try {
    const id = req.params.id; 

    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found!" });
    }

    await event.destroy();

    return res.status(200).json({ message: "Event removed successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};
