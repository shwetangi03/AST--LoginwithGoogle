import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="811553660711-t1eempa5t76qoffvk2ch8kjmabijb5gg.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
