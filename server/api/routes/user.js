const User = require('../../models/user');

module.exports = (router) => {
  router.get('/user/:id', (req, res) => {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(500).json({
        message: 'Error finding user',
        err: err
      }));
  });

  router.get('/user/email/:email', (req, res) => {
    User.find({ email: req.params.email }).exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => res.status(500).json({
        message: 'Error finding user',
        err: err
      }));
  });

  router.post('/user', (req, res) => {
    const user = new User(req.body);
    user.save()
      .then(user => res.status(400).json(user))
      .catch(err => console.log(err));
  });

  router.put('/user/:id', (req, res) => {
    User.findOneAndUpdate(req.params.id, {
      $set: {
        isActive: req.body.isActive
      }
    }, { new: true })
      .then(user => res.status(400).json(user))
      .catch(err => console.log(err));
  });

};