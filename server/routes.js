var express= require("express");
var router= express.Router();
var contactsController= require("./controllers/contacts.controller");
var usersController = require("./controllers/users.controller");

//Routes app
router.get('/',function(req,res){
	res.render('app/home');
});

//Routes profile
router.get("/settings/account",function(req,res){
	res.render('app/settings/edit-profile');
});

router.get("/settings/picture",function(req,res){
	res.render('app/settings/change-profile-picture');
});

router.get("/settings/password",function(req,res){
	res.render('app/settings/change-password');
});



//Routes contact
router.get('/contacts', contactsController.index);
router.get('/contacts/:id', contactsController.show);
router.post('/contacts', contactsController.create);
router.put('/contacts/:id', contactsController.update);
router.patch('/contacts/:id', contactsController.update);
router.delete('/contacts/:id', contactsController.delete);


module.exports = router;
