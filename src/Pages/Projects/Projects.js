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
                <Row className="justify-content-md-center">
                    {
                        userData.projects.map((value, index) => {
                            const navurl = "/dp/" + index;
                        return <Col lg="6" style={{marginTop: "40px"}} key={index}>
                                <div style={{ height: "auto", backgroundColor: "white", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                    <Row>
                                        <Col>
                                            <h5 style={{fontFamily: "Bungee", paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px", color: "#393D3F"}}>
                                                {value.title}
                                                <p style={{fontSize: "17px", fontFamily: "Bungee Hairline", paddingLeft: "10px", paddingRight: "10px"}}><strong>
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
                                                    ? <Link to = {navurl} style={{color: userData.theme.headingTextColor}}><FaInfo/></Link>
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
                                        <p>{value.shortDescription}</p>
                                        <p><u>Tech Stack</u>: {value.techStack}</p>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
  );
}

export default Projects;
