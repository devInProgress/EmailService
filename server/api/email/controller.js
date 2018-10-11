'use strict';

const email = {};

email.send = (req, res) => {
  res.send(req.body);
}

module.exports = email;

