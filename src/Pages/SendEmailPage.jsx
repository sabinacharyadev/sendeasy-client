import { Navigate } from "react-router";
import NavBar from "../Components/NavBar";
import ReactHtmlParser from "react-html-parser";
import { Button, Form, Spinner } from "react-bootstrap";
import { useState } from "react";
import { sendEmail } from "../axios/emailAxios";
import { toast } from "react-toastify";
import useLoader from "../hooks/useLoader";
import Footer from "../Components/Footer";

const SendEmailPage = ({ selectedTemplate, setSelectedTemplate }) => {
  const initialData = {
    emails: "",
    name: "",
    subject: "",
  };

  const [formData, setFormData] = useState(initialData);
  const { isLoading, startLoading, stopLoading } = useLoader(false);
  const { emails, name, subject } = formData;

  const customizedTemplate = selectedTemplate
    ? selectedTemplate.html.replace(/NAME/g, name)
    : "";

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    startLoading();

    const emailList = emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email !== "");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter((email) => !emailRegex.test(email));

    if (invalidEmails.length > 0) {
      toast.error(`Invalid email: ${invalidEmails.join(", ")}`);
      return;
    }

    const emailObject = {
      emails: emailList.map((email) => ({
        email,
        subject,
        htmlBody: customizedTemplate,
      })),
    };

    try {
      const result = await sendEmail(emailObject);
      toast.success(`Email sent to: ${result.data.data.join(", ")}`);
      setFormData(initialData);
      setSelectedTemplate("");
      stopLoading();
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.log("server error");
      }
      toast.error("Failed to send email. Please try again.");
      console.error(error);
      stopLoading();
    }
  };

  if (!selectedTemplate) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className="homeContainer"
      style={{ background: "#f7f9fc", minHeight: "100vh" }}
    >
      <NavBar />

      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "#0077b6",
            padding: "20px 30px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>{selectedTemplate.title}</h2>
          <Button variant="light" onClick={() => setSelectedTemplate("")}>
            Change Template
          </Button>
        </div>

        <div style={{ padding: "30px" }}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-4" controlId="formEmails">
              <Form.Label style={{ fontWeight: "bold" }}>
                Recipient Email
              </Form.Label>
              <Form.Control
                type="text"
                name="emails"
                value={emails}
                onChange={handleOnChange}
                //                placeholder="Enter recipient emails separated by commas"
                placeholder="Enter recipient email"
                required
                style={{ padding: "12px", borderRadius: "8px" }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formName">
              <Form.Label style={{ fontWeight: "bold" }}>
                Recipient Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleOnChange}
                placeholder="Recipient Name"
                required
                style={{ padding: "12px", borderRadius: "8px" }}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formSubject">
              <Form.Label style={{ fontWeight: "bold" }}>
                Email Subject
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={handleOnChange}
                placeholder="Email Subject"
                required
                style={{ padding: "12px", borderRadius: "8px" }}
              />
            </Form.Group>

            <Button
              type="submit"
              style={{
                backgroundColor: "#0077b6",
                padding: "12px 24px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "none",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#005f87")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b6")}
            >
              {isLoading ? <Spinner animation="border" /> : "🚀 Send Email"}
            </Button>
          </Form>

          <hr style={{ margin: "40px 0" }} />

          <h3 style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Email Preview
          </h3>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#fafafa",
              minHeight: "300px",
            }}
          >
            {ReactHtmlParser(customizedTemplate)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendEmailPage;
