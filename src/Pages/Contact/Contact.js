import {Container, Row, Col, Form } from 'react-bootstrap';
import './Contact.css';
import {  } from 'react-icons/fa';
import userData from '../../MyDetails';
import { Component } from 'react';
import emailjs, { init } from 'emailjs-com';
init("user_p4BY6hYTNVoE4gzyfsskm");

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.handleSubjectChange = this.handleSubjectChange.bind(this)
    }

    handleFirstNameChange(event) {
        this.setState({firstname: event.target.value})
    }

    handleLastNameChange(event) {
        this.setState({lastname: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handleSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value})
    }

    sendEmail(firstname, lastname, email, subject, message) {
        if(firstname && lastname && email && subject && message) {
            emailjs.send("service_iurre3k", "template_2myxps8", {
                from_name: firstname + " " + lastname,
                subject: subject,
                to_name: "Sama",
                email: email,
                message: message
            }).then((result) => {
                alert("Email sent successfully!")
            }).catch((error) => {
                alert("There was an error in submitting the contact form, please email manually. Thank you.")
            })
            this.setState({firstname: '', lastname: '', email: '', subject: '', message: ''})
        } else {
            alert("All Fields are Required")
        }
    }

    render() {
        return (
      <div style={{marginTop: "60px", paddingBottom: "60px", height: "100%", backgroundColor: userData.theme.themeColor}}>
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
                                                <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="First name" onChange={this.handleFirstNameChange} value={this.state.firstname} />
                                                </Col>
                                                <Col>
                                                <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Last name" onChange={this.handleLastNameChange} value={this.state.lastname}/>
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}/>
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} placeholder="Subject" onChange={this.handleSubjectChange} value={this.state.subject}/>
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Control style={{backgroundColor: userData.theme.navbarColor, color: "white", border: "1px solid grey"}} as="textarea" rows={10} placeholder="Message" onChange={this.handleMessageChange} value={this.state.message}/>
                                                </Col>
                                            </Form.Row>
                                            <br></br>
                                            <Form.Row>
                                                <Col>
                                                    <button
                                                     onClick={(e) => { e.preventDefault()
                                                                    this.sendEmail(this.state.firstname,
                                                                                    this.state.lastname,
                                                                                    this.state.email,
                                                                                    this.state.subject,
                                                                                    this.state.message)}} 
                                                     style={{padding: "7px", width: "120px", border: "none", backgroundColor: userData.theme.themeColor, borderRadius: "2px", fontFamily: "Bungee Hairline", color: userData.theme.subHeadingTextColor }}><strong>Send</strong></button>
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
      </div>);
  };
}

export default Contact;
