const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/userRoute');
const requestLogger = require('./utility/requestLogger');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
//body-parser to parse the request body
app.use(bodyParser.json());
//access port and mongo URL from .dotenv
dotenv.config();
const port = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

//requestLogger to log all request coming to the application
app.use(requestLogger);

//swagger documentation
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'My Users',
            description: 'This is REST API application created with Exoress. It help to fetch, create, update and delete users',
            version: '1.0.0',
            contact: {
                name: "Alex Bell",
                url: "https://www.google.com/"
            },
            servers: ['http://localhost:8000']
        }
    },
    apis: ['./routes/userRoute.js']
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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