import sgMail from "@sendgrid/mail";

export default function sendEmail(msg) {
  return new Promise((resolve, reject) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    (async () => {
       sgMail.send(msg)
        .then(() => {
          resolve();
        })
        .catch(error => {

          //Log friendly error
          console.error(error.toString());
      
          //Extract error msg
          const {message, code, response} = error;
      
          //Extract response msg
          const {headers, body} = response;
          reject(error.message);
        });
    })();
  });
};
