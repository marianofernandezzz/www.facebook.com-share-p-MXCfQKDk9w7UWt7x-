const path = require('path');
const fs = require('fs');
const userService = require('../data/userService');



const userController = {
  login: (req, res) => {
      res.render('products/index');
  },

  processRegister: async (req, res) => {
      try {
          await userService.create(req);
          res.redirect('../../');
      } catch (error) {
          res.status(500).send({ error: 'Hubo un error al registrarse' });
      }
  },
}
module.exports = userController
