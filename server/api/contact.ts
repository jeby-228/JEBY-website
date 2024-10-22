import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // 創建一個 transporter
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",  // 使用 Gmail SMTP 服務器，您可以根據需要更改
    port: 587,
    secure: false, // 使用 TLS
    auth: {
      user: config.emailUser, // 您的郵箱地址
      pass: config.emailPass  // 您的郵箱密碼或應用專用密碼
    },
  });

  // 郵件選項
  let mailOptions = {
    from: '"您的網站" <your-email@gmail.com>', // 發件人
    to: "recipient@example.com", // 收件人
    subject: "新的聯絡表單提交", // 主題
    text: `
      姓名: ${body.name}
      郵箱: ${body.email}
      訊息: ${body.message}
    `, // 純文本內容
    html: `
      <h3>新的聯絡表單提交</h3>
      <p><strong>姓名:</strong> ${body.name}</p>
      <p><strong>郵箱:</strong> ${body.email}</p>
      <p><strong>訊息:</strong> ${body.message}</p>
    ` // HTML 內容
  };

  try {
    // 發送郵件
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return { success: true, message: "郵件已成功發送" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "發送郵件時出錯" };
  }
})
