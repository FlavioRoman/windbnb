import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store.js";
import App from "./App.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
