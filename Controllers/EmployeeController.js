const Employee = require("../Models/Employee");
const mongoose = require("mongoose");

function create(req, res, next) {
    let Name = req.body.Name;
    let Email = red.body.Email;
    let Mobile = red.body.Mobile;
    let Emp = new Emp({
        Name,
        Email,
        Mobile
    });

    Emp.save().then((data) => {
        res.send(data)
    });
}

module.exports.create = create;