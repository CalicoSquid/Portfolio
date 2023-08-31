const functions = require("firebase-functions");
const axios = require("axios");

const ELASTIC_EMAIL_API_KEY = "47F473F2837568D9723E40063FCAF05121E41C1360DF8D1AB13E695B174D710E73B82AB6C3605C579CA0D8BABD495497";

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  const { name, email, message } = req.body;

  const emailData = {
    from: "calicosquidcode@gmail.com",
    to: "calicosquidcode@gmail.com",
    subject: "New Contact Form Submission",
    bodyHtml: `
      Name: ${name}<br>
      Email: ${email}<br>
      Message: ${message}
    `,
  };

  try {
    const response = await axios.post(
      "https://api.elasticemail.com/v2/email/send",
      emailData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        params: {
          apiKey: ELASTIC_EMAIL_API_KEY,
        },
      }
    );

    if (response.data.success) {
      console.log("Contact email sent successfully");
      res.status(200).send("Email sent successfully");
    } else {
      console.error("Error sending contact email:", response.data.error);
      res.status(500).send("Error sending email");
    }
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).send("Error sending email");
  }
});
