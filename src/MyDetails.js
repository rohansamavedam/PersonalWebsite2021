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
        mediumUrl: "https://discord.gg/e7jfdafV",
        paragraphOne: "👋 Hi! I’m Rohan. I’m a graduating senior at San Jose State University studying Software Engineering. I’ve interned at Amazon during the summer of 2020, where I worked with Identity team to develop a redirect component in their product flow utilizing various AWS services. ",
        paragraphTwo: "I’ve gained my experience by doing numerous projects and taking up internships. Most recently, I've led a team of 4 people to develop a travel safety mobile application that helps travelers during this covid-19 crisis. ",
        paragraphThree: "With our technology developing very rapidly, I believe that this is an excellent industry to be a part of. This motivates me to keep thinking of groundbreaking business ideas and strive to develop efficient solutions to the problems I face. ",
        paragraphFour: "When I’m not coding, you’ll find me playing tennis 🎾, jamming to hip hop 🎶, cooking gourmet food 🍛, and e-boarding full speed through the trails of Guadalupe park. Feel free to reach out, join my discord channel and we can talk about tech or anything else that's fun. 😀",
        email: "rohansamavedam@gmail.com" 
    },
    projects: [
        {
            title: "TravSafe",
            subTitle: "React Native Application",
            shortDescription: "A moblie application that helps users stay updated about the covid-19 safety while they plan their travel.",
            moreInfoExists: true,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "React Native, AWS Amplify, API Gateway, Lambda",
            liveUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe",
            githubUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe",
            imageSrcOne: "https://images.pexels.com/photos/434400/pexels-photo-434400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",
            readmeUrl: "https://github.com/TravSafe-FinalYearProject/TravSafe/blob/master/README.md",

        },
        {
            title: "Spartan Books",
            subTitle: "Full Stack Web Application",
            shortDescription: "An online used book store platfrom that allows users to buy and sell textbooks.",
            moreInfoExists: false,
            longDescriptionParagraphOne: "",
            longDescriptionParagraphTwo: "",
            techStack: "Node, React, Axios, Bootstrap, MongoDB",
            liveUrl: "https://spartanbooks.herokuapp.com/",
            githubUrl: "https://github.com/rohansamavedam/SpartanBooks-FrontEnd",
            imageSrcOne: "https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            imageSrcTwo: "",

        },
        {
            type: "chit-chat",
            chitChat: "During the last 4 years, I’ve worked on numerous projects. I started off with baby steps by doing front facing applications using Javascript, HTML, and CSS. Slowly, I expanded my palette to use Node.js, React, and Databases."
        },
        {
            type: "chit-chat",
            chitChat: "There was also a phase where I used PHP and Java extensively to build purposeful web apps. After my internship, serverless caught my attention. Now my goto tech-stack is AWS services in the back-end and React in the front-end."
        },
        // {
        //     title: "Tour Boi",
        //     subTitle: "Front End Web Application",
        //     shortDescription: "A web application that allows user to search, research, and plan a socially conscious adventure.",
        //     moreInfoExists: false,
        //     longDescriptionParagraphOne: "",
        //     longDescriptionParagraphTwo: "",
        //     techStack: "JavaScript, JQuery, AJAX, HTML, CSS, APIs",
        //     liveUrl: "https://tourboi.herokuapp.com/",
        //     githubUrl: "https://github.com/rohansamavedam/Tour-Boi",
        //     imageSrcOne: "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        //     imageSrcTwo: "",

        // },
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
                description: "The Bachelor of Science degree in Software Engineering (BSSE) goes beyond programming to include engineering methodologies and hands-on project experience. The program prepares students to become qualified engineers for IT leading companies in Silicon Valley and international engineering market by providing them with state-of-the-art engineering methods, emergent technologies, team work experience, and solutions so they are capable to address design, coding, validation, and measurement issues for the construction of large-scale computer systems and software applications in the real world.",
                coursework: "Relevant coursework: Data Structures and Algorithms, Object Oriented Design, Database Management Systems, Server Side Programming, Computer Networks, Software Quality Engineering, Enterprise Software Platforms, Software Engineering Methodologies"
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