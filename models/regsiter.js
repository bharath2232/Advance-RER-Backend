const mongoose  = require('mongoose');
const Schema = mongoose.Schema
const registerShema = new Schema ({
    name : {
        type:String,
    },
    email: {
        type:String
    },
    password: {
        type: String
    },
    notificationToken: {
        type:String
    },
    imageURL: {
        type:String
    }
})
const Users = mongoose.model('users',registerShema);
module.exports = Users;
