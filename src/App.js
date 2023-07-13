import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./Home";
import Blogs from "./Blogs";
import AboutUs from "./AboutUs";
import Jobs from "./Jobs";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar code */}
        <nav
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <img src={logo} alt="Logo" width="40" height="40" />
            </div>
            <h2 style={{ margin: 0 }}>DQ</h2>
          </Link>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            <li style={{ margin: "0 10px" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                to="/blogs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Blogs
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                Dashboard
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                to="/jobs"
                style={{ textDecoration: "none", color: "black" }}
              >
                Jobs
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
