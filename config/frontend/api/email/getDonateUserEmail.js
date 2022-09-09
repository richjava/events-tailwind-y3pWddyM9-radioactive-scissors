const dotenv = require("dotenv");
const EmailManager = require('../lib/EmailManager');
dotenv.config();

let emailConfig = {
  from: {
    "email": process.env.FROM_EMAIL,
    "name": process.env.NAME
  },
  subject: `Your donation to ${process.env.NAME}`
};

let getDonateUserEmail = function(args) {
  emailConfig.html = getBody(args);
  emailConfig.to = args.email;
  return emailConfig;
};

function getBody(args) {
  return EmailManager.getDonateUserEmailHtml(args);
}

module.exports = getDonateUserEmail;
