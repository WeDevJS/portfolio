var Contact= require("../models/contact");

module.exports = {
	index: function(req,res){
		
	},
	show: function(req,res){
		
	},
	create: function(req,res){
		var contact=new Contact({
            name: req.body.name,
            email: req.body.email,
            message_subject: req.body.subject,
            message: req.body.message
	    });
	    contact.save(function(err,contact){
	        if(!err){
	            res.redirect('/');
	        }
	        else{
	            console.log(err);
	        }
	    });
	},
	update: function(req,res){
		console.log(req.body);
	},
	delete: function(req,res){
		
	}
};