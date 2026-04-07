import React from "react";
import { createRoot } from "react-dom/client";
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import App from "./App";

// Attach router to base html div
const root = createRoot(document.getElementById("root"));

// Render the App component wrapped in CustomProvider for theming
root.render(
  <CustomProvider theme="light">
    <App />
  </CustomProvider>
);
