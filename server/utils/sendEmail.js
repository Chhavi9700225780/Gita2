const nodeMailer = require("nodemailer");

const sendEmail = async (data) => {
  // Create a nodemailer transporter with the provided SMTP configuration
  const transporter = nodeMailer.createTransport({
    secure:true,
    port: 465,
    service: "gmail",
    auth: {
      user: "c21317792@gmail.com",
      pass: "tsntdqltkuhasjif",
    },
  });

  // Define email options, including sender, recipient, subject, and message content
  const mailOptions = {
    from: "c21317792@gmail.com",
    to: "c9081741@gmail.com",
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