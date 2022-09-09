import { config as dotenvConfig } from "dotenv";
// import enableCORS from "./lib/enable-cors";
import sendEmail from "./lib/send-email";
import addToCol from "./lib/add-to-col";
import getDonateOrgEmail from "./email/getDonateOrgEmail";
import getDonateUserEmail from "./email/getDonateUserEmail";

dotenvConfig();

export default async function handler(req, res) {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const donationAmount = req.body.donationAmount;
    const emailConfig = {
      lastName: lastName,
      firstName: firstName,
      status: "Pending payment",
      paymentDate: "",
      donationAmount: donationAmount,
      email: email,
      phone: phone,
    };
    const sheetsRes = await addToCol(
      "Sheet1!A1:G1",
      emailConfig,
      process.env.DONATIONS_SPREADSHEET_ID
    );
    let donateOrgEmail = getDonateOrgEmail(emailConfig);
    await sendEmail(donateOrgEmail);
    let donateUserEmail = getDonateUserEmail(emailConfig);
    sendEmail(donateUserEmail).then(
      () => {
        res.status(200).json({
          statusCode: 200,
          body: JSON.stringify(sheetsRes),
        });
      },
      (msg) => {
        res.status(422).json({
          success: false,
          message: msg,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      statusCode: 500,
      body: JSON.stringify(err)
    });
  }
}
