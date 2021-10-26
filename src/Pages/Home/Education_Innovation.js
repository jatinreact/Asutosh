import React from "react";
import { Link } from "react-router-dom";
const Education_Innovation = () => {
  return (
    <>
      <div className="news-updates">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h3>Education Innovation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="row innov">
                <div className="col-lg-6 col-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        INNOVATIVE <br />
                        CLASSES
                      </h5>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body card_class">
                      <h5 class="card-title">
                        REMIDIAL <br />
                        ASSESSMENT
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-6">
                  <div class="card">
                    <div class="card-body card_class">
                      <h5 class="card-title">
                        CONCEPT <br />
                        CREATION
                      </h5>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        APPLIED <br />
                        LEARNING
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <h6>OUR CONCEPT</h6>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <div className="main_box_btn">
                    <div className="btn_box">
                      <div class="circle">
                        <span className="smart">Smart</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="main_box_btn">
                    <div className="btn_box">
                      <div class="circle">
                        <span className="smart">Supportive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="circle last">
                <span className="smart">Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education_Innovation;
