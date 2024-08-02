import { sendEmail } from "./config.email";

export const sendAdminPasswordMail = (
  name: string,
  email: string,
  password: string
) => {
  try {
    const companyLogo = process.env.COMPANY_LOGO;
    const companyRegName = process.env.COMPANY_REGISTRATION_NAME;
    const adminUrl = process.env.ADMIN_WEB_URL;
    const companyName = process.env.COMPANY_NAME;

    sendEmail(
      email,
      `${companyName}'s Admin Credentials`,
      `<span>Dear ${name},</span><br />
            <br />
            <span>Your ${companyName} login details are given below. Please do not share share this to anyone.</span><br />
            <br />
<span>Url - ${adminUrl}</span><br />
<span>Email - ${email}</span><br />
<span>password - ${password}</span><br />
<br />
<span>Please update your password after login.</span><br />
<br />
        <br />
        <span>Thanks and regards</span><br />
        <span>${companyRegName}</span><br />
        <img src="${companyLogo}" width="150" />
            `
    );
  } catch (err) {
    console.log(err);
  }
};
