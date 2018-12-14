const nodemailer = require('nodemailer');
const config = require('config');
const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

const transporter = nodemailer.createTransport(config.mail);

const source = fs.readFileSync(path.join(__dirname, 'mail-template.hbs'), 'utf8');
const template = Handlebars.compile(source);

exports.notify = (notification) => {
  const mailOptions = {
    from: config.mail.auth.user,
    to: notification.email,
    subject: notification.title,
    html: template(notification),
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
