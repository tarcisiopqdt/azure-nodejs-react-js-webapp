const User = require('../models/user-model');
const ReadPreference = require('mongodb').ReadPreference;

require('../infra/mongodb-conn').connect();

function get(req, res) {
  const docquery = User.find({}).read(ReadPreference.NEAREST);
  docquery.exec().then(users => { res.json(users); })
    .catch(err => { res.status(500).send(err); });
}

function create(req, res) {
  const { id, nomeCompleto, email, estado, empresa, telefone } = req.body;

  const user = new User({ id, nomeCompleto, email, estado, empresa, telefone });
  user.save().then(() => { res.json(user); })
    .catch(err => { res.status(500).send(err); });
}

function update(req, res) {
  const { id, nomeCompleto, email, estado, empresa, telefone } = req.body;

  User.findOne({ id })
    .then(user => {
      user.nomeCompleto = nomeCompleto;
      user.email = email;
      user.estado = estado;
      user.empresa = empresa;
      user.telefone = telefone;
      user.save().then(res.json(user));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  User.findOneAndRemove({ id })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}
module.exports = { get, create, update, destroy };
