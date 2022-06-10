const db = require('../models');
const userService = require('../services/user.service')
const fs = require('fs')


const Product = db.products;

const addUser = async (req, res) => {
console.log("req", JSON.stringify(req.body));
const payload={
    text: JSON.stringify(req.body)
}
    const user = await userService.addUser(payload);
    res.status(200).send(user);
}

module.exports = {
    addUser,
}