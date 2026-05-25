const HelpRequest = require("../models/usermodel");


// CREATE
exports.addRequest = async (req, res) => {

  try {

    const request = new HelpRequest(req.body);

    await request.save();

    res.status(201).json(request);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// READ
exports.getRequests = async (req, res) => {

  try {

    const requests = await HelpRequest.find();

    res.json(requests);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// UPDATE
exports.updateRequest = async (req, res) => {

  try {

    const updated =
      await HelpRequest.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updated);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// DELETE
exports.deleteRequest = async (req, res) => {

  try {

    await HelpRequest.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Request Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};