import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./components/Form.jsx";
import reportWebVitals from "./reportWebVitals";
import Card1 from "./components/Card1";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <div className="colored"></div>
      <Form className='form'/>
  </StrictMode>
);

reportWebVitals();
