import React from "react";

const Connect = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>QUICK CONNECT</h3>

            <p>Phone</p>
            <p>E mail</p>
            <p>What s app</p>
          </div>

          <div className="col-lg-6">
            <form>
              <div class="form-group">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>

                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                ></input>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Mobile Number"
                ></input>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Select Course"
                ></input>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Type your message here…."
                ></input>
              </div>
              <div class="form-group"></div>

              <button type="button" class="btn3 ">
                Submit
              </button>
              <br />
              <button type="button" class="btn4 ">
                PAY NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
