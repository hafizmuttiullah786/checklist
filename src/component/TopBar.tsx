import React from "react";
import avatar from "../Assets/imgs/avatar.webp";
import { Dropdown } from "react-bootstrap";
const TopBar = () => {
  const handleMenuClick = () => {
    window.dispatchEvent(new Event("toggleSidebar"));
  };
  return (
    <>
      <div className="__topBar b-shadow">
        <div className="flex">
          <div>
            <div className="__topHeading">Dashboard</div>
            <div className="menubar" onClick={handleMenuClick}>
              <i className="ri-menu-line"></i>
            </div>
          </div>

          <div className="__TopRightSide flex-gap">
            <div className="__searchInput">
              <input type="text" placeholder="search" />
              <i className="ri-search-line"></i>
            </div>
            {/* <div className="__notificationBar flex-cemter">
              <i className="ri-notification-line"></i>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-notification"
                className="__notificationBar flex-cemter"
              >
                <i className="ri-notification-line"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="__notificationdropDown">
                <Dropdown.Item href="#/action-1">
                  No new notifications
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Another notification
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <div className="__userProfile flex-gap">
              <div className="__avatar flex-cemter">
                <img src={avatar} alt="avatar" />
              </div>
              <div className="__userName ">
                Huzaifa Khayam
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle
                as="div"
                className="__userProfile flex-gap"
                id="dropdown-custom-components"
              >
                <div className="__avatar flex-cemter">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="__userName">
                  Huzaifa Khayam <i className="ri-arrow-down-s-line"></i>
                </div>
                <i className="ri-arrow-down-s-line"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="userProfilemenu">
                <Dropdown.Item href="#/profile">
                  <div className="flex-gap">
                    <i className="ri-user-line"></i>
                    My Profile
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/logout">
                  <div className="flex-gap">
                    <i className="ri-logout-box-r-line"></i>
                    Logout
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
