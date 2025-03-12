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
    category: "popular",
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
    title: "🔥 25% OFF - Limited!",
    category: "popular",
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
    title: "⚠️ Immediate Action Required",
    category: "announcement",
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

  // Original templates (id: 1, 2, 3)...

  // ==========================
  // 4th Template: Product Launch 🚀
  // ==========================
  {
    id: 4,
    title: "🚀 Product Launch",
    category: "announcement",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: #eef6fb;
        font-family: Arial, sans-serif;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td
          style="
            background-color: #0077b6;
            color: #ffffff;
            text-align: center;
            padding: 30px;
          "
        >
          <h1>🚀 Introducing Send Easy Prime!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Launch"
            style="width: 100%; display: block"
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px">
          <p style="font-size: 14px; color: #555">
            Hey NAME 👋, experience the fastest delivery with Send Easy Prime. More reliable 🔒, quicker 🚀, and filled with rewards 🎁.
          </p>
          <div style="text-align: center; margin: 20px 0">
            <a
              href=""
              target="_blank"
              style="
                padding: 14px 28px;
                background-color: #0077b6;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
              "
              >✨ Join Prime Now</a
            >
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 5th Template: Festival Greetings 🎉
  // ==========================
  {
    id: 5,
    title: "Festival Greetings 🎉",
    category: "festival",
    bookImage: template2,
    coverImage: template22,
    html: `
    <table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: #fffbea;
        font-family: Arial, sans-serif;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td style="text-align: center; padding: 30px">
          <h1 style="color: #f4a261">🎉 Happy Holidays, NAME!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Holiday"
            style="width: 100%; display: block"
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px">
          <p style="font-size: 14px; color: #555">
            Wishing you peace, joy, and prosperity this festive season from all of us at Send Easy 🎁. Check out our festive offers now!
          </p>
          <div style="text-align: center; margin: 20px 0">
            <a
              href=""
              target="_blank"
              style="
                padding: 14px 28px;
                background-color: #f4a261;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
              "
              >🎁 Explore Offers</a
            >
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 6th Template: Flash Sale ⏰
  // ==========================
  {
    id: 6,
    title: "Flash Sale ⏰",
    bookImage: template3,
    category: "popular",
    coverImage: template33,
    html: `
    <table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        font-family: Arial, sans-serif;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td
          style="
            background: #dc2626;
            color: #fff;
            text-align: center;
            padding: 30px;
          "
        >
          <h1>⏰ Flash Sale! 50% OFF</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Flash Sale"
            style="width: 100%; display: block"
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; text-align: center">
          <p style="font-size: 14px; color: #555">
            NAME, your chance to save BIG 💸 is here! Enjoy up to 50% OFF on Send Easy services today only!
          </p>
          <div style="margin-top: 20px">
            <a
              href=""
              target="_blank"
              style="
                padding: 14px 28px;
                background-color: #dc2626;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
              "
              >🛍️ Grab Deal Now</a
            >
          </div>
          <p style="font-size: 12px; color: #aaa; margin-top: 20px">
            Offer ends soon! Don't miss out.
          </p>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 7th Template: Thank You ❤️
  // ==========================
  {
    id: 7,
    title: "Thank You ❤️",
    category: "popular",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table
      style="
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        font-family: Arial, sans-serif;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <tr>
        <td style="text-align: center; padding: 30px">
          <h1 style="color: #28a745">❤️ Thank You, NAME!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img
            src="https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300"
            alt="Thank You"
            style="width: 100%; display: block"
          />
        </td>
      </tr>
      <tr>
        <td style="padding: 20px; text-align: center">
          <p style="font-size: 14px; color: #555">
            We appreciate your support and trust in Send Easy. Your satisfaction is our priority and we’re always here for you.
          </p>
          <div style="margin-top: 20px">
            <a
              href=""
              target="_blank"
              style="
                padding: 14px 28px;
                background-color: #28a745;
                color: #fff;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
              "
              >🌟 Explore More Services</a
            >
          </div>
        </td>
      </tr>
    </table>`,
  },

  {
    id: 8,
    title: "Order Confirmation ✅",
    category: "popular",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#ffffff;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#4CAF50;color:#ffffff;text-align:center;padding:30px;">
          <h1>✅ Order Confirmed!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/4506077/pexels-photo-4506077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Order Confirmed" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, your order #12345 has been successfully placed! 🎉</p>
          <p style="font-size:14px;color:#555;">Thank you for choosing Send Easy. We’ll notify you as soon as your package ships 🚚.</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#4CAF50;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">📦 View Order</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 9th Template: Shipping Update 🚚
  // ==========================
  {
    id: 9,
    title: "Shipping Update 🚚",
    bookImage: template2,
    category: "announcement",
    coverImage: template22,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#eef6fb;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#0077b6;color:#ffffff;text-align:center;padding:30px;">
          <h1>🚚 Your Order is on the Way!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/6169670/pexels-photo-6169670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Shipping" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;">
          <p style="font-size:14px;color:#555;">Hey NAME, your order is on its way and should arrive soon! 🚀</p>
          <p style="font-size:14px;color:#555;">Track your shipment and stay updated in real time.</p>
          <div style="text-align:center;margin:20px 0;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#0077b6;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🔎 Track Package</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 10th Template: Feedback Request ⭐
  // ==========================
  {
    id: 10,
    title: "Feedback Request ⭐",
    category: "announcement",
    bookImage: template3,
    coverImage: template33,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#ffffff;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#f4a261;color:#ffffff;text-align:center;padding:30px;">
          <h1>⭐ We Value Your Feedback!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Feedback" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, we’d love to hear about your experience with Send Easy!</p>
          <p style="font-size:14px;color:#555;">It only takes a minute and helps us improve 🌟.</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#f4a261;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">📝 Leave Feedback</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 11th Template: Subscription Renewal 🔔
  // ==========================
  {
    id: 11,
    title: "Subscription Renewal 🔔",
    category: "announcement",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#fffbea;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#dc2626;color:#ffffff;text-align:center;padding:30px;">
          <h1>🔔 Renew Your Subscription!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Renewal" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, your Send Easy subscription is about to expire. Renew today to keep enjoying premium features 🚀!</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#dc2626;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🔄 Renew Now</a>
          </div>
          <p style="font-size:12px;color:#aaa;margin-top:20px;">Need help? Contact our support team anytime.</p>
        </td>
      </tr>
    </table>`,
  },

  {
    id: 12,
    title: "Birthday Wishes 🎂",
    category: "festival",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#fff9f0;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#ff6f61;color:#ffffff;text-align:center;padding:30px;">
          <h1>🎂 Happy Birthday, NAME!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/207216/pexels-photo-207216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Birthday" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">We at Send Easy wish you a fantastic day full of joy, surprises, and happiness! 🎉</p>
          <p style="font-size:14px;color:#555;">As a gift, enjoy an exclusive <strong>20% OFF</strong> on your next delivery 🎁.</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#ff6f61;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🎉 Claim Your Gift</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 13th Template: New Feature Announcement 🛠️
  // ==========================
  {
    id: 13,
    title: "New Feature  🛠️",
    bookImage: template2,
    category: "announcement",
    coverImage: template22,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#eef6fb;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 6px 16px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#264653;color:#ffffff;text-align:center;padding:30px;">
          <h1>🛠️ We've Added New Features!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="New Features" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, we've rolled out exciting new features to make your Send Easy experience even better 🚀.</p>
          <ul style="text-align:left; color:#555;">
            <li>📦 Real-time delivery tracking</li>
            <li>🔐 Enhanced security options</li>
            <li>💬 24/7 Live Chat Support</li>
          </ul>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#264653;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🚀 Explore Now</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 14th Template: Referral Invite 🎁
  // ==========================
  {
    id: 14,
    title: "Referral Invite 🎁",
    category: "popular",
    bookImage: template3,
    coverImage: template33,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#ffffff;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#00a896;color:#ffffff;text-align:center;padding:30px;">
          <h1>🎁 Invite & Earn Rewards!</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Referral" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, refer your friends to Send Easy and earn <strong>$10 credit</strong> for every signup! 🙌</p>
          <p style="font-size:14px;color:#555;">Your friends will also get an exclusive <strong>15% discount</strong> on their first delivery 🎉.</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#00a896;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">🔗 Refer Now</a>
          </div>
        </td>
      </tr>
    </table>`,
  },

  // ==========================
  // 15th Template: Service Interruption Notice ⚠️
  // ==========================
  {
    id: 15,
    title: "Service Interruption ⚠️",
    category: "announcement",
    bookImage: template1,
    coverImage: template11,
    html: `
    <table style="width:100%;max-width:600px;margin:0 auto;background:#fff3e6;font-family:Arial,sans-serif;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color:#ff6f61;color:#ffffff;text-align:center;padding:30px;">
          <h1>⚠️ Service Update</h1>
        </td>
      </tr>
      <tr>
        <td>
          <img src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300" alt="Service Interruption" style="width:100%;display:block;">
        </td>
      </tr>
      <tr>
        <td style="padding:20px;text-align:center;">
          <p style="font-size:14px;color:#555;">Hi NAME, due to scheduled maintenance, Send Easy services may experience temporary interruptions on DATE 🕒.</p>
          <p style="font-size:14px;color:#555;">We apologize for any inconvenience caused and appreciate your understanding.</p>
          <div style="margin-top:20px;">
            <a href="" target="_blank" style="padding:14px 28px;background-color:#ff6f61;color:#fff;text-decoration:none;border-radius:4px;font-weight:bold;">ℹ️ Learn More</a>
          </div>
        </td>
      </tr>
    </table>`,
  },
  
];

export default templates;
