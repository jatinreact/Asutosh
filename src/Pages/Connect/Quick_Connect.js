import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';

const Quick_Connect = () => {
    return (
        <div>
           

<div className="container">
  <div className="row">
    <div className="col-lg-6">
      <h3>QUICK CONNECT</h3>
     
      <FaFacebookSquare />
      <BsTwitter />
      <AiFillLinkedin />
      <FaYoutube />
     
      <p>Phone</p>
      <p>E mail</p>
      <p>What s app</p>
    </div>

    <div className="col-lg-6">
      
<form>
  <div class="form-group">

    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"></input>
    
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"></input>
    
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"></input>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number"></input>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Select Course"></input>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type your message here…."></input>
    
    
  </div>
  
  
  <button type="button" class="btn3 ">Submit</button><br />
<button type="button" class="btn4 ">PAY NOW</button>
 
</form>

    </div>
  </div>
</div>


 
        </div>
    )
}

export default Quick_Connect
