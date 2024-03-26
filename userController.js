const User = require('../models/userModel');

const registerUser = async (req, res, next) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        about: req.body.about,
        profilePicture: req.body.profilePicture
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'Post saved successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );


  // Implementation of user registration logic

};

const mainPage = async (req, res, next) => {
    User.find({})
    .then((user) => {

        res.render('main',{user});
        // console.log(user);
    }).catch((error) => {});


//    try{
//       res.render('main');
//    }catch(e){
//       res.status(404).send({message:'error occured'})
//    }
};

const register = async (req, res, next) => {
    try {
        
        res.render('registration');

    } catch (error){
        res.status(404).send({message:'error occured'});   
    }
};

module.exports = { registerUser , mainPage, register};
