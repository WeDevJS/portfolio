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


	}
};