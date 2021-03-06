var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://wedevjs:wedevjs99@ds047166.mlab.com:47166/portfolio");
// mongoose.connect("mongodb://localhost/portfolio-wedevjs");

var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Format email is not validate."];

var contact_schema= new Schema({
	name: String,
	email:{
		type: String,
		required: true,
		match: email_match
	},
	message_subject:{
		type:String,
		required:true
	},
	message:{
		type:String,
		required: true,
	},
	created:{
		type: Date,
		default: Date.now
	}
});


var Contact= mongoose.model("Contact",contact_schema);


module.exports = Contact;


