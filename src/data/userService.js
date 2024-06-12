const path = require('path');
const fs = require('fs');
const db = require('../model/database/models');


const userService = {
    create: async function (req) {
        try {
            let newUser = await db.User.create({
                email: req.body.email,
                password: req.body.password,
            })
            return newUser;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

module.exports = userService