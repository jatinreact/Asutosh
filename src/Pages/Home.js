import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
const Home = () => {
    return (
        <>

                <div class="container home_m">
                    <div class="row">
                        <div class="col-sm-8 col-12">
                            <div className="doctor_image">
                                <img src="images/image3.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div class="col-sm-4 col-12">
                            <div className="main_box">
                                <div className="top_medical">
                                    <h5>One stop solution for<br /> Medical Education</h5>
                                </div>
                                <div className="Discover_btn">
                                    <button type="button" class="btn1 ">Discover</button>
                                </div>
                                <div className="Enroll_btn">
                                    <button type="button" class="btn2">Enroll</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
           
        </>
    )
}

export default Home
