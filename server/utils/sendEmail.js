const nodeMailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (data) => {
  // Create a nodemailer transporter with the provided SMTP configuration
  const transporter = nodeMailer.createTransport({
    secure:true,
    port: 465,
    service: "gmail",
    auth: {
      user: process.env.SMPT_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Define email options, including sender, recipient, subject, and message content
  const mailOptions = {
    from: process.env.SMPT_EMAIL,
    to: process.env.SMPT_MAIL,
    subject: data.subject,
    text: `${data.email}, ${data.message}`
  };
  
  // Send the email using the transporter
   transporter.sendMail(mailOptions,(err,emailRes)=>{
    if(err){
      throw err
    }
    return "success";
  });
};

module.exports = sendEmail;