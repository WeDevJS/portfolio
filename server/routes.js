var express= require("express");
var router= express.Router();
var contactController= require("./controllers/contacts.controller");

//Routes contact
router.get('/contacts', contactController.index);
router.get('/contacts/:id', contactController.show);
router.post('/contacts', contactController.create);
router.put('/contacts/:id', contactController.update);
router.patch('/contacts/:id', contactController.update);
router.delete('/contacts/:id', contactController.delete);


module.exports = router;
