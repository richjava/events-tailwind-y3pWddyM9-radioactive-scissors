const dotenv = require("dotenv");
const EmailManager = require('../lib/EmailManager');
dotenv.config();

let emailConfig = {
  from: {
    "email": process.env.FROM_EMAIL,
    "name": process.env.NAME
  },
  to: process.env.FROM_EMAIL,
  subject: "New subscription"
};

let getSubscribeOrgEmail = function(args) {
  emailConfig.html = getBody(args);
  return emailConfig;
};

function getBody(args) {
  return EmailManager.getSubscribeOrgEmailHtml(args);
}

module.exports = getSubscribeOrgEmail;
