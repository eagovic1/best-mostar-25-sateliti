const db = require('../config/db');
const Event = db.Event;

exports.addEvent = async (req, res) => {
  try {
    const { company_id, location, name, description } = req.body;

    const event = await Event.create({ company_id, location, name, description, date: new Date() });

    // create Prize objects from list of strings
    const Prizes = db.Prizes;
    const prizes = req.body.prizes;
    if (prizes) {
      for (let prize of prizes) {
        await Prizes.create({ event_id: event.id, name: prize });
      }
    }

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

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();

    return res.status(200).json({
      message: "Data retrieved successfully!",
      data: events
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
}

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

exports.addParticipant = async (req, res) => {
  try {
    const { volunteer_id } = req.body;  // Directly destructure volunteer_id
    const event_id = req.params.id;

    const event_volunteer = db.Event_Volunteer;

    // Check if the volunteer_id and event_id are provided
    if (!volunteer_id || !event_id) {
      return res.status(400).json({ message: "Missing volunteer_id or event_id" });
    }

    // Add participant to Event_Volunteer table
    await event_volunteer.create({
      EventId: event_id,
      VolunteerId: volunteer_id,
      confirmed: false,
    });

    res.status(200).json({ message: "Participant added successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

exports.removeParticipant = async (req, res) => {
  try {
    const { volunteer_id } = req.body;
    const event_id = req.params.id;

    const event_volunteer = db.Event_Volunteer;

    await event_volunteer.destroy({
      where: {
        EventId: event_id,
        VolunteerId: volunteer_id
      }
    });

    res.status(200).json({ message: "Participant removed successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};

exports.confirmParticipant = async (req, res) => {
  try {
    const { volunteer_id } = req.body;
    const event_id = req.params.id;

    const Event_Volunteer = db.Event_Volunteer;

    const event_volunteer = await Event_Volunteer.findOne({
      where: {
        EventId: event_id,
        VolunteerId: volunteer_id
      }
    });

    if (!event_volunteer) {
      return res.status(404).json({ message: "Event volunteer not found!" });
    }

    event_volunteer.confirmed = true;
    await event_volunteer.save();

    res.status(200).json({ message: "Participant confirmed successfully!" });

  } catch (error) {
    res.status(500).json({ message: "Internal server error: ", error: error.message });
  }
};

exports.assignRandomPrizes = async (req, res) => {
  let prizes = await db.Prizes.findAll({
    where: { event_id: req.params.id, random: true }
  });

  let participants = await db.Event_Volunteer.findAll({
    where: { EventId: req.params.id, confirmed: true }
  });

  let randomParticipants = getRandomUsesrStreakCount(participants, prizes.length);
  let prizeAssignments = randomParticipants.map((participant, index) => {
    return { participant: participant, prize: prizes[index] };
  });

  res.status(200).json({ message: "Prizes assigned successfully!", data: prizeAssignments });
};
