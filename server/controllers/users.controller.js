var User = require('../models/user');

module.exports = {
	index : function(req,res){	

	},
	show : function(req,res){

	},
	create : function(req,res){
		var user = new User({
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			password_confirmation: req.body.password_confirmation
		});

		user.save(function(err,user){
			if(!err){
				res.redirect('/login');
			}
			else{
				console.log(err);
			}
		});

	},
	update : function(req,res){

	},
	delete : function(req,res){


	},
	session : function(req,res){
		User.findOne({
	        email: req.body.email,
	        password: req.body.password
	    },function(err,user){
	        if(!err){
	            if(user!=null){
	                req.session.user_id=user._id;
	                res.redirect("/app");
	            }
	            else{
	                res.redirect("/login");
	            }
	        }
	        else
	        {
	            res.render(err);
	        }
	    });
	}
};