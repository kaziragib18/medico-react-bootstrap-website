import React from "react";
import logo from "../../../images/Banner&Background/logo-new.PNG";
import "./Footer.css";

const Footer = () => {
      return (
            <div className="mt-5 footer">
                  <div className="">
                        <div className="row">
                              <div className="col-md-3 ">
                                    <div className="first__part p-2 mt-2">
                                          <img className="logo__img" src={logo} alt="" />
                                          <h6 className="mt-5">About Us</h6>
                                          <p>Lorem ipsum dolor sit amet.</p>
                                         
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="second__part">
                                          <h1 className="">Hello world</h1>
                                          <input
                                                className="input-field rounded-pill mt-3 px-4"
                                                type="text"
                                                placeholder="Hello world"
                                          />
                                          <br />
                                          <input className="input-button btn btn-primary rounded-pill px-3 py-1 mt-3 mb-4" type="submit" />
                                          <br />
                                          <p>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                                <span className="m-2 ">icon</span>
                                          </p>
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="third__part">
                                          <h1>Useful Links</h1>
                                          <p className="mt-4">Privacy Policy</p>
                                          <p>Blog</p>
                                          <p>FAQ</p>
                                          <p>Contact</p>
                                    </div>
                              </div>
                              <div className="col-md-3">
                                    <div className="fourth__part">
                                          <h1>Contact Us</h1>
                                          <small className="mt-5">Office: 12 Fake Street,New York</small>
                                          <br />
                                          <small className="mt-3">Phone: (08) 8827 633354</small>
                                          <br />
                                          <small className="mt-3">Fax: 08) 08 4752 1499</small>
                                          <br />
                                          <small className="mt-3">Mail: support.goaltheme.com</small>
                                    </div>
                              </div>
                        </div>
                        <hr />
                        <div className="text-center">
                              <small>© 2020 Medil Theme by Goalthemes. All Rights Reserved.</small>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;