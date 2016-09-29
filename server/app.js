var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var session= require("express-session");
var Contact = require("./models/contact");
var router = require("./routes");
var session_middleware = require("./middlewares/session");
var redisStore= require("connect-redis")(session); 
var path = require("path");
var app= express();
var port = Number(process.env.PORT || 3000);

app.set('views', path.resolve('./client/views'));
app.set("view engine","jade");

var sessionRedisMiddleware= session({
    store: new redisStore({}),
    secret: "1233adasdamvasdasdqw3 ads",
    saveUninitialized: true,
    resave: false
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

app.post('/contacts',function(req,res) {
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
});

app.post('/sessions',function(req,res) {
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
});

app.use("/app",session_middleware);
app.use("/app",router);

app.listen(port);