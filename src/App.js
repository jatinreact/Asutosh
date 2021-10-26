import "./App.css";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Choose_Us from "../src/Pages/Home/Choose_Us";
import Supporting from "../src/Pages/Home/Supporting";
import Education_Innovation from "../src/Pages/Home/Education_Innovation";
import About_us from "../src/Pages/Discover/About_us";
import Vision_Mission from "../src/Pages/Discover/Vision_Mission";
import Accredition from "../src/Pages/Discover/Accredition";
import Blog from "../src/Pages/Discover/Blog";
import Gallery from "../src/Pages/Discover/Gallery";
import Leadership from "../src/Pages/Discover/Leadership";
import CBME_Curriculum from "../src/Pages/Learn/CBME_Curriculum";
import Course_Catalogue from "../src/Pages/Learn/Course_Catalogue";
import Skills from "../src/Pages/Learn/Skills";
import Syllabus from "../src/Pages/Learn/Syllabus";
import Voicing_Viva from "../src/Pages/Learn/Voicing_Viva";
import Classetaria from "../src/Pages/Experience/Classetaria";
import Junemasterclass from "../src/Pages/Experience/Junemasterclass";
import Lecture from "../src/Pages/Experience/Lecture";
import Library from "../src/Pages/Experience/Library";
import Livestream from "../src/Pages/Experience/Livestream";
import Student from "../src/Pages/Experience/Student";
import Celebrate from "../src/Pages/Celebrate_Us/Celebrate";
import Quick_Connect from "../src/Pages/Connect/Quick_Connect";
import Login from "./Pages/Login";
import CreateAccount from "./Pages/CreateAccount";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/education_innovation"
            component={Education_Innovation}
          />
          <Route path="/choose_us" component={Choose_Us} />
          <Route path="/supporting" component={Supporting} />
          <Route path="/about_us" component={About_us} />
          <Route path="/vision_mission" component={Vision_Mission} />
          <Route path="/accredition" component={Accredition} />
          <Route path="/blog" component={Blog} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/leadership" component={Leadership} />

          <Route path="/cbme" component={CBME_Curriculum} />
          <Route path="/course" component={Course_Catalogue} />
          <Route path="/skills" component={Skills} />
          <Route path="/syllabus" component={Syllabus} />
          <Route path="/voicing" component={Voicing_Viva} />

          <Route path="/classetaria" component={Classetaria} />
          <Route path="/junemasterclass" component={Junemasterclass} />
          <Route path="/lecture" component={Lecture} />
          <Route path="/library" component={Library} />
          <Route path="/livestream" component={Livestream} />
          <Route path="/studentcommunity" component={Student} />
          <Route path="/celebrate" component={Celebrate} />
          <Route path="/quick_Connect" component={Quick_Connect} />
          <Route path="/login" component={Login} />
          <Route path="/CreateAccount" component={CreateAccount} />
          {/* <Redirect to="/"/> */}
        </Switch>
        <Footer />
      </Router>

      
    </>
  );
}

export default App;
