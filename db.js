const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
id: ObjectId,
email: String,
password:String,
firstname: String,
lastname: String
})

const UserModel =mongoose.model("user",userSchema);

module.exports={
    UserModel
}