const db = require('../models');


const user = db.text;

const addUser= (async (payload) => {
    const User = await user.create(payload);
    return User;
})
module.exports = {
    addUser
}