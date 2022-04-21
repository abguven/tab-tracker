const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const port = 8081;

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());


//app.get('/', (req, res) => res.send('Hello World!'))
app.get("/status", (req, res) =>{
    res.send({
        message: "Hello world"
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))