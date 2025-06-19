import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar_today from "../Assets/imgs/calendar_today.webp";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];


const ExpenseForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [file, setFile] = useState(null);
    const handleChange = (file:any) => {
      setFile(file);
    };
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
                <div className="__mainHeading">Expense Form</div>
                <div className="__formSection" id="step1">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Date</label>
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
                          <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            customInput={
                              <button className="calander_btn">
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
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Name</label>
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
                        <label htmlFor="">Cost</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="__inputField">
                        <label htmlFor="">Payment Type</label>
                        <select name="" id="">
                          <option value="">Cash</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="__inputField mb-0">
                        <label htmlFor="">Expense Type</label>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Travel</span>
                        </div>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Health</span>
                        </div>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Software</span>
                        </div>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Phone Charges</span>
                        </div>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Printing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="__NexStep">
                    Next <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
                {/* <div className="__formSection" id="step2">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="__inputField">
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>office Supplies</span>
                        </div>
                        <div className="__inputRadioBtns">
                          <input type="radio" />
                          <span>Other</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="__inputField">
                        <textarea name="" id="">
                          Description
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="__inputField">
                        <FileUploader
                          handleChange={handleChange}
                          name="file"
                          types={fileTypes}
                        />
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

export default ExpenseForm;
