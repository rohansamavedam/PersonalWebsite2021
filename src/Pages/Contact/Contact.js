import {Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import {  } from 'react-icons/fa';
import userData from '../../MyDetails';

function Contact() {
  return (
      <div style={{marginTop: "60px", paddingBottom: "60px", marginBottom: "0px", height: "auto", backgroundColor: userData.theme.themeColor}}>
            <Container style={{ display: "block"}} >
                <Row className="justify-content-md-center">
                    <Col lg="10" style={{marginTop: "40px"}}>
                        <div style={{ height: "auto", backgroundColor: userData.theme.cardColor, boxShadow: "0px 3px 15px rgba(0,0,0,0.2)", display: "block", marginLeft: "auto", marginRight: "auto", padding: "50px"}}>
                            <div style={{paddingLeft: "auto", paddingRight: "auto", paddingBottom: "30px", fontFamily: "Bungee Hairline", fontSize: "18px", textAlign: "center", color: userData.theme.subHeadingTextColor}}>
                                <p><u><strong>Get in touch</strong></u>:</p>
                            </div>
                            <div style={{fontFamily: "Karla", fontSize: "17px"}}>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Form.Row>
                                                <Col>
                                                <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="First name" />
                                                </Col>
                                                <Col>
                                                <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Last name" />
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Email" />
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Subject" />
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} as="textarea" rows={10} placeholder="Message"/>
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <button style={{padding: "7px", width: "120px", border: "none", backgroundColor: userData.theme.themeColor, borderRadius: "2px", fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor }}><strong>Send</strong></button>
                                                </Col>
                                            </Form.Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </Container>
      </div>
  );
}

export default Contact;
