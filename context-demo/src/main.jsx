import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContext from "./contexts/CounterContext.jsx";
import UsersContext from "./contexts/UsersContext.jsx";

createRoot(document.getElementById("root")).render(
  <CounterContext>
    <UsersContext>
      <App />
    </UsersContext>
  </CounterContext>
);
