const nodemailer = require("nodemailer");

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,
        auth: {
            user: 'isauraeckar@hotmail.com',
            pass: 'yruriqqtjgkhqnci'
        }
    });
      const mensaje = {
        from: "vetyShop Project <isauraeckar@hotmail.com>",
        to:options.email,
        subject:options.subject,
        text: options.mensaje
      }

      await transport.sendMail(mensaje)
}

module.exports = sendEmail;