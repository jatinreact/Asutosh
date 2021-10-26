import React from "react";
import { Link } from "react-router-dom";
const Choose_Us = () => {
  return (
    <>
      <div className="news-updates">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h3>WHY CHOOSE US</h3>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>IF YOUR CLASSES ARE</h6>
              <ul className="boring">
                <li>Boring</li>
                <li>Aimless</li>
                <li>Lengthy</li>
                <li>Monotonous</li>
                <li>Over Head </li>
                <li>Dull</li>
                <li>Routine</li>
                <li>Lost after</li>
                <li>Superficial Assessment</li>
              </ul>
            </div>

            <div className="col-lg-3">
              <div className="arrow">
                <img src="images/arrow.png" alt="Image" className="img-fluid" />
              </div>
            </div>

            <div className="col-lg-3">
              <h6>
                CHOOSE GS <br />
                CLASSES
              </h6>
              <ul className="boring">
                <li>Interactive</li>
                <li>Targeted</li>
                <li>Crisp</li>
                <li>Innovative</li>
                <li>Into Head </li>
                <li>Exciting</li>
                <li>Application skilled</li>
                <li>Individualized auditin</li>
              </ul>
            </div>

            <div className="col-lg-3">

            <div className="main_box_btn">
                    <div className="btn_box">
                      <div class="circle">
                        <span className="smart">Smart</span>
                      </div>
                    </div>
                  </div>



              {/* <button className="classic_bt">Smart</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose_Us;
