export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    secure: true,
  });
  const { name, email, time, date, phone, topic, msg } = req.body;
  const mailData = {
    from: process.env.user,
    to: "jpwijanto@gmail.com",
    replyTo: email,
    subject: `SURAJA LAW OFFICES contact form submission from ${name}`,
    html: `<p><strong>Ada Permintaan Penjadwalan Konsultasi Baru, dari </strong></p>
            <p><strong>Nama: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Nomor Whatsapp: </strong> <a href="https://wa.me/${phone}">${phone}</a></p>
            <p><strong>Tanggal: </strong> ${date}</p>
            <p><strong>Jam Konsultasi: </strong> ${time}</p>
            <p><strong>Topic Konsultasi: </strong> ${topic}</p>
            <p><strong>Deskripsi Masalah: </strong> ${msg}</p>          
            <p><strong>Hubungi pemohon untuk memastikan penjadwalan konsultasi.</strong></p>
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
