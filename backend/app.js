const express = require('express');
const app = express();
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const session = require('express-session');
//const cors = require('cors');
const cron = require('node-cron');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(cors(
    {
        origin: "*",
        credentials: true,
    }
));


//database
const db = require('./config/db');
const { monthlyReset } = require('./controllers/volunteerController');
db.sequelize.sync().then(() => {
    console.log('Database is connected!');
}).catch(error => {
    console.error('Database error: ', error);
})

//session
app.use(
    session({
        secret: "secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
        }
    })
);

cron.schedule('* * 1 * *', () => {
    monthlyReset();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));