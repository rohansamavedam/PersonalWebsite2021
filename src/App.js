import './App.css';
import { useContext, useState } from 'react';
import Context from './store/context';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Switch, Route, BrowserRouter as Router, NavLink } from "react-router-dom";
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Resume from './Pages/Resume/Resume';
import DynamicProject from './Pages/DynamicProject/DynamicProject';
import Contact from './Pages/Contact/Contact';
import { FaLinkedinIn, FaGithub, FaMediumM, FaAdjust } from 'react-icons/fa';
import userData from "./MyDetails";

const lightTheme = {
  bodyTextColor: "black",
  headingTextColor: "black",
  subHeadingTextColor: "black",
  themeColor: "#ffb4a2", 
  backgroundColor: "white",
  navbarColor: "white",
  footerColor: "white",
  cardColor: "white"
}

const darkTheme = {
  bodyTextColor: "#edf2f4",
  headingTextColor: "#e84545",
  subHeadingTextColor: "#edf2f4",
  themeColor: "#2b2d42", 
  backgroundColor: "#2b2d42",
  navbarColor: "#322f3d",
  footerColor: "#322f3d",
  cardColor: "#3c415c"
}

function App() {

  const [state, setState] = useState({themeMode: 'dark'})

  const toggleDarkTheme = () => {
    console.log("here")
    userData.theme = darkTheme
    setState({themeMode: 'dark'})
  }
  
  const toggleLightTheme = () => {
    console.log("now here")
    userData.theme = lightTheme
    setState({themeMode: 'light'})
  }

  return (
    <div className="App" >
      <Router>
        <div style={{ minHeight: "85vh"}}>
          <Navbar expand="lg" fixed="top" style={{backgroundColor: userData.theme.navbarColor, boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"}} className="NavBar">
                  <NavLink to="/" style={{color: "black", marginRight: "15px"}}><Navbar.Brand style={{color: userData.theme.headingTextColor}}>{userData.aboutMe.firstName}-{userData.aboutMe.lastName}</Navbar.Brand></NavLink>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                      <Nav>
                          {/* <NavLink to="/" style={{color: "#393D3F", marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor:"#e3a6a1", borderRadius: "5px"}}>About Me</NavLink> */}
                          <NavLink to="/projects" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Projects</NavLink>
                          <NavLink to="/resume" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Resume</NavLink>
                          <NavLink to="/contact" style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px"}} activeStyle={{backgroundColor: userData.theme.themeColor, borderRadius: "2px"}}>Contact</NavLink>
                          <button onClick={ () => {
                            state.themeMode === 'dark'
                            ? toggleLightTheme()
                            : toggleDarkTheme() }
                        } style={{color: userData.theme.headingTextColor, marginRight: "15px", padding: "10px", border: "none", backgroundColor: userData.theme.navbarColor }}><FaAdjust/></button>
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
        <footer style={{backgroundColor: userData.theme.footerColor, position: "relative", height: "auto", width: "100%", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", bottom: "0"}}>
          <Container fluid>
            <Row>
              <Col><p style={{fontFamily: "Bungee Hairline", padding: "30px", marginTop: "25px", color: userData.theme.subHeadingTextColor}}><strong>&#169; 2021 by Krishna Rohan Samavedam.</strong></p></Col>
              <Col>
                <Row style={{padding: "22px"}}>
                  <Col style={{textAlign: "center", fontFamily: "Bungee Hairline"}}>
                    <p style={{color: userData.theme.subHeadingTextColor}}><u><strong>Write</strong></u></p>
                    <a href={"mailto:" + userData.aboutMe.email} style={{color: userData.theme.subHeadingTextColor}}>{userData.aboutMe.email}</a>
                  </Col>
                  <Col style={{textAlign: "center", fontFamily: "Bungee Hairline"}}>
                    <p style={{color: userData.theme.subHeadingTextColor}}><u><strong>Follow</strong></u></p>
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
