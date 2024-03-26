//mongodb+srv://<username>:<password>@cluster0.0pdtyn8.mongodb.net/
// mongodb+srv://piyush_user_registration:19032002@cluster0.0pdtyn8.mongodb.net/user-registration
//username =piyush_user_registration
//password =19032002

const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://piyush_user_registration:19032002@cluster0.0pdtyn8.mongodb.net/user-registration', {
      useNewUrlParser: true,
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = { connect };
