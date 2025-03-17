import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import "./App.css";
import SendEmailPage from "./Pages/SendEmailPage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import BaseLayout from "./layouts/BaseLayout";
import PageNotFoundPage from "./Pages/PageNotFoundPage";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route path="*" element={<PageNotFoundPage />} />
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
            <Route path="pagenotfound" element={<PageNotFoundPage />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
