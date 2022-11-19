const nodemailer = require("nodemailer");


const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
         // user: "darioben98@hotmail.com",
          //pass: "henrqatmgequmcmh"
           user: "isauraeckar@hotmail.com",
          pass: "mfhjsipbglbdbvch"
      
        }
      });
      const mensaje = {
        from: "ShoeStore Project <isauraeckar@hotmail.com",
        to:options.email,
        subject:options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)
}

module.exports = sendEmail;