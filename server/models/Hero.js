const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  avatar: {type: String},
  title: {type: String},
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref:"Category"}],
  skills: [{
    name: {type: String},
    icon: {type: String}
  }],
  coreEquips: [{type: mongoose.SchemaTypes.ObjectId, ref:"Item"}],
  shoes: [{type: mongoose.SchemaTypes.ObjectId, ref:"Item"}],
  initEquips: [{type: mongoose.SchemaTypes.ObjectId, ref:"Item"}]
})

module.exports = mongoose.model('Hero', schema)