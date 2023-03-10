const express = require('express');
const todos = require("./todos");

const router = express.Router();

router
  .route('/health')
  .get(async (_req, res, _next) => {

    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now()
    };
    try {
      res.send(healthcheck);
    } catch (error) {
      healthcheck.message = error;
      res.status(503).send();
    }
  });

router
  .route('/getAll')
  .get(function(req, res) {
    res.json(todos);
  });

module.exports = router;
