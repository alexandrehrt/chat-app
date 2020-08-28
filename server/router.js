const express = require('express');
const router = express.Router();

let users = [];

router.get('/', (request, response) => {
  response.send('server is up and running');
});

router.post('/create', (req, res) => {
  users.push(req.body);
  console.log(users);
  return users;
})

module.exports = router;