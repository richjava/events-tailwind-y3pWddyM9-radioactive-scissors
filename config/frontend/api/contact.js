import { config as dotenvConfig } from "dotenv";
import sendEmail from "./lib/send-email";

import getContactOrgEmail from "./email/getContactOrgEmail";

dotenvConfig();

export default async function handler(req, res) {
  try {
    let emailConfig = req.body;
    let contactOrgEmail = getContactOrgEmail(emailConfig);
    sendEmail(contactOrgEmail).then(
      () => {
        res.status(200).json({
          statusCode: 200,
          body: JSON.stringify({
            success: true
          }),
        });
      },
      msg => {
        res.status(422).json({
          statusCode: 422,
          body: JSON.stringify({
            success: false,
            message: msg
          }),
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      body: JSON.stringify(err),
    });
  }
}
