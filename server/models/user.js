var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost/portfolio-wedevjs");

var sexo=["M","F"];
var email_match=[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"El formato del correo no es valido"];
var password_validate={
	validator:function(p){
		return this.password_confirmation==p;
	},
	message: "Las contraseñas no coinciden"
};

var user_schema= new Schema({
	name: String,
	last_name: String,
	email:{
		type: String,
		required: "El campo de correo electronico es obligatorio",
		match: email_match
	},
	username:{
		type: String,
		maxLength:[20,"Username debe tener menos de 20 caracteres"],
		required: true
	},
	password:{
		type: String,
		required: "El password es obligatorio",
		validate: password_validate,
		minLength: [8,"Password debe tener mas de 8 caracteres"]
	},
	sexo:{
		type: String,
		enum:{
			values:sexo,
			message: "Opcion no valida"
		}
	},
	age:{
		type: Number,
		min: [5,"La edad debe ser mayor a 5 años"],
		max: [100,"La edad debe ser menor a 100 años"]
	},
	birth_of_date: Date
});


var User= mongoose.model("User",user_schema);

user_schema.virtual("password_confirmation")
	.get(function(){
		return this.password_confirmation;
	})
	.set(function(password){
		this.password_confirmation=password;
	});

module.exports = User;


