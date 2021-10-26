import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

{/* 
<footer>
<nav class="navbar navbar-expand-md ">
 <div className="container footer_top">
  

  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse  justify-content-between align-items-center" id="collapsibleNavbar">
    <ul class="navbar-nav justify-content-between align-items-center  w-100">
    
 

    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="#">9350903054</Link></a>
     
    </li>
    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="#">My Classeteria</Link></a>
     
    </li>
    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="#">Mon-Sat l 10 AM- 19 PM</Link></a>
     
    </li>
    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="#">You Tube</Link></a>
     
    </li>
    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="/login">Login</Link></a>
     
    </li>
    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="/CreateAccount">Register</Link></a>
     
    </li>


    </ul>
  </div>
  </div>
</nav>

</footer> */}
          
           <footer>
 
<div className="container footer_color">
<div className="row">
  <div className="col-sm-12 col-md-12 col-lg-12">
<ul className="Home_one">
  
       <li>9350903054</li>
       <li>My Classeteria</li>
       <li>Mon-Sat l 10 AM- 19 PM</li>
       <li>You tube</li>
  <li><Link  to="/login">Login</Link></li>
  <li><Link  to="/CreateAccount">Register</Link></li>

</ul>
  </div>

  </div> 
  </div>
  
</footer>

        </div>
    )
}

export default Footer
