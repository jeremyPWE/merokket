export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "srv54.niagahoster.com",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    secure: true,
  });
  const { name, email, phone, message } = req.body;
  const mailData = {
    from: process.env.user,
    to: "jpwijanto@gmail.com",
    replyTo: email,
    subject: `Merokket contact form submission from ${name}`,
    html: `<p><strong>Ada Permintaan Penjadwalan Konsultasi Baru, dari </strong></p>
            <p><strong>Nama: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Nomor Whatsapp: </strong> <a href="https://wa.me/${phone}">${phone}</a></p>
            <p><strong>Pesan: </strong> ${message}</p>          
            <p><strong>Hubungi pemohon untuk lebih detail.</strong></p>
            `,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
