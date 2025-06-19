import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar_today from "../Assets/imgs/calendar_today.webp"
const AccidentForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
                <div className="__mainHeading">Accident Form</div>
                <div className="__formSection" id="step1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Date</label>
                        {/* date  */}
                        <div className="date__inputs">
                          <input
                            type="text"
                            placeholder="Month"
                            value={
                              selectedDate
                                ? (selectedDate.getMonth() + 1)
                                    .toString()
                                    .padStart(2, "0")
                                : ""
                            }
                            readOnly
                          />

                          {/* Day */}
                          <input
                            type="text"
                            placeholder="Day"
                            value={
                              selectedDate
                                ? selectedDate
                                    .getDate()
                                    .toString()
                                    .padStart(2, "0")
                                : ""
                            }
                            readOnly
                          />

                          {/* Year */}
                          <input
                            type="text"
                            placeholder="Year"
                            value={
                              selectedDate
                                ? selectedDate.getFullYear().toString()
                                : ""
                            }
                            readOnly
                          />

                          {/* Hidden Date Picker */}
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            customInput={
                              <button className="calander_btn">
                                {/* <Calendar size={20} /> */}
                                <img src={calendar_today} alt="calendar" />
                              </button>
                            }
                          />
                        </div>
                        {/* date  */}
                      </div>
                    </div>
                    <div className="col-lg-6"></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">
                          Name of Participant/Injured Party
                        </label>
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
                        <label htmlFor="">Employee ID</label>
                        <input type="text" />
                        <p>First Name</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6  col-md-6">
                      <div className="__inputField">
                        <label htmlFor="">
                          Name of Parent/Guardian(if applicable)
                        </label>
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
                        <label htmlFor="">Phone</label>
                        <input type="number" />
                      </div>
                    </div>
                  </div>
                  <button className="__NexStep">
                    Next <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
                {/* accident form step2 */}
                {/* <div className="__formSection" id="Step2">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Staff Completing Form</label>
                        <input type="text" />
                        <p>First Name</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <input type="text" />
                        <p>Last Name</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Phone</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row flex-cemter">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Area where Accident Occured</label>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <input type="text" />
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
                  <button className="__NexStep">
                    Next <i className="ri-arrow-right-line"></i>
                  </button>
                </div> */}
                {/* accident form step3 */}
                {/* <div className="__formSection" id="Step3">
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="">
                        Action Taken/Treatment Administered
                      </label>
                      <div className="__inputField">
                        <textarea name="" id="">
                          Type Here...
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Witness 1</label>
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" />
                            <p>First Name</p>
                          </div>
                          <div className="col-lg-6">
                            <input type="text" />
                            <p>Last Name</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Witness 1</label>
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" />
                            <p>First Name</p>
                          </div>
                          <div className="col-lg-6">
                            <input type="text" />
                            <p>Last Name</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="">Follow Up Action(if applicable)</label>
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

export default AccidentForm;
