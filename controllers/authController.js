const User = require('./../models/userModule');

exports.signup = async(req,res,next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status:'success',
        data:{
            tour:newUser
        }
    });
};