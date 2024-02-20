const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Configure your SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // use SSL for port 465
    auth: {
      user: 'neildave999@gmail.com',
      pass: 'TsLwmaPxbHpgySWz'
    }
  });

app.post('/send-email', (req, res) => {
  const { name, email, phone } = req.body;

  // Define the email content
  const mailOptions = {
    from: 'neildave999@gmail.com',
    to: 'neildave999@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));