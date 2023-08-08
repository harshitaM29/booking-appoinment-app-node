const sequelize = require('./util/database')

const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const userRoutes = require('./routes/user');

app.use(bodyParser.json({extended:false}))

app.use(userRoutes);


sequelize.sync().then(res => {
    app.listen(4000);
})
.catch(err => {
    console.log(err);
})

