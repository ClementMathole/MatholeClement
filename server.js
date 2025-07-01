// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const transpoter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_ADDRESS,
//         pass: process.env.APP_EMAIL_PASSWORD,
//     },
// });

// app.post('/contact', (req, res) => {
//     const { name, email, message } = req.body;
//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_ADDRESS,
//         subject: '${name} sent a message!',
//         text: message,
//     };

//     transpoter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.status(500).send('Error sending email');
//         }
//         else {
//             res.send('Email sent successfully');
//         }
//     });
// });

// app.listen(3001, () => {});
