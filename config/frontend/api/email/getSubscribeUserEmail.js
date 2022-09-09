const dotenv = require("dotenv");
const EmailManager = require('../lib/EmailManager');
dotenv.config();

let emailConfig = {
  from: {
    "email": process.env.FROM_EMAIL,
    "name": process.env.NAME
  },
  subject: `Your ${process.env.NAME} subscription`
};

let getSubscribeUserEmail = function(args) {
  emailConfig.html = getBody(args);
  emailConfig.to = args.email;
  return emailConfig;
};

function getBody(args) {
  return EmailManager.getSubscribeUserEmailHtml(args);
}

module.exports = getSubscribeUserEmail;
