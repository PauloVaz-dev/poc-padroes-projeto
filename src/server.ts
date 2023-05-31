const sendGridMail = require('@sendgrid/mail');
require('dotenv').config()

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");

const pathToAttachment = `${__dirname}/teste.xlsx`;
const attachment = fs.readFileSync(pathToAttachment).toString("base64");


function getMessage() {
  const body = 'This is a test email using SendGrid from Node.js';
  return {
    to: 'psgvaz@gmail.com',
    from: 'psgvaz@gmail.com',
    subject: 'Test email with Node.js and SendGrid',
    text: body,
    html: `<strong>${body}</strong>`,
    attachments: [
      {
        content: attachment,
        filename: 'test.xlsx',
        disposition: "attachment"
      }
    ]
  };
}

async function sendEmail() {
  try {
    await sendGridMail.send(getMessage());
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email');
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

(async () => {
  console.log('Sending test email');
  console.log(process.env.SENDGRID_API_KEY)
  sendEmail()
})();