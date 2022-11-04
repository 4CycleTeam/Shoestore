const nodemailer = require("nodemailer");
const { options } = require("../app");

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "darioben98@hotmail.com",
          pass: "henrqatmgequmcmh"
          //user: "isauraeckar@hotmail.com",
          //pass: "yruriqqtjgkhqnci"
        }
      });
      const mensaje = {
        from: "Shop Project <darioben98@hotmail.com>",
        to:options.email,
        subject:options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)
}

module.exports = sendEmail;