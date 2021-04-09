const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/", itemsController.search);
router.get("/:id", itemsController.description);

module.exports = router;
