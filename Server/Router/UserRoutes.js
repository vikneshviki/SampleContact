const express = require("express");
const UserRoute = express.Router();
const User = require("../Model/UserModel");

UserRoute.post("/create", async (req, res) => {
  console.log("API post", req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

UserRoute.get("/getAll", async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json({ message: "Well done", data: allUser });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

UserRoute.delete("/removeUser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete({ _id: id });
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

UserRoute.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = UserRoute;
