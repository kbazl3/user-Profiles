var session = require('express-session');

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'd',
    password: 'd',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {

    login : function(req, res, next) {
        console.log(req.body.name);
        var userFound = false;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name === req.body.name && users[i].password === req.body.password) {
                console.log("hit");
                req.session.currentUser = users[i];
                userFound = true;
            }
        }
        if (userFound) {
            res.send({userFound: true});
        }
        else {
            res.send({userFound: false});
        }
    }


};
