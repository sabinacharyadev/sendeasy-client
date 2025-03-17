import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import SendEmailPage from "./Pages/SendEmailPage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import BaseLayout from "./layouts/BaseLayout";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route
              path="*"
              element={<HomePage setSelectedTemplate={setSelectedTemplate} />}
            />
            <Route
              path=""
              element={<HomePage setSelectedTemplate={setSelectedTemplate} />}
            />
            <Route
              path="send-email"
              element={
                <SendEmailPage
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
