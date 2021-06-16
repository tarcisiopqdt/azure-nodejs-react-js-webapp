const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    nomeCompleto: { type: String, required: true },
    email: { type: String, required: true },
    estado: { type: String, required: true },
    empresa: { type: String, required: false },
    telefone: { type: String, required: true }
  },
  // { autoIndex: false }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
