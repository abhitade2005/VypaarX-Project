import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      
      <img src="logo.png" style={{ width: "50px", height: "auto" }} alt="VypaarX Logo" className="menu-logo" />
      
      <div className={`menus ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                <i className="fa fa-dashboard me-2"></i>
                <span className="menu-text">Dashboard</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                <i className="fa fa-list-alt me-2"></i>
                <span className="menu-text">Orders</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                <i className="fa fa-briefcase me-2"></i>
                <span className="menu-text">Holdings</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                <i className="fa fa-line-chart me-2"></i>
                <span className="menu-text">Positions</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                <i className="fa fa-money me-2"></i>
                <span className="menu-text">Funds</span>
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                <i className="fa fa-home me-2"></i>
                <span className="menu-text">Home</span>
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            <i className="fa fa-user"></i>
          </div>
          <p className="username">USERID</p>
          <i className="fa fa-caret-down ms-2" style={{ fontSize: "0.7rem", color: "rgb(145, 145, 145)" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;