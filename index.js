const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

//////////------=====SERVER---LISTENING=====---------------------------
const port = 3001;
app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`)
});
//////////-------------------------------------------------------------

const {Routes} = require('./routes/routes')
app.use('/', Routes)
app.get('/route', (req, res) => {
    res.send({ status: 200, response: "OK" })
})


/////////-----------====SWAGGER---CONFIGURATION====--------------------
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: ['./routes/routes.js']
}
const swaggerSpec = swaggerJSDoc(swaggerOptions)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
/////////---------====SWAGGER---CONFIGURATION---END====----------------
