const dotenv = require("dotenv");
const EmailManager = require('../lib/EmailManager');
dotenv.config();

let emailConfig = {
  from: {
    "email": process.env.FROM_EMAIL,
    "name": process.env.NAME
  },
  to: process.env.FROM_EMAIL,
  subject: "New donation"
};

let getDonateOrgEmail = function(args) {
  emailConfig.html = getBody(args);
  return emailConfig;
};

function getBody(args) {
  return EmailManager.getDonateOrgEmailHtml(args);
}

module.exports = getDonateOrgEmail;
