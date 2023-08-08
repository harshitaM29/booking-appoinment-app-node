const User = require('../models/user');

exports.getUserInfo = (req,res,next) => {
    User.findAll()
    .then(users => {
        res.json(users);
    })
};

exports.postUserInfo = (req,res,next) => {
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    User.create({
        name:name,
        email:email,
        phone:phone
    }).then(res => console.log(res))
    .catch(err => console.log(err))
};

exports.deleteUserInfo = (req,res,next) => {
    const userId = req.body.id;
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



