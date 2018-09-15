const User = require('../../models/User')
const express = require('express');
const router = express.Router();
const { generateToken, sendToken } = require('../../utils/token.utils');
const passport = require('passport');
const config = require('../../../config/config');
require('../../utils/passport')();

module.exports = (app) => {
  router.route('/api/auth/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), function(req, res, next) {

      console.log("IN POST ROUTE")
      if (!req.user) {
        return res.send(401, 'User Not Authenticated');
      }
      req.auth = {
        id: req.user.id
      };

      next();
    }, generateToken, sendToken);

  app.use('/login', router);


}
