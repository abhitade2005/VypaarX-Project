import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleLogout = () => {
    logout();
  };

  const isActive = (path) => location.pathname === path;

  const navLinkStyle = (path, index) => ({
    color: isActive(path) ? "#387ED1" : hoveredItem === index ? "#387ED1" : "#424242",
    transition: "all 0.3s ease",
    fontWeight: isActive(path) ? "600" : "500",
    position: "relative",
    paddingBottom: "5px",
    borderBottom: isActive(path) ? "2px solid #387ED1" : "2px solid transparent"
  });

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ 
        backgroundColor: "#FFFFFF",
        padding: "1rem 0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
      }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/VypaarX.png"
            style={{ 
              width: "130px", 
              height: "auto",
              transition: "transform 0.3s ease"
            }}
            alt="VypaarX Logo"
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "2px solid #387ED1",
            padding: "10px 15px",
            backgroundColor: "transparent",
            borderRadius: "6px"
          }}
        >
          <i className="fa fa-bars" style={{ color: "#387ED1", fontSize: "20px" }}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-1" style={{
            textAlign: "center"
          }}>
            <li className="nav-item">
              <Link 
                className="nav-link px-3" 
                to="/about"
                style={navLinkStyle("/about", 0)}
                onMouseEnter={() => setHoveredItem(0)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link px-3" 
                to="/products"
                style={navLinkStyle("/products", 1)}
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link px-3" 
                to="/pricing"
                style={navLinkStyle("/pricing", 2)}
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link px-3" 
                to="/support"
                style={navLinkStyle("/support", 3)}
                onMouseEnter={() => setHoveredItem(3)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Support
              </Link>
            </li>

            <li className="nav-item ms-3 d-none d-lg-block">
              <div style={{
                width: "1px",
                height: "30px",
                backgroundColor: "#e0e0e0"
              }}></div>
            </li>

            {!user ? (
              <>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <Link 
                    className="nav-link fw-medium px-3" 
                    to="/login"
                    style={{ 
                      color: "#387ED1",
                      transition: "all 0.3s ease",
                      fontWeight: "600"
                    }}
                    onMouseOver={(e) => e.target.style.color = "#2a5fa8"}
                    onMouseOut={(e) => e.target.style.color = "#387ED1"}
                  >
                    <i className="fa fa-sign-in me-2"></i>
                    Login
                  </Link>
                </li>
                <li className="nav-item ms-lg-1 mt-2 mt-lg-0">
                  <Link 
                    className="btn px-4 py-2" 
                    to="/signup"
                    style={{ 
                      backgroundColor: "#387ED1",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: "600",
                      color: "white",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 6px rgba(56, 126, 209, 0.3)"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#2a5fa8";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 4px 10px rgba(56, 126, 209, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#387ED1";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 2px 6px rgba(56, 126, 209, 0.3)";
                    }}
                  >
                    <i className="fa fa-user-plus me-2"></i>
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <a
                    className="btn px-4 py-2"
                    href="http://localhost:3001/"
                    style={{
                      backgroundColor: "transparent",
                      border: "2px solid #387ED1",
                      borderRadius: "6px",
                      fontWeight: "600",
                      color: "#387ED1",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#387ED1";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#387ED1";
                    }}
                  >
                    <i className="fa fa-dashboard me-2"></i>
                    Dashboard
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <span 
                    className="nav-link fw-medium px-3" 
                    style={{ 
                      cursor: "default",
                      color: "#424242",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "6px",
                      padding: "8px 16px"
                    }}
                  >
                    <i className="fa fa-user-circle me-2" style={{ color: "#387ED1" }}></i>
                    {user.name}
                  </span>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                  <a
                    className="btn px-4 py-2"
                    href="http://localhost:3001/"
                    style={{
                      backgroundColor: "#387ED1",
                      border: "none",
                      borderRadius: "6px",
                      fontWeight: "600",
                      color: "white",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      boxShadow: "0 2px 6px rgba(56, 126, 209, 0.3)"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#2a5fa8";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 4px 10px rgba(56, 126, 209, 0.4)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#387ED1";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "0 2px 6px rgba(56, 126, 209, 0.3)";
                    }}
                  >
                    <i className="fa fa-dashboard me-2"></i>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item ms-lg-2 mt-2 mt-lg-0 mb-3 mb-lg-0">
                  <button
                    className="btn px-4 py-2"
                    onClick={handleLogout}
                    style={{ 
                      backgroundColor: "transparent",
                      border: "2px solid #f44336",
                      borderRadius: "6px",
                      fontWeight: "600",
                      color: "#f44336",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#f44336";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#f44336";
                    }}
                  >
                    <i className="fa fa-sign-out me-2"></i>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
