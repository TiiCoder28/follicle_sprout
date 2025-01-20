const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const postRouter = require('./routers/postsRouter');
const session = require('express-session');
const passport = require('./passport-config');


const app = express();

require('dotenv/config');


// Middleware
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(morgan('tiny'));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    console.log('API is working')
    res.json({message : 'Hello from the server'})
})

// Catch-all route to serve index.html for SPA routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});



mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'follicle_sprout-database'
}).then(() => {
    console.log('connection established')
})
.catch((err) => {
    console.log(err, ' no connection found')
})

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    
    console.log(`Server is running on http://localhost:${PORT}`);
});
