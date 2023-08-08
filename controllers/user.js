const User = require('../models/user');

exports.getUserInfo = async(req,res,next) => {
   const users = await User.findAll();
   res.status(200).json(users)
};

exports.postUserInfo = async(req,res,next) => {
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
   const data = await User.create({
        name:name,
        email:email,
        phone:phone
    });
    res.status(201).json(data)
  
};

exports.deleteUserInfo = (req,res,next) => {
    const userId = req.params.id;
    console.log("userid",userId)
    User.findByPk(userId)
    .then(user => {
        return user.destroy();
       })
       .then(result => {
        console.log('destroyed product');
        
       })
       .catch(err => console.log(err))

};



