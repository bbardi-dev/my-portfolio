import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });

    try {
      const emailToSend = await transporter.sendMail({
        from: process.env.USER,
        to: process.env.SEND_TO,
        subject: `Contact form email sent from ${name}`,
        html: `Email sent from: <h2>${email}</h2> 
        
        <br/>
        
        <pre>${message}</pre>
        
        `,
      });
      console.log(emailToSend.accepted);
      res.status(200).json("Success");
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  } else {
    res.status(400).json({ message: "fuck off" });
  }
}
