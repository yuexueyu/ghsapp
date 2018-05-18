const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');
const { sequelize } = require('./models');

const app = express();

//Middlewares
app.use(logger('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/images', express.static('images'));

app.use(cors());
app.options('*', cors());


//This file contain all Routes
require('./routes')(app)

//Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Route Not found');
    err.status = 404;
    next(err);
});

//Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    //Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    })
    //Respon to ourselves
    console.error(err);
})

sequelize.sync({ force: false })
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error occured on databased synced " + err.message))

app.listen(config.port)
    console.log(`Server started on Port : ${config.port}`)
    
