import React from "react";

import { Link } from "react-router-dom";
const Navbarr = () => {
  return (
    <>



<nav class="navbar navbar-expand-md ">
 <div className="container">
  <a class="navbar-brand" href="#"><Link className="nav-link" to="/"><img src="images/unnamed.png" alt="" className="img-fluid" /></Link></a>

  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"/></svg>
  </button>


  <div class="collapse navbar-collapse  justify-content-between align-items-center" id="collapsibleNavbar">
    <ul class="navbar-nav justify-content-between align-items-center  w-100">
    
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
      HOME
      </a>
      <div class="dropdown-menu">
       <a class="dropdown-item" ><Link className="nav-link" to="/education_innovation">EDUCATION INNOVATION</Link></a>
       
      
       <a class="dropdown-item" ><Link className="nav-link" to="/choose_us">WHY CHOOSE US</Link></a>
       <a class="dropdown-item" ><Link className="nav-link" to="/supporting">SUPPORT A CAUSE</Link></a>
      </div>
    </li><li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
      DISCOVER
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item"><Link className="nav-link" to="/about_us">ABOUT US</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/vision_mission">VISION & MISSION</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/leadership">Leadership</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/accredition">Accredition</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/gallery">Gallery</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/blog">Blog</Link></a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
      LEARN
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item"><Link className="nav-link" to="/course">Course catalogue</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/cbme">CBME Curriculum</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/syllabus">Syllabus</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/skills">Skills</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/voicing">Voicing Viva</Link></a>
      </div>
    </li>


    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
      EXPERIENCE
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item"><Link className="nav-link" to="/classetaria">MY CLASSETARIA</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/lecture">KEY NOTE LECTURE</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/livestream">LIVE STREAM</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/studentcommunity">STUDENT COMMUNITY</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/junemasterclass">JUNE MASTER CLASS</Link></a>
        <a class="dropdown-item"><Link className="nav-link" to="/library">E LIBRARY</Link></a>
      </div>
    </li>


    <li class="nav-item dropdown">
      {/* <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown"> */}
      <a class="dropdown-item"><Link className="nav-link" to="/celebrate">CELEBRATE WITH US</Link></a>
      {/* CELEBRATE WITH US
      </a> */}
    
    </li>

    <li class="nav-item dropdown">
           <a class="dropdown-item"><Link className="nav-link" to="/quick_Connect">CONNECT</Link></a>
     
    </li>




    {/* <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
      CONNECT

      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item">MY CLASSETARIA</a>
        <a class="dropdown-item">KEY NOTE LECTURE</a>
        <a class="dropdown-item">LIVE STREAM</a>
        <a class="dropdown-item">STUDENT COMMUNITY</a>
        <a class="dropdown-item">JUNE MASTER CLASS</a>
        <a class="dropdown-item">E LIBRARY</a>
      </div>
    </li> */}
     
    </ul>
  </div>
  </div>
</nav>



{/* 
    
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 ">
              <Link className="nav-link" to="/">
                <h3 className="footer-heading">
                  <b>
                    <span>HOME</span>
                  </b>
                </h3>
              </Link>

              <ul className="list-unstyled ">
                <Link className="nav-link" to="/education_innovation">
                  <li className="education">Education innovation</li>
                </Link>

                <Link className="nav-link" to="choose_us">
                  <li className="education">Why choose us</li>
                </Link>
                <Link className="nav-link" to="supporting">
                  <li className="education">Support a cause</li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2 ">
              <h3 className="footer-heading">
                <b>
                  <span>DISCOVER</span>
                </b>
              </h3>
              <ul className="list-unstyled">
                <Link className="nav-link" to="/about_us">
                  {" "}
                  <li>About us</li>
                </Link>
                <Link className="nav-link" to="/vision_mission">
                  <li>Vision & Mission</li>
                </Link>
                <Link className="nav-link" to="/leadership">
                  {" "}
                  <li>Leadership</li>
                </Link>
                <Link className="nav-link" to="/accredition">
                  <li>Accredition</li>
                </Link>
                <Link className="nav-link" to="/gallery">
                  <li>Gallery</li>
                </Link>
                <Link className="nav-link" to="/blog">
                  <li>Blog</li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2">
              <h3 className="footer-heading">
                <b>
                  <span>LEARN</span>
                </b>
              </h3>
              <ul className="list-unstyled">
                <Link className="nav-link" to="/course">
                  <li>Course catalogue</li>
                </Link>
                <Link className="nav-link" to="/cbme">
                  <li>CBME Curriculum</li>
                </Link>
                <Link className="nav-link" to="/syllabus">
                  <li>Syllabus</li>
                </Link>
                <Link className="nav-link" to="/skills">
                  <li>Skills</li>
                </Link>
                <Link className="nav-link" to="/voicing">
                  <li>Voicing Viva</li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2">
              <h3 className="footer-heading">
                <b>
                  <span>EXPERIENCE</span>
                </b>
              </h3>
              <ul className="list-unstyled">
                <Link className="nav-link" to="/classetaria">
                  <li>My Classetaria </li>
                </Link>
                <Link className="nav-link" to="/lecture">
                  <li>Key note lecture</li>
                </Link>
                <Link className="nav-link" to="/livestream">
                  <li>Live stream</li>
                </Link>
                <Link className="nav-link" to="/studentcommunity">
                  <li>Student community</li>
                </Link>
                <Link className="nav-link" to="/junemasterclass">
                  <li>June Master class</li>
                </Link>
                <Link className="nav-link" to="/library">
                  <li>E Library</li>
                </Link>
              </ul>
            </div>
            <div className="col-lg-2">
              <Link className="nav-link" to="/celebrate">
                <h3 className="footer-heading">
                  <b>
                    <span>CELEBRATE WITH US</span>
                  </b>
                </h3>
              </Link>
            </div>
            <div className="col-lg-2">
              <Link className="nav-link" to="/quick_connect">
                <h3 className="footer-heading">
                  <b>
                    <span>CONNECT</span>
                  </b>
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbarr;
