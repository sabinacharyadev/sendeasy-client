import { Navigate } from "react-router";
import NavBar from "../Components/NavBar";
import ReactHtmlParser from "react-html-parser";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { sendEmail } from "../axios/emailAxios";
import { toast } from "react-toastify";

const SendEmailPage = ({ selectedTemplate, setSelectedTemplate }) => {
  const initialData = {
    emails: "", // comma-separated emails input
    name: "",
    subject: "",
  };

  const [formData, setFormData] = useState(initialData);
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

    // Parse and validate email list
    const emailList = emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email !== "");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter((email) => !emailRegex.test(email));

    if (invalidEmails.length > 0) {
      toast.error(`Invalid email(s): ${invalidEmails.join(", ")}`);
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
      toast.success(`Emails sent to: ${emailList.join(", ")}`);
      setFormData(initialData);
      setSelectedTemplate("");
    } catch (error) {
      toast.error("Failed to send emails. Please try again.");
      console.error(error);
      console.log(emailObject)
      console.log(selectedTemplate)
    }
  };

  if (!selectedTemplate) {
    return <Navigate to="/" />;
  }

  return (
    <div className="homeContainer">
      <NavBar />

      <h2 className="p-4">{selectedTemplate.title}</h2>

      <Form className="p-4" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formEmails">
          <Form.Label>Recipient Emails</Form.Label>
          <Form.Control
            type="text"
            name="emails"
            value={emails}
            onChange={handleOnChange}
            placeholder="Enter recipient emails separated by commas"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
            placeholder="Recipient Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={subject}
            onChange={handleOnChange}
            placeholder="Email Subject"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Emails
        </Button>
      </Form>

      <div className="p-4">
        <h3>Email Preview</h3>
        <div style={{ border: "1px solid #ccc", padding: "20px" }}>
          {ReactHtmlParser(customizedTemplate)}
        </div>
      </div>
    </div>
  );
};

export default SendEmailPage;
