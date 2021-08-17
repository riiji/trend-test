const express = require('express');
const {solve} = require('./service');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

var jsonParser = bodyParser.json()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/test', jsonParser, async (req, res) => {
    try{
        const result = await solve(req.body);
        return res.send(result);
    } catch(error) {
        res.statusCode = 405;
        return res.send({
            "message": error.message
        });
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

