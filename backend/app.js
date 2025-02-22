const express = require('express');
const app = express();
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api', routes);


//database
const db = require('./config/db');
db.sequelize.sync().then(()=>{
    console.log('Database is connected!');
}).catch(error => {
    console.error('Database error: ', error);
})

//cors
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

//session

app.use(
    session({
        secret: "secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure:false,
            httpOnly: true,
        }
    })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));