import React from 'react';
import './Navigation.css';
import logo from "../../../images/Banner&Background/logo-new.PNG";
const Navigation = () => {
      return (
            <div>
                  <div className="row nav__container">
                        <div className="col-md-2 col-lg-2 col-sm-12">
                              <div className="logo p-3">
                                    <img className="logo__img" src={logo} alt="" />
                              </div>
                        </div>
                        <div className="col-md-10 col-lg-10 col-sm-12">
                              <div className="menu__items me-5">
                                    <ul className="d-flex align-items-end justify-content-end">
                                          <li className="items m-2 p-2">Home</li>
                                          <li className="items m-2 p-2">Shop</li>
                                          <li className="items m-2 p-2">Contact</li>
                                          <li className="items m-2 p-2">About</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navigation;