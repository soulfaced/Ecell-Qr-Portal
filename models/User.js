const {model,Schema} = require('mongoose');

const userSchema = new Schema({
    name:String,
    password:String,
    email:String,
    event:String
});

module.exports = model('user',userSchema);