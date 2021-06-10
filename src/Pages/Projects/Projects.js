import {Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import { FaExternalLinkAlt, FaCodeBranch, FaInfo } from 'react-icons/fa';
import { Link } from "react-router-dom";
import userData from "../../MyDetails";

function Projects() {
  return (
    <div style={{marginTop: "60px", backgroundColor: userData.theme.themeColor, paddingBottom: "50px", minHeight: "90vh"}}>
            {/* <div >
                <CustomToast/>
            </div> */}
            <Container style={{ display: "block"}} >
                <Row className="justify-content-md-center" style={{paddingTop: "10px", width: "100%"}}>
                    <Col lg="12" style={{marginTop: "20px"}} >
                        <p style={{ fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor, paddingTop: "20px", paddingLeft: "30px", paddingRight: "30px", textAlign: "center"}}>
                            Below, you’ll find the list of my favourite projects. Click on &nbsp; <button style={{color: userData.theme.headingTextColor, border: "none", backgroundColor: userData.theme.themeColor}}><FaExternalLinkAlt/></button> &nbsp; 
                            to visit the deployed application, click on &nbsp; <button style={{color: userData.theme.headingTextColor, border: "none", backgroundColor: userData.theme.themeColor}}><FaCodeBranch/></button> &nbsp;
                            to visit the code repository of the project, and click on &nbsp; <button style={{color: userData.theme.headingTextColor, border: "none", backgroundColor: userData.theme.themeColor}}><FaInfo/></button> &nbsp; to know more about that project (architecture design, sequence diagrams, more description).
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                        {
                            userData.projects.map((value, index) => {

                            if (value.chitChat) {
                                return <Col lg="6" style={{marginTop: "40px"}} key={index}>
                                    <div style={{ height: "100%", display: "block", marginLeft: "auto", marginRight: "auto", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", textAlign: "center"}}>
                                        <div style={{display: "block", padding: "40px", paddingTop: "80px"}}>
                                            <p style={{fontSize: "18px", fontFamily: "Karla", color: userData.theme.bodyTextColor}}>
                                                {value.chitChat}
                                            </p>
                                        </div>
                                    </div> 
                                </Col>
                            } else {                                       
                                // const navurl = "/dp/" + index;
                                return <Col lg="6" style={{marginTop: "40px"}} key={index}>
                                <div style={{ height: "auto", backgroundColor: userData.theme.cardColor, boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                    <Row>
                                        <Col>
                                            <h5 style={{fontFamily: "Bungee", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px", color: userData.theme.headingTextColor}}>
                                                {value.title}
                                                <p style={{fontSize: "17px", fontFamily: "Bungee Hairline", paddingLeft: "10px", paddingRight: "10px", color: userData.theme.subHeadingTextColor}}><strong>
                                                [{value.subTitle}]</strong></p>
                                            </h5>
                                        </Col>
                                        <Col xs lg="3">
                                            <p style={{fontSize: "18px", padding: "10px", paddingRight: "20px", textAlign: "right"}}>
                                                {
                                                    (value.liveUrl)
                                                    ? <a href = {value.liveUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaExternalLinkAlt/></a>
                                                    : <Link aria-disabled="true"></Link>
                                                }
                                                &nbsp;&nbsp;
                                                {
                                                    (value.githubUrl)
                                                    ? <a href = {value.githubUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaCodeBranch/></a>
                                                    : <Link aria-disabled="true"></Link>
                                                }
                                                &nbsp; 
                                                {
                                                    (value.moreInfoExists === true)
                                                    ? <a href = {value.readmeUrl} target="blank" style={{color: userData.theme.headingTextColor}}><FaInfo/></a>
                                                    // ? <Link to = {navurl} style={{color: userData.theme.headingTextColor}}><FaInfo/></Link>
                                                    : <Link aria-disabled="true"></Link>
                                                }
                                            </p>
                                        </Col>
                                    </Row>
                                    <hr style={{marginTop: "-2px"}}/>
                                    <div style={{width: "auto", height: "150px", overflow: "hidden", marginLeft: "10px", marginRight: "10px", marginBottom: "10px", borderRadius: "2px"}}>
                                        <img src={value.imageSrcOne} alt="visual representation of project" style={{marginTop: "-120px", marginLeft: "-40px"}}/>
                                    </div>
                                    <div style={{paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", fontFamily: "Karla", fontSize: "17px"}}>
                                        <p style={{color: userData.theme.bodyTextColor}}>{value.shortDescription}</p>
                                        <p style={{color: userData.theme.bodyTextColor}}><u>Tech Stack</u>: {value.techStack}</p>
                                    </div>
                                </div> </Col> 
                                }
                            })
                        }
                </Row>
            </Container>
        </div>
  );
}

export default Projects;
