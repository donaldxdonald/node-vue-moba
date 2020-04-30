const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {type: String},
  avatar: {type: String},
  title: {type: String},
  categories: [{type: mongoose.SchemaTypes.ObjectId, ref:"Category"}],
  skills: [{
    name: {type: String},
    icon: {type: String},
    appearRatio: {type: String},
    winRatio: {type:String}
  }],
  cateRatio: {type: Number},
  coreEquips: [{
    item: {type: mongoose.SchemaTypes.ObjectId, ref:"Item"},
    appearRatio: {type: String},
    winRatio: {type:String}
  }],
  shoes: [{
    item: {type: mongoose.SchemaTypes.ObjectId, ref:"Item"},
    appearRatio: {type: String},
    winRatio: {type:String}
  }],
  initEquips: [{
    item: {type: mongoose.SchemaTypes.ObjectId, ref:"Item"},
    appearRatio: {type: String},
    winRatio: {type:String}
  }],
  simpItems: [{
    item: {type: mongoose.SchemaTypes.ObjectId, ref:"Item"},
    appearRatio: {type: String},
    winRatio: {type:String}
  }]
})

module.exports = mongoose.model('Hero', schema)