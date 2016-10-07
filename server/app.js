var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session= require("express-session");
var Contact = require("./models/contact");
var router = require("./routes");
var usersController = require('./controllers/users.controller');
var contactsController = require('./controllers/contacts.controller');
var sessionsController = require('./controllers/sessions.controller');
var session_middleware = require("./middlewares/session");
// var redisStore= require("connect-redis")(session); 
var MongoStore = require('connect-mongo')(session);
var path = require("path");
var app= express();
var port = Number(process.env.PORT || 3000);

app.set('views', path.resolve('./client/views'));
app.set("view engine","jade");

var sessionRedisMiddleware= session({
    store: new MongoStore({
    	url: "mongodb://wedevjs:wedevjs99@ds047166.mlab.com:47166/portfolio",
    	collection:'sessions'
    }),
    secret: "1233adasdamvasdasdqw3 ads",
    saveUninitialized: true,
    resave: true,
    // cookie: { 
    // 	domain:'https://wedevjs.herokuapp.com',
    // 	path: '/', 
    // 	secure: true
    // }
});
app.use("/assets",express.static("./client/assets"));
app.use("/bower",express.static("./client/bower_components"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(sessionRedisMiddleware);

app.get('/',function(req,res) {
    res.render('index');
});

app.get('/login',function(req,res) {
    res.render('login');
});

app.get('/signup',function(req,res) {
    res.render('signup');
});


app.post('/contacts',contactsController.create); //insertar un contacto nuevo
app.post('/sessions',sessionsController.session); //inicio de session
app.post('/users',usersController.create); //insertar un nuevo usuario
app.post('/logout',sessionsController.logout); //destruir la session


app.use("/app",session_middleware);
app.use("/app",router);

app.listen(port);