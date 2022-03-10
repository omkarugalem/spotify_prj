import React from "react";
import { render } from "react-dom";
import AudioContextProvider, { AudioContextApi } from "./Apis/AudioContext";
import AuthProvider from "./Apis/AuthContext";
import App from "./App";
import "./global.css";
render(
  <AudioContextProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </AudioContextProvider>,

  document.getElementById("root")
);
