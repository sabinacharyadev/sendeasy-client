import { Navigate } from "react-router";
import NavBar from "../Components/NavBar";
import ReactHtmlParser from "react-html-parser";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { sendEmail } from "../axios/emailAxios";
import { toast } from "react-toastify";

const SendEmailPage = ({ selectedTemplate, setSelectedTemplate }) => {
  const initialData = {
    email: "",
    name: "",
    subject: "",
  };
  const [formData, setFormData] = useState(initialData);
  const { email, name, subject } = formData;
  const customizedTemplate = selectedTemplate
    ? selectedTemplate.html.replace("NAME", name)
    : "";

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const emailObject = {
      emails: [{ email, subject, htmlBody: customizedTemplate }],
    };
    const result = await sendEmail(emailObject);

    toast.success(`Email sent to ${result.data.data[0]}`);
    setFormData(initialData);
    setSelectedTemplate("");
  };

  return (
    <>
      {selectedTemplate && (
        <div className="homeContainer">
          <NavBar />
          <h2 className="p-4">{selectedTemplate.title}</h2>
          <Form className="p-4" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleOnChange}
                placeholder="Name"
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
                placeholder="Subject"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {ReactHtmlParser(customizedTemplate)}
        </div>
      )}
      {!selectedTemplate && <Navigate to={"/"} />}
    </>
  );
};

export default SendEmailPage;
