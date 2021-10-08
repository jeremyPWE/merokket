// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
export default async function contact(req, res) {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "srv54.niagahoster.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: process.env.user,
      to: "jpwijanto@merokket.id, sylvesterglen@merokket.id",
      replyTo: email,
      subject: `Merokket contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name}</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Phone: </strong> ${phone}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>
      
      `,
    });

    console.log("Message Sent", email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}
