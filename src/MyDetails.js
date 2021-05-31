import React, {useContext} from 'react';
import Context from './store/context';

const UserData = {
    theme: {
        bodyTextColor: "#edf2f4",
        headingTextColor: "#e84545",
        subHeadingTextColor: "#edf2f4",
        themeColor: "#2b2d42", 
        backgroundColor: "#2b2d42",
        navbarColor: "#322f3d",
        footerColor: "#322f3d",
        cardColor: "#3c415c"
    },
    aboutMe: {
        firstName: "Rohan",
        lastName: "Samavedam",
        userTitle: "Software Engineering Student",
        linkedinUrl: "https://www.linkedin.com/in/rohan-samavedam-6a3612156/",
        githubUrl: "https://github.com/rohansamavedam",
        mediumUrl: "https://medium.com/@rohansamavedam",
        paragraphOne: "I am a Software Engineering Student located in San Jose, California with experience in full stack development. I'm looking for Software Development internship opportunities to be exposed to real life problems and their software solutions.",
        paragraphTwo: "I've gained experience developing efficient solutions to problems I've faced. My project experience has been both challenging and fun. The logical extension of my education and project experience coupled with my passion for technology is my continued desire to learn and build beautiful software solutions. When I'm not coding, I like to play tennis, go exploring places, play video games and watch movies.",
        email: "rohansamavedam@gmail.com" 
    },
    projects: [
        {
            title: "Spartan Books",
            subTitle: "Full Stack Web Application",
            shortDescription: "An online used book store platfrom that allows users to buy and sell textbooks.",
            moreInfoExists: true,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "Node, React, Axios, Bootstrap, MongoDB",
            liveUrl: "https://spartanbooks.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/SpartanBooks-FrontEnd",
            imageSrcOne: "https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "Tour Boi",
            subTitle: "Front End Web Application",
            shortDescription: "A web application that allows user to search, research, and plan a socially conscious adventure.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "JavaScript, JQuery, AJAX, HTML, CSS, APIs",
            liveUrl: "https://tourboi.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Tour-Boi",
            imageSrcOne: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "MyRoomie-Roommate Finder",
            subTitle: "Full Stack Web Application",
            shortDescription: "A roommate finding application that finds the best roommate match for the user based on a well designed survey.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "Node, React, Axios, Bootstrap, MongoDB",
            liveUrl: "https://myroommatefinder.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Roommate-Finder",
            imageSrcOne: "https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "Real Time Chat Application",
            subTitle: "Web App Using Web Sockets",
            shortDescription: "A chat application that utilies Socket.io for bi-directional communication between server and the client.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "JavaScript, JQuery, AJAX, HTML, CSS, APIs",
            liveUrl: "https://chatroomslive.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Real-Time-Chat-App",
            imageSrcOne: "https://images.pexels.com/photos/4057663/pexels-photo-4057663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "Gully Umpire",
            subTitle: "Mobile Web Application",
            shortDescription: "A score logging software that allows to log runs, wickets, and extras using a mobile phone.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "HTML, CSS, Javascript, JQuery",
            liveUrl: "https://gullyumpire.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/Gully-Umpire",
            imageSrcOne: "https://images.pexels.com/photos/163394/baseball-umpire-strike-sport-163394.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            title: "Realtor Prototype",
            subTitle: "Django Application",
            shortDescription: "A real estate postings application built together with backend administrative access.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "Python Django, Javascript, HTML, CSS, Heroku",
            liveUrl: "",
            githubUrl: "https://github.com/rohansamavedam/Realtor-Prototype",
            imageSrcOne: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
    ],
    experience: 
        [
            {
                position: "Software Development Engineer Intern",
                company: "Amazon",
                timeline: "May 2020 - Aug 2020 . 4 months",
                workDescp: [
                    "Developed a UI that handles incoming authentication request and redirects the user to an IdP upon selection.",
                    " Implemented backend business logic via serverless microservices using Lambda’s, Java Spring, and Google Guice Framework.",
                    "Wrote unit and integration tests to test microservices using Cucumber.",
                    "Leveraged Knowledge in AWS Lambda, API-Gateway, DynamoDB, Route53, CloudFront, S3, CloudWatch."
                ]
            },
            {
                position: "Student Office Assistant",
                company: "San Jose State University",
                timeline: "Sep 2019 - Feb 2021 . 1 yr 6 months",
                workDescp: [
                    "Answered questions regarding the university housing licence, application process and payment deadlines.",
                    "Responded to resident inquiries regarding account balance, late fees, holds and other related questions.",
                    "Soft Skills Gained: Leadership, Working independently, Team Work, Communication."
                ]

            }
        ],
    education: 
        [
            {
                degree: "Bachelors of Science in Software Engineering",
                college: "San Jose State University",
                timeline: "Aug 2017 - Aug 2021",
                description: "The Bachelor of Science degree in Software Engineering (BSSE) goes beyond programming to include engineering methodologies and hands-on project experience. The program prepares students to become qualified engineers for IT leading companies in Silicon Valley and international engineering market by providing them with state-of-the-art engineering methods, emergent technologies, team work experience, and solutions so they are capable to address design, coding, validation, and measurement issues for the construction of large-scale computer systems and software applications in the real world."
            }
        ],
    skills:
        [
            {   name: "Front-end",
                stack: [
                "React", "React Native", "Redux", "JavaScript", "HTML", "CSS", "Django", "jQuery"
            ]},
            {   name: "Back-end",
                stack: [
                "Node", "Express", "Spring", "Java", "AWS", "Python", "SQL", "PHP"
            ]},
            {   name: "Other",
                stack: [
                "Version Control", "REST", "MVC", "Docker", "Responsive Design", "SASS", "Bootstrap", "Web Sockets"
            ]}
        ]
}

export default UserData;