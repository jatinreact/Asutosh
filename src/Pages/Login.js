import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import axios from 'axios';


const Login = () => {


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const SendContactData = () => {
        try {
            let url = "http://192.168.2.8:3001/login";
            let temp = {
               
                email,
                password,
            };
            axios
                .post(url, temp)
                .then(
                    (res) => {

                        alert(res.data.message);
                        // setisloading(false)
                        // console.log("data response:::", res)
                    },
                    (error) => {
                        // setisloading(false)
                        // console.log("data response error:::", error)
                    }
                )
        } catch (error) {
            console.log("data response error:::", error)

        }
    }



    return (
        <>
            
           
                

            <section className="user-area-all-style log-in-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact-form-action">
                                    <div className="form-heading text-center">
                                        <h3 className="form-title">Login to your account!</h3>
                                    </div>

                                    <form>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    {/* <i className="bx bxl-google"></i>  */}
                                                    {/* <AiFillLinkedin /> */}
                                                    Google
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    {/* <i className="bx bxl-facebook"></i> */}
                                                    {/* <FaYoutube /> */}
                                                    Facebook
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <button className="default-btn mb-30" type="submit">
                                                    {/* <i className="bx bxl-twitter"></i> */}
                                                    {/* <BsTwitter /> */}
                                                    Twitter
                                                </button>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">

                                                    <input 
                                                    className="form-control" 
                                                    type="text" 
                                                    name="name" 
                                                    value={email}
                                                    onChange={(e) => {
                                                        setemail(e.target.value)
                                                    }}
                                                    placeholder="Username or Email" 
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input 
                                                    className="form-control" 
                                                    type="password" 
                                                    name="password" 
                                                    value={password}
                                                    onChange={(e) =>{
                                                        setpassword(e.target.value)
                                                    }}
                                                    placeholder="Password" 
                                                    />
                                                </div>
                                            </div>
                                               
      
     
                                            <div className="col-lg-6 col-sm-6 form-condition">
                                                <div className="agree-label">
                                                    <input type="checkbox" id="chb1" />
                                                    <label>Remember me</label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-sm-6">
                                                <Link href="#">
                                                    <a className="forget">Forgot my password?</a>
                                                </Link>
                                            </div>

                                            <div className="col-12">
                                                <button className="default-btn btn-two" type="submit" onClick={SendContactData}>
                                                    Log In Now
                                                </button>
                                            </div>

                                            <div className="col-12">
                                                <p className="account-desc">
                                                    Not a member?
                                                    <Link to="/CreateAccount">
                                                        <a>Register</a>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                


        </>
    )
}

export default Login
