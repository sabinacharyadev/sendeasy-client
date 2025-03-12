// src/data/templates.js

import template1 from "../assets/template1.png";
import template11 from "../assets/template1.1.png";
import template2 from "../assets/template2.png";
import template22 from "../assets/template2.2.png";
import template3 from "../assets/template3.png";
import template33 from "../assets/template3.3.png";

const templates = [
  {
    //First Template
    id: 1,
    title: "Welcome Email",
    bookImage: template1, // Background for the "book"
    coverImage: template11, // Image for the cover
    html: `<table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        font-family: Arial, sans-serif;
        color: #333;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td>
          <img
            src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Spring Welcome"
            style="width: 100%; display: block"
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 30px; text-align: center">
          <h1 style="color: #2a9d8f; margin-bottom: 10px">
            🌸 Welcome, NAME!
          </h1>
          <p style="font-size: 16px; color: #555; margin-bottom: 20px">
            Welcome to Send Easy! 🌿 We're excited to have you onboard. Let's
            make this season bloom with opportunities.
          </p>
          <a
            href=""
            target="_blank"
            style="
              display: inline-block;
              padding: 14px 28px;
              background-color: #2a9d8f;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: bold;
              margin-top: 20px;
            "
            >🌟 Get Started</a
          >
          <p style="font-size: 12px; color: #aaa; margin-top: 20px">
            Looking forward to a fantastic journey together! <br />
            — The Send Easy Team
          </p>
        </td>
      </tr>
    </table>`,
  },

  //second template
  {
    id: 2,
    title: "Welcome Email",
    bookImage: template2, // Background for the "book"
    coverImage: template22, // Image for the cover
    html: `
     <table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td
          style="
            background-color: #e76f51;
            color: #fff;
            padding: 30px;
            text-align: center;
          "
        >
          <h1>🔥 25% OFF - Limited Time!</h1>
          <p>Special Discount Just for You, NAME!</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Discount"
            style="width: 100%; border-radius: 8px; margin-bottom: 20px"
          />
          <p style="font-size: 14px; color: #555">
            Don't miss out! Enjoy a <strong>25% discount</strong> on all Send
            Easy services. Offer valid for 48 hours only ⏰.
          </p>
          <div style="text-align: center; margin: 30px 0">
            <a
              href=""
              target="_blank"
              style="
                padding: 14px 28px;
                background-color: #e76f51;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
              "
              >🛒 Grab Your Discount</a
            >
          </div>
          <p style="font-size: 12px; color: #aaa; text-align: center">
            Offer ends. Don't miss it!
          </p>
        </td>
      </tr>
    </table>`,
  },

  {
    id: 3,
    title: "Welcome Email",
    bookImage: template3, // Background for the "book"
    coverImage: template33, // Image for the cover
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#fff0f0;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.15);">
    <tr>
        <td style="padding:20px;text-align:center;">
            <h1 style="color:#d62828;">⚠️ Immediate Action Required</h1>
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://images.pexels.com/photos/4475526/pexels-photo-4475526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Alert" style="width:100%;display:block;">
        </td>
    </tr>
    <tr>
        <td style="padding:20px;">
            <p style="font-size:14px;color:#555;">We've detected unusual activity on your Send Easy account. Please verify your information now to keep your account secure 🔒.</p>
            <div style="text-align:center;margin:20px 0;">
                <a href="" target="_blank" style="padding:14px 28px;background-color:#d62828;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🔐 Verify Now</a>
            </div>
            <p style="font-size:12px;color:#aaa;text-align:center;">Need help? Contact Send Easy Support.</p>
        </td>
    </tr>
</table>`,
  },
];

export default templates;
