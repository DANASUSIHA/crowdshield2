const express = require("express");

const router = express.Router();

const {
  addRequest,
  getRequests,
  updateRequest,
  deleteRequest
} = require("../controllers/userController");


router.post("/add-request", addRequest);

router.get("/requests", getRequests);

router.put("/update-request/:id", updateRequest);

router.delete("/delete-request/:id", deleteRequest);


module.exports = router;