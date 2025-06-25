import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../Assets/imgs/logo.webp";
import home from "../Assets/imgs/home.webp";
import billing from "../Assets/imgs/billing.webp";
import UserManagment from "../Assets/imgs/userManagment.webp";
import CheckList from "../Assets/imgs/checklist.webp";
import profile from "../Assets/imgs/profile.webp";
import paymentinq from "../Assets/imgs/PaymentInq.webp";

const SideBar = () => {
  const [isFormsOpen, setIsFormsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleFormsMenu = () => {
    setIsFormsOpen(!isFormsOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const toggleHandler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggleSidebar", toggleHandler);
    return () => {
      window.removeEventListener("toggleSidebar", toggleHandler);
    };
  }, []);

  const handleMenuClick = () => {
    window.dispatchEvent(new Event("toggleSidebar"));
  };

  return (
    <>
      <div className={`__sideBar ${isOpen ? "active" : ""}`}>
        <div className="logo">
          <img src={logo} alt="logo" style={{ opacity: "0" }} />
          <a href="#" className="backArrow" onClick={handleMenuClick}>
            <i className="ri-arrow-left-line"></i>
          </a>
        </div>
        <p className="__menuText">MENU</p>
        <ul className="__menuList">
          <li>
            <Link
              to="/home"
              className={`flex-gap ${
                location.pathname === "/home" ? "active" : ""
              }`}
            >
              <img src={home} alt="home" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex-gap ${isActive("/profile") ? "active" : ""}`}
            >
              <img src={profile} alt="profile" />
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="/alluser"
              className={`flex-gap ${isActive("/alluser") ? "active" : ""}`}
            >
              <img src={profile} alt="profile" />
              All Users
            </Link>
          </li>
          <li>
            <Link
              to="/usermanagment"
              className={`flex-gap ${
                isActive("/usermanagment") ? "active" : ""
              }`}
            >
              <img src={UserManagment} alt="user" />
              User Managment
            </Link>
          </li>
          <li>
            <Link
              to="/checklist"
              className={`flex-gap ${isActive("/checklist") ? "active" : ""}`}
            >
              <img src={CheckList} alt="checklist" />
              Checklist
            </Link>
          </li>

          <li>
            <Link
              to="/payment-inquiry"
              className={`flex-gap ${
                isActive("/payment-inquiry") ? "active" : ""
              }`}
            >
              <img src={paymentinq} alt="payment inquiry" />
              Payment Inquiry
            </Link>
          </li>
          <li>
            <Link
              to="/billing"
              className={`flex-gap ${isActive("/billing") ? "active" : ""}`}
            >
              <img src={billing} alt="billing" />
              Billing
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
