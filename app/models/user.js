//// load the things we need
//var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');
//
//// define the schema for our user model
//var userSchema = mongoose.Schema({
//
//    local            : {
//        email        : String,
//        password     : String,
//    },
//    facebook         : {
//        id           : String,
//        token        : String,
//        email        : String,
//        name         : String
//    },
//    twitter          : {
//        id           : String,
//        token        : String,
//        displayName  : String,
//        username     : String
//    },
//    google           : {
//        id           : String,
//        token        : String,
//        email        : String,
//        name         : String
//    }
//
//});
//
//// generating a hash
//userSchema.methods.generateHash = function(password) {
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//};
//
//// checking if password is valid
//userSchema.methods.validPassword = function(password) {
//    return bcrypt.compareSync(password, this.local.password);
//};
//
//// create the model for users and expose it to our app
//module.exports = mongoose.model('User', userSchema);

var bcrypt   = require('bcrypt-nodejs');
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    // generating a hash
    User.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }
    // checking if password is valid
    User.validPassword = function(user, password) {
        return bcrypt.compareSync(password, user.password);
    };

    return User;
}
