const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/userRoute');
const requestLogger = require('./utility/requestLogger');

const app = express();
//body-parser to parse the request body
app.use(bodyParser.json());
//access port and mongo URL from .dotenv
dotenv.config();
const port = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

//requestLogger to log all request coming to the application
app.use(requestLogger);
app.use('/api/user', route);

//database connection
mongoose.connect(MONGOURL).then(() => {
    console.log('Database connected successfully');

    // server listening on port
    app.listen(port, () => {
        console.log(`app running on ${port}`);
    })
}).catch(err => {
    console.log(err);
})