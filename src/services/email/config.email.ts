import nodemailer from "nodemailer";

export const sendEmail = async (
  email: string,
  subject: string,
  text: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.travellerschoice.ae",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: `${subject}`,
      html: text,
    });

    console.log("email has been sent");
  } catch (error) {
    console.log(error);
    console.log("email not sent");
  }
};
