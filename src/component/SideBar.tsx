import React, { useState, useEffect } from "react";
import logo from "../Assets/imgs/logo.webp";
import home from "../Assets/imgs/home.webp";
import billing from "../Assets/imgs/billing.webp";
import UserManagment from "../Assets/imgs/userManagment.webp";
import CheckList from "../Assets/imgs/checklist.webp";
import profile from "../Assets/imgs/profile.webp";
import paymentinq from "../Assets/imgs/PaymentInq.webp";

const SideBar = () => {
  const [isFormsOpen, setIsFormsOpen] = useState(false);

  const toggleFormsMenu = () => {
    setIsFormsOpen(!isFormsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

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
          <img src={logo} alt="logo" style={{opacity:"0"}} />
          <a href="#" className="backArrow" onClick={handleMenuClick}>
            <i className="ri-arrow-left-line"></i>
          </a>
        </div>
        <p className="__menuText">MENU</p>
        <ul className="__menuList">
          <li>
            <a href="/?role=user" className="flex-gap active">
              <img src={home} alt="home" />
              Home
            </a>
          </li>
          <li>
            <a href="/billing" className="flex-gap ">
                <img src={billing} alt="billing" />
              Billing
            </a>
          </li>
          <li>
            <a href="/usermanagment" className="flex-gap ">
              <img src={UserManagment} alt="user" />
              User Managment
            </a>
          </li>
          <li>
            <a href="/check-list" className="flex-gap">
              <img src={CheckList} alt="checklist" />
              Checklist
            </a>
          </li>

          <li>
            <a href="/profile" className="flex-gap">
              <img src={profile} alt="profile" />
              My Profile
            </a>
          </li>

          <li>
            <a href="/payment-inquiry" className="flex-gap">
              <img src={paymentinq} alt="payment inquiry" />
              Payment Inquiry
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
