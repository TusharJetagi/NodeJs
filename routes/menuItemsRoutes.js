const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menuItems");

router.get("/", async function (req, res) {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
});

router.get("/:taste", async function (req, res) {
  try {
    const taste = req.params.taste;
    if (taste == "Spicy" || taste == "Sour" || taste == "Sweet") {
      const data = await MenuItem.find({ taste: taste });
      console.log("data fetched");
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: "Invalid taste category" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Menu = new MenuItem(data);

    const response = await Menu.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const updatedData = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuId, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    console.log("Data updated");
    res.status(200).json(response);
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;
    const response = await MenuItem.findByIdAndDelete(menuId);
    if (!response) {
      return res.status(404).json({ error: "menu not found" });
    }
    console.log("data deleted");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
