var User = require('../models/user');

module.exports = {
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
	},
	logout : function(req,res){
		req.session.destroy(function(err) {
		  console.log(err);
		});
		res.redirect("/login");
	}
};