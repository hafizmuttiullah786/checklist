import React, { useEffect, useState } from 'react'
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import profileAvatar from "../Assets/imgs/profileAvatar.webp"
import { IUserProfile } from '../types/post/Interface';
import { getCookie } from '../utils/Common';
const Profile = () => {
  const [userData, setUserData] = useState<IUserProfile | null>(null);

  useEffect(() => {
    const cookie: any = getCookie("data");
    if (cookie) {
      try {
        setUserData(cookie);
      } catch (error) {
        console.error("Invalid cookie data:", error);
      }
    }
  }, []);





  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Profile</div>
              <div className="__profileparent">
                <div className="__profileTop"></div>
                <div className="__profileDetail flex-cemter">
                  <div className="__editProfile">
                    <div>
                      <div className="__profileAvatar">
                        <img src={profileAvatar} alt="avatar" />
                      </div>
                      <div className="__profileuserName">{userData?.name}</div>
                      <div className="__userjob" style={{ textAlign: 'center' }}>{userData?.role}</div>
                    </div>
                    {/* <button className="__editBtn">Edit</button> */}
                  </div>
                  <div className="__userDetailBox">
                    <div className="flex">
                      <div className="__leftSide">
                        <div className="__detail">
                          <p>Email</p>
                          <span>{userData?.email}</span>
                        </div>
                        {userData?.department && (
                          <div className="__detail mb-0">
                            <p>Department</p>
                            <span>{userData.department}</span>
                          </div>
                        )}

                      </div>
                      <div className="__rightSide">
                        <div className="__detail">
                          <p>Status</p>
                          <span>{userData?.status}</span>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* <div className="__aboutMe">About Me</div>
                  <div className="__aboutContent">
                    Passionate UI/UX Designer with experience of crafting
                    attractive interfaces and delightful user experiences.
                  </div>
                  <div className="__socialIcons flex-gap">
                    <a href='#' className="__icon">
                      <i className="ri-facebook-circle-fill"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile
