//for sending mail/verification codes to the user/customer

const nodeMailer = require('nodemailer');
require('dotenv').config();


// const transport = nodeMailer.createTransport({
//     service: 'gmail',
//     auth: {

//         user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
//         pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD
//     }
// });

const transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user:process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
        pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD
    },
    logger: true, // Log SMTP transactions
    debug: true   // Include detailed debug info
});


module.exports = transport;