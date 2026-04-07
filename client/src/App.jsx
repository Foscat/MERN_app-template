import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import WorkBench from "./components/pages/WorkBench";
import NoMatch from "./components/pages/NoMatch";
import NavBar from "./components/parts/NavBar";
import "./reset.css";
import "./App.css";

/**
 * @component App
 * @description The main application component that sets up routing for the application. It includes a navigation bar and defines routes for the home page, workbench, and a catch-all route for unmatched URLs. The Router component from react-router-dom is used to manage the routing logic.
 * @returns {JSX.Element} The rendered App component with routing.
 */
function App() {
  return (
    <Router>
      <div className="app-shell">
        <NavBar />
        <Routes>
          {/* 'path' is how you set up html page routes */}
          <Route path="/" element={<Home />} />
          {/* Workbench is for writing new code to keep new parts isolated for easier developing */}
          <Route path="/workbench" element={<WorkBench />} />
          {/* If no url routes match show error page */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
