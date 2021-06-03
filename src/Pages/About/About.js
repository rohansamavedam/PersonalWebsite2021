import {Container, Row, Col } from 'react-bootstrap';
import ProfilePicture from '../../ogrohan.jpg';
import './About.css';
import { FaLinkedinIn, FaGithub, FaMediumM } from 'react-icons/fa';
import userData from '../../MyDetails';

function About() {
  return (
      <div style={{marginTop: "60px", paddingBottom: "60px", backgroundColor: userData.theme.themeColor}}>
          {/* <div style={{backgroundColor: userData.theme.themeColor, width: "400px", height: "100%", position: "absolute"}}>
          </div> */}
          <Container style={{ display: "block", textAlign:"center", paddingBottom: "60px", height: "auto"}} >
            <Row className="justify-content-md-center">
                <Col sm lg="4" style={{marginTop: "60px"}}>
                    <div style={{textAlign: "center", height: "auto", width: "320px", backgroundColor: userData.theme.cardColor, boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                        <img src={ProfilePicture} width="170" height="170" alt="profile-rohan" style={{borderRadius: "50%", marginTop: "60px"}} />
                        <h4 style={{fontFamily: "Bungee", marginTop: "20px", paddingTop: "25px", paddingLeft: "30px", paddingRight: "30px", paddingBottom: "7px", color: userData.theme.headingTextColor}}>{userData.aboutMe.firstName} {userData.aboutMe.lastName}</h4>
                        <p style={{fontSize: "17px", fontFamily: "Bungee Hairline", paddingBottom: "10px", paddingLeft: "10px", paddingRight: "10px", color: userData.theme.subHeadingTextColor}}><strong>{userData.aboutMe.userTitle}</strong></p>
                        <hr style={{marginTop: "25px"}}/>
                        <Row style={{paddingBottom: "0px"}}>
                            <Col></Col>
                            <Col lg="8">
                                <p style={{fontSize: "30px"}}>
                                    <a href={userData.aboutMe.linkedinUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaLinkedinIn/></a> &nbsp;&nbsp; 
                                    <a href={userData.aboutMe.githubUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaGithub/></a> &nbsp;&nbsp; 
                                    <a href={userData.aboutMe.mediumUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaMediumM/></a>
                                </p>
                                </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Col>
                <Col lg="7" md="7" sm="7" style={{textAlign: "left", marginTop: "60px"}}>
                    <h4 style={{fontFamily: "Bungee", marginTop: "15px", padding: "10px", color: userData.theme.headingTextColor}}>About Me</h4>
                    <p style={{padding: "10px", fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor}}>
                        {userData.aboutMe.paragraphOne}
                    </p>
                    <p style={{padding: "10px", fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor}}>
                        {userData.aboutMe.paragraphTwo}
                    </p>
                    <p style={{padding: "10px", fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor}}>
                        {userData.aboutMe.paragraphThree}
                    </p>
                    <p style={{padding: "10px", fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor}}>
                        {userData.aboutMe.paragraphFour}
                    </p>
                </Col>
            </Row>
          </Container>
      </div>
  );
}

export default About;
