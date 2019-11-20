const bcrypt = require('bcrypt');
const { User } = require('../models');

const saltRounds = 10;
const regex = /\S/;

const userController = {

  apiCheckuser: (req, res) => {
    if (!req.session.userId) {
      return res.send(null);
    }
    User.findOne({
      where: {
        id: req.session.userId,
      },
    }).then((user) => res.json(user));

    return false;
  },

  handleRegister: (req, res) => {
    const { username, password, nickname } = req.body;

    if (!regex.test(username) || !regex.test(password) || !regex.test(nickname)) {
      return res.json({ errorMessage: '還沒填完唷！' });
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        req.json({ errorMessage: err.toString() });
      }
      User.create({
        username,
        nickname,
        password: hash,
      }).then(() => res.json({ success: true }))
        .catch(() => res.json({ errorMessage: '已有相同帳號註冊過囉！' }));
      return false;
    });
    return false;
  },

  handleLogin: (req, res) => {
    const { username, password } = req.body;

    if (!regex.test(username) || !regex.test(password)) {
      return res.json({ errorMessage: '還沒填完唷！' });
    }

    User.findOne({
      where: {
        username,
      },
    }).then((user) => {
      if (!user) {
        return res.json({ errorMessage: '帳號或密碼錯誤' });
      }
      bcrypt.compare(password, user.password, (error, isSuccess) => {
        if (error || !isSuccess) {
          return res.json({ errorMessage: '帳號或密碼錯誤' });
        }

        req.session.userId = user.id;
        req.session.nickname = user.nickname;

        return res.send(user.nickname);
      });
      return false;
    }).catch((err) => res.json({ errorMessage: err.toString() }));
    return false;
  },

  handleLogout: (req, res) => {
    req.session.userId = null;
    return res.send('success');
  },
};

module.exports = userController;
