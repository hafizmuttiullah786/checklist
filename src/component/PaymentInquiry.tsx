import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const PaymentInquiry = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <>
      <div className="__dashboard">
        <div className="__dashboard__wrapper">
          <SideBar />
          <div className="__dashboardRightSide">
            <TopBar />
            <div className="__dashboardContent">
              <div className="__pageHeading">Payment Inquiries</div>
              <div className="__myTraining">
                <div className="billingTop">
                  <div className="statusSelec">
                    <span>Status</span>
                    <select name="" id="">
                      <option value="">All</option>
                    </select>
                  </div>
                  <div className="csv_pdf">
                    <button className="csv">Export to CSV</button>
                    <button className="pdf_btn">Export to PDF</button>
                  </div>
                </div>
                <div className="form__paremt">
                  <div className="formFields">
                    <div className="__input__group">
                      <label htmlFor="">User Name/Email</label>
                      <input type="email" placeholder="abcd1234@gmail.com" />
                    </div>
                    <div className="__input__group">
                      <label htmlFor="">Payment Status</label>
                      <select name="" id="">
                        <option value="">All Statuses</option>
                      </select>
                    </div>
                    <div className="__input__group">
                      <label htmlFor="">Date Range</label>
                      <div className="date-range-container">
                        <DatePicker
                          selected={startDate}
                          onChange={(
                            dates: [Date | null, Date | null],
                            event: React.SyntheticEvent<any> | undefined
                          ) => {
                            const [start, end] = dates;
                            setStartDate(start);
                            setEndDate(end);
                          }}
                          startDate={startDate}
                          endDate={endDate}
                          selectsRange
                          placeholderText="Start Date - End Date"
                          className="date-input"
                        />
                      </div>
                    </div>
                    <div className="__input__group">
                      <label htmlFor="">Payment Method</label>
                      <select name="" id="">
                        <option value="">All Methods</option>
                      </select>
                    </div>
                    <div className="__input__group">
                      <label htmlFor="">Actions</label>
                      <input type="email" placeholder="view" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="__defaultTable">
                      <table>
                        <thead>
                          <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Invoice ID</th>
                            <th>Payment Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Method</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>User Name</td>
                            <td>abcd1234@ gamil.com</td>
                            <td>INV-00123</td>
                            <td>May 30, 2025</td>
                            <td>$200.00</td>
                            <td>
                              <button className="paid_btn">Paid</button>
                            </td>
                            <td>PayPal</td>
                          </tr>
                          <tr>
                            <td>User Name</td>
                            <td>abcd1234@ gamil.com</td>
                            <td>INV-00123</td>
                            <td>May 30, 2025</td>
                            <td>$200.00</td>
                            <td>
                              <button className="overdue_btn">Paid</button>
                            </td>
                            <td>PayPal</td>
                          </tr>
                          <tr>
                            <td>User Name</td>
                            <td>abcd1234@ gamil.com</td>
                            <td>INV-00123</td>
                            <td>May 30, 2025</td>
                            <td>$200.00</td>
                            <td>
                              <button className="unpaid_btn">Paid</button>
                            </td>
                            <td>PayPal</td>
                          </tr>
                          <tr>
                            <td>User Name</td>
                            <td>abcd1234@ gamil.com</td>
                            <td>INV-00123</td>
                            <td>May 30, 2025</td>
                            <td>$200.00</td>
                            <td>
                              <button className="refund_btn">Paid</button>
                            </td>
                            <td>PayPal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInquiry;
