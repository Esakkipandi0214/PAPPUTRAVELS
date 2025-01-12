import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (you can restrict it to a specific domain)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header for requests
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin'); // Set Referrer-Policy header
   const EMAIL_USERNAME="praveenpandian01@gmail.com"
   const EMAIL_PASSWORD="inwn tram mtah zkxf"
  // Handle OPTIONS request for CORS preflight check
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only handle POST requests
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate incoming data
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      // Ensure environment variables are available
      const emailUser = EMAIL_USERNAME;
      const emailPass = EMAIL_PASSWORD;
      const recipientEmail = "travelspappu2025@gmail.com";

      if (!emailUser || !emailPass || !recipientEmail) {
        console.error('Missing environment variables.');
        return res.status(500).json({ error: 'Server misconfiguration. Please contact support.' });
      }

      // Create a transporter using nodemailer
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can switch to another service if needed
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        tls: {
            rejectUnauthorized: false, // Disables certificate validation (use with caution)
          },
      });

      // Mail options
      const mailOptions = {
        from: email, // Sender address
        to: recipientEmail, // Recipient address
        subject: `New message from ${name}`, // Subject line
        text: `You have received a new message from ${name} (${email}).\n\nMessage: ${message}`, // Plain text body with name, email, and message
      };

      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }

  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
