import nodemailer from 'nodemailer';

export default function handler(req, res) {
  const { name, email, message } = req.body;

  // Crea un objeto de transporte para enviar el correo electrónico
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'example@gmail.com',
      pass: '12345678',
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Configura las opciones del correo electrónico
  const mailOptions = {
    from: 'smtp.gmail.com',
    to: 'zoeguzman.ok@gmail.com',
    text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Ocurrió un error al enviar el correo electrónico');
    } else {
      console.log(`Correo electrónico enviado: ${info.response}`);
      res.status(200).send('El correo electrónico se envió correctamente');
    }
  });
}
