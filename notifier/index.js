const nodemailer = require('nodemailer');
const config = require('config');

const transporter = nodemailer.createTransport(config.mail);

exports.notify = (title, content) => {
  const mailOptions = {
    from: config.mail.auth.user,
    to: config.mail_to,
    subject: title,
    text: content,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
