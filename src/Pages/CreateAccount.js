import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const CreateAccount = () => {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [passwoerd, setpasswoerd] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    //error
    const [firstnameError, setfirstnameError] = useState(false);
    const [lastnameError, setlastnameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false)
    const [confirmpasswordError, setconfirmpasswordError] = useState(false)


    const SendContactData = () => {
        if (firstname === "") {
            setfirstnameError(true);
            return;
        }

        if (lastname === "") {
            setlastnameError(true);
            return;
        }
        if (email === "") {
            setemailError(true)
            return;
        }
        if ( passwoerd ==="") {
            setpasswordError(true)
            return;
        }
        if (passwoerd !== confirmpassword){
            setconfirmpasswordError(true);
            return;
        }

        try {
            let url = "http://192.168.2.8:3001/signup";
            let temp = {
                firstname,
                lastname,
                email,
                password: confirmpassword,

            };
            axios
                .post(url, temp)
                .then(
                    (res) => {


                        // <Link className="nav-link" to="/"></Link>
                        // window.location.href="/"
                        alert(res.data.message);
                        console.log("data response:::", res)
                    },

                    (error) => {

                        console.log("data response error:::", error)
                    }
                )
        } catch (error) {

            console.log("data response error:::", error)

        }
    }



    return (
        <>

            <section className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-action">
                                <div className="form-heading text-center">
                                    <h3 className="form-title">Create an account!</h3>
                                </div>

                                <div className="form">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    value={firstname}
                                                    onChange={(e) => {
                                                        setfirstnameError(false)

                                                        setfirstname(e.target.value)
                                                    }}
                                                    placeholder="First Name"
                                                />
                                                {firstnameError && (
                                                    <span className="text-danger">Eneter first name</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="name"
                                                    value={lastname}
                                                    
                                                    onChange={(e) => {
                                                        setlastnameError(false)
                                                        setlastname(e.target.value);
                                                    }}
                                                    placeholder="Last Name"
                                                />
                                                {lastnameError && (
                                                    <span className="text-danger">Enter last name</span>
                                                )}
                                               
                                            </div>
                                        </div>

                                        {/* <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                 className="form-control" 
                                                 type="text"
                                                name="name"
                                                placeholder="Enter Your Username" 
                                                   />
                                            </div>
                                        </div> */}

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setemailError(false)
                                                        setemail(e.target.value);
                                                    }}
                                                    placeholder="Email Address"
                                                />
                                                {emailError && (
                                                    <span className="text-danger">Enter Your Email</span>
                                                ) }
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="password"
                                                    value={passwoerd}
                                                    onChange={(e) => {
                                                        setpasswordError(false)
                                                        setpasswoerd(e.target.value)
                                                    }}
                                                    placeholder="Password"
                                                />
                                                {passwordError && (
                                                    <span className="text-danger">Enter password</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="password"
                                                    value={confirmpassword}
                                                    onChange={(e) => {
                                                        setconfirmpasswordError(false)
                                                        setconfirmpassword(e.target.value)
                                                    }}
                                                    placeholder="Confirm Password"
                                                />
                                                { confirmpasswordError && (
                                                    <span className="text-danger">Confirm password</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <center><button className="default-btn btn-two" type="submit" onClick={SendContactData}>
                                                Register Account
                                            </button></center>
                                        </div>

                                        <div className="col-12">
                                            <p className="account-desc">
                                                Already have an account?

                                                <a> <Link to="/login">Login</Link></a>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CreateAccount
