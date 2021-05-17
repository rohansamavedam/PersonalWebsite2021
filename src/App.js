import './App.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import DynamicProject from './Pages/DynamicProject/DynamicProject';
import Contact from './Pages/Contact/Contact';
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa';
import userData from "./MyDetails";

function App() {
  return (
    <div className="App" >
      <Router>
        <div style={{ minHeight: "85vh"}}>
          <Navbar expand="lg" fixed="top" style={{backgroundColor: "#ffffff", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"}} className="NavBar">
                  <NavLink to="/" style={{color: "black", marginRight: "15px"}}><Navbar.Brand style={{color: userData.theme.headingTextColor}}>{userData.aboutMe.firstName}-{userData.aboutMe.lastName}</Navbar.Brand></NavLink>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav>
                          {/* <NavLink to="/" style={{color: "#393D3F", marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor:"#e3a6a1", borderRadius: "5px"}}>About Me</NavLink> */}
                          <NavLink to="/projects" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Projects</NavLink>
                          <NavLink to="/resume" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Resume</NavLink>
                          <NavLink to="/contact" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Contact</NavLink>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route path="/projects">
                  <Projects/>
                </Route>
                <Route path="/dp/:number">
                  <DynamicProject/>
                </Route>
                <Route path="/resume">
                  <Resume/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route path="/">
                  <About/>
                </Route>
              </Switch>
        </div>
        <footer style={{backgroundColor: "white", position: "relative", height: "auto", width: "100%", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", bottom: "0"}}>
          <Container fluid>
            <Row>
              <Col><p style={{fontFamily: "Bungee Hairline", padding: "30px", marginTop: "25px"}}><strong>&#169; 2021 by Krishna Rohan Samavedam.</strong></p></Col>
              <Col>
                <Row style={{padding: "22px"}}>
                  <Col style={{textAlign: "center", fontFamily: "Bungee Hairline"}}>
                    <p><u><strong>Write</strong></u></p>
                    <a href={"mailto:" + userData.aboutMe.email} style={{color: "black"}}>{userData.aboutMe.email}</a>
                  </Col>
                  <Col style={{textAlign: "center", fontFamily: "Bungee Hairline"}}>
                    <p><u><strong>Follow</strong></u></p>
                    <p style={{fontSize: "20px", marginTop: "-6px"}}>
                      <a href={userData.aboutMe.mediumUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaMediumM/></a> &nbsp; 
                      <a href={userData.aboutMe.githubUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaGithub/></a> &nbsp; 
                      <a href={userData.aboutMe.linkedinUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaLinkedinIn/></a> 
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    </div>
  );
}

export default App;
