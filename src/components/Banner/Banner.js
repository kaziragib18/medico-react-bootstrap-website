import React from 'react';
import "./Banner.css";

const Banner = () => {
      return (
            <div>
                  <div className="banner d-flex  align-items-center ">
                        <div className="row container">
                              <div className="col-md-10">
                                    <h1 className="title">Take care of your Health Now !</h1>
                                    <h2 className="title-sm"> Sale up to 30% all products</h2>
                                    <button className="btn btn-danger rounded-pill m-3 py-3 px-4">Shop Now</button>
                              </div>
                              <div className="col-md-2"></div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;