var express = require('express');

var productsRoutes = require('./routes/productsRoutes');
var ratesRoutes = require('./routes/ratesRoutes')
var activityRoutes = require('./routes/activityRoutes')
var bodyParser = require("body-parser");
// Testing of OpenShift
var cors = require('cors');
var app = express();
var whitelist = ['http://yesenterprise.co.in',
 'http://dev.yesenterprise.co.in', 
 "http://localhost:4200",
"http://localhost:5000"]
var corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: function (origin, callback) {
     //  if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        // } else {
        //     callback(new Error('Not allowed by CORS  ' + origin))
        // }
    },
    preflightContinue: false
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', productsRoutes);
app.use('/', ratesRoutes);
app.use('/', activityRoutes);


// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err.message);
});

app.get('/', function (req, res) {
    res.json({ message: 'Welcome to Yes Api' });
});

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
    console.log("Server is running at port " + app.get('port'));
});

// allow other dependencies to use it
module.exports = app;