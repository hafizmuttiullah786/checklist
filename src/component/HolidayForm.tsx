import React from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
const HolidayForm = () => {
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">My Forms</div>
              <div className="__defaultCard">
                <div className="__mainHeading">Holiday Form</div>
                <div className="__formSection" id="step1">
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <p>First Name</p>
                      </div>
                    </div>
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <input type="text" />
                        <p>Last Name</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Email</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Position</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Employee No</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">Supervisor Name</label>
                        <input type="text" />
                        <p>First Name</p>
                      </div>
                    </div>
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <input type="text" />
                        <p>Last Name</p>
                      </div>
                    </div>
                  </div>
                  <button className="__NexStep">
                    Next <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
                {/* <div className="__formSection" id="Step2">
                  <div className="__DetailOfLeave">
                    Details of Leave/Absence
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">From</label>
                        <input type="date" />
                        <p>Date</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">To</label>
                        <input type="date" />
                        <p>Date</p>
                      </div>
                    </div>
                  </div>

                  <div className="row flex-cemter">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Leave/Absence type</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <select name="" id="">
                          <option value="">Please Select</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Email during leave</label>
                        <input
                          type="email"
                          placeholder="ex: abcd1234@gmail.com"
                        />
                        <p>ex: abcd1234@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Phone during leave</label>
                        <input type="text" placeholder="00000000000" />
                        <p>00000000000</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="">Description of Accident</label>
                      <div className="__inputField">
                        <textarea name="" id="">
                          Type Here...
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="Download__submit__btn">
                    <button className="__continueBtn">Download</button>
                    <button className="__continueBtn">Submit</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayForm;
