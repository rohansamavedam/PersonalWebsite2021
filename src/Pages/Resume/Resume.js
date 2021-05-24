import {Container, Row, Col} from 'react-bootstrap';
import './Resume.css';
import userData from "../../MyDetails";

function Resume() {
  return (
    <div style={{marginTop: "60px", backgroundColor: userData.theme.themeColor, paddingBottom: "50px", minHeight: "85vh"}}>
        
        <Container style={{display: "block", width: "70%"}}>
            <h5 style={{fontFamily: "Bungee", color: userData.theme.headingTextColor, paddingTop: "30px", marginBottom: "30px", textAlign: "center"}}>Experience</h5>
                {
                    userData.experience.map((value, index) => {
                        return (
                            <Row lassName="justify-content-md-center">
                                <div style={{height: "auto", width: "100%", backgroundColor: userData.theme.cardColor, textAlign: "", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", marginBottom: "40px", padding: "20px"}}>
                                        <div style={{padding: "10px"}}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div style={{borderRight: "1px dotted grey"}}>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                        <u><strong>Position</strong></u>: <strong>{value.position}</strong>
                                                        </h6>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                            <u><strong>Company</strong></u>: <strong>{value.company}</strong>
                                                        </h6>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                            <u><strong>Timeline</strong></u>: <strong>{value.timeline}</strong>
                                                        </h6>
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <ul>
                                                        {userData.experience[index].workDescp.map((value, index) => {
                                                            return <li style={{fontFamily: "Karla", fontSize: "17px", color: userData.theme.bodyTextColor}}>{value}</li>
                                                        })}
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Row>
                            );
                    })
                }
            <h5 style={{fontFamily: "Bungee", color: userData.theme.headingTextColor, paddingTop: "10px", marginBottom: "30px", textAlign: "center"}}>Education</h5>
            {
                    userData.education.map((value, index) => {
                        return (
                            <Row lassName="justify-content-md-center">
                                <div style={{height: "auto", width: "100%", backgroundColor: userData.theme.cardColor, textAlign: "", boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", marginBottom: "40px", padding: "20px"}}>
                                        <div style={{padding: "10px"}}>
                                            <Row>
                                                <Col lg={4}>
                                                    <div style={{borderRight: "1px dotted grey"}}>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                        <u><strong>Major</strong></u>: <strong>{value.degree}</strong>
                                                        </h6>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                            <u><strong>University</strong></u>: <strong>{value.college}</strong>
                                                        </h6>
                                                        <h6 style={{fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor}}>
                                                            <u><strong>Timeline</strong></u>: <strong>{value.timeline}</strong>
                                                        </h6>
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <ul>
                                                        <li style={{fontFamily: "Karla", fontSize: "17px", color: userData.theme.bodyTextColor}}>{value.description}</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Row>
                            );
                    })
                }
            <h5 style={{fontFamily: "Bungee", color: userData.theme.headingTextColor, paddingTop: "10px", marginBottom: "30px", textAlign: "center"}}>Skills</h5>

            <Row className="justify-content-md-center">
                <div style={{height: "auto", width: "100%", marginBottom: "40px", padding: "20px", textAlign: "center"}}>
                    <Row>
                        {
                            userData.skills.map((value, index) => {
                                return (
                                    <Col lg={4}>
                                    <div style={{backgroundColor: userData.theme.cardColor, boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", padding: "20px"}}>
                                        <div style={{paddingLeft: "20px", paddingRight: "20px", paddingBottom: "10px", fontFamily: "Bungee Hairline", fontSize: "18px", color: userData.theme.subHeadingTextColor}}>
                                            <p><u><strong>{value.name}</strong></u>:</p>
                                            {
                                                value.stack.map((value, index) => {
                                                    return <p style={{fontFamily: "Karla", color: userData.theme.bodyTextColor}}>{value}</p>
                                                })
                                            }
                                            
                                        </div>
                                    </div>
                                </Col>
                                );
                            })
                        }
                    </Row>
                </div>
            </Row>

        </Container>
    </div>
  );
}

export default Resume;
