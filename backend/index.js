const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./src/config/configs');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Netflix.Core.HelpDesk",
        version: "1.0.0",
        description: "API to open and monitoring requests to Help Desk"
    },
    license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
    },
    host: "localhost:8883",
    basePath: "/",
    servers: [
        {
            url: "http://localhost:8883/"
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ["**/models/*.js", "**/routes/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);


app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    isExplorer: true
}));

app.get('/', (req, res) => {
    res.redirect('/api/')
});

mongoose
    .connect(
        config.MONGO_URL,
        { useNewUrsParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use(cors({ exposedHeaders: ['Content-Length', 'Authorization'] }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/requests', routes.requests);

app.listen(config.PORT, () => {
    console.log(`server is runing on port ${config.PORT}`);
})