const express = require("express");
var router = express();
const create = require("../Controllers/EmployeeController");
const bodyparser = require("body-parser");

router.use(json());
router.post("/create", create.create);

module.exports = router;