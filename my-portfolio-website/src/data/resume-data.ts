export enum proficiency {
  beginner = "Beginner",
  intermediate = "Intermediate",
  advanced = "Advanced",
}

export enum skillCategory {
  frontend = "Frontend",
  backend = "Backend",
  database = "Database",
  testing = "Testing",
  collaboration = "Collaboration",
  graphicDesign = "Graphic Design",
  deploymentAndHosting = "Deployment And Hosting",
}

export enum numberOfYears {
  underOne = "< 1 Year",
  betweenOneAndThree = "1 - 3 Years",
  moreThanThree = "> 3 Years",
  five = "5 Years",
  moreThanFive = "> 5 Years",
}

const data = {
  photoUrl: "",
  name: "Rittick Datta",
  contactInfo: {
    address: "Krakow, Poland",
    email: "drittick@gmail.com",
    phone: "(+48) 786 642 655",
    website: "https://pw3mll-3000.csb.app",
    linkedIn: "https://www.linkedin.com/in/rittick/",
    gender: "Male",
    dateOfBirth: "14/12/1990",
    nationality: "Indian",
  },
  aboutMe: `Senior frontend React developer with 7 years and 10 months of experience in domains like finance, edtech,
    marketing, health and oil & gas including full stack development experience and big data
    knowledge. Great communication skills with teammates and stakeholders while working towards
    deliverables taking ownership of tasks. I focus on writing clean and optimized code for extensibility
    and maintainability. I also love to share what I know with teammates.`,
  workExperience: [
    {
      title: "FRONTEND DEVELOPER (SENIOR SOFTWARE DEVELOPER)",
      company: "LUXOFT POLAND",
      city: "Krakow",
      country: "Poland",
      from: "7th Mar 2022",
      to: "Present",
      summary: `I continued working as a senior front-end developer on the large scale financial investment application built
      with React, Redux and Material UI from Krakow, Poland. I have contributed 93 pull requests to the project -
      features and bug fixes.
      I focus on writing clean, readable, and optimized code. I also like to share what I know with colleagues and
      discuss about new developments in technology.`,
      responsibilities: [
        "Building new features of the React application on VS Code",
        "Fixing application bugs quickly with strong debugging skills",
        `Taking part in daily Scrum meetings and working with technical lead, business analyst, backend
        developers and testers on JIRA stories`,
        `Taking part in daily Scrum meetings and working with technical lead, business analyst, backend
        developers and testers on JIRA stories`,
        "Code reviews on Bitbucket and frontend code deployment using XL Deploy",
      ],
      achievements: [""],
      techStack:
        "React, Redux Toolkit, React Query, Material UI, styled-components, React Hook Form, superagent, yup, XL Deploy, webpack, Vite",
    },
    {
      title: "FRONTEND DEVELOPER (SENIOR SOFTWARE DEVELOPER)",
      company: "LUXOFT INDIA",
      city: "Bangalore",
      country: "India",
      from: "25th Nov 2021",
      to: "4th March 2022",
      summary: `I started working as a senior frontend developer on the Capital Group project called VFlex related to large
      scale financial investments. Technology stack included React, Redux, Material UI, styled-components etc.`,
      responsibilities: [""],
      achievements: [""],
      techStack:
        "React, Redux Toolkit, React Query, Material UI, styled-components, React Hook Form, superagent, yup, XL Deploy, webpack, Vite",
    },
    {
      title: "FRONTEND DEVELOPER (SENIOR SOFTWARE ENGINEER)",
      company: "EDFORA",
      city: "New Delhi",
      country: "India",
      from: "16th Dec 2020",
      to: "11th Oct 2021",
      summary:
        "Senior frontend React developer in mypat.in product ecosystem serving around 450,000 users.",
      responsibilities: [
        `Worked in an agile environment, with daily Scrum stand-ups, on Jira tickets for features & bugs and
        collaborated on Bitbucket`,
        `Built reusable react components, integrated APIs, and used Material UI and custom styling for
        components`,
        `Worked with React using Typescript, Jest for testing, with product owners, testers and stakeholders
        Focused on code quality, clean code and reviewed pull requests`,
      ],
      achievements: [""],
      techStack:
        "React, Redux, Redux Toolkit, Material UI, JavaScript, HTML, CSS, Axios, Redux Saga",
    },
    {
      title: "FULL STACK WEB DEVELOPER",
      company: "DIGITAL BEACON MARKETING STUDIO",
      city: "New Delhi",
      country: "India",
      from: "18th June 2018",
      to: "30th Sept 2020",
      summary: `Executed end-to-end website development of 2 projects using React/Angular and MongoDB/Firebase as
      an individual contributor`,
      responsibilities: [
        `Hosted and maintained 15+ client websites on GoDaddy, built landing pages and email templates for
        campaigns in collaboration with fellow developers.`,
        `Built 3 e-commerce websites on Shopify, integrated third-party payment gateways and logistics partner
        like ShipRocket as an individual contributor`,
        `Built 2 Wordpress websites using themes and plugins as an individual contributor`,
        `Used analytical tools like Google Analytics and Facebook Pixel to increase website traffic and grow
        business in conjunction with social media marketing team.`,
        `Carried out on-page and off-page Search Engine Optimization activities to boost ranking of client
        websites in conjunction with an SEO expert`,
        `Managed 5+ client accounts, delegated and coordinated with developers, designers, SEO specialist and
        founder`,
      ],
      achievements: [""],
      techStack:
        "Angular, JavaScript, HTML, CSS, Firebase, React, Firebase, MySQL, MongoDB",
    },
    {
      title: "WEB DEVELOPER",
      company: "DOL BURN FOUNDATION",
      city: "San Diego",
      country: "United States",
      from: "7th Aug 2017",
      to: "7th Apr 2018",
      summary: `I built a website as an individual contributor to help burn victims get access to information regarding
      hospitals that specialize in treating burn incidents.`,
      responsibilities: [""],
      achievements: [""],
      techStack: `HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, Node, Firebase,
      Database design`,
    },
    {
      title: "SOFTWARE ENGINEER",
      company: "LARSEN AND TOUBRO TECHNOLOGY SERVICES",
      city: "Mysore",
      country: "India",
      from: "22nd Oct 2013",
      to: "31st May 2015",
      summary: `I worked on Halliburton's DecisionSpace desktop application providing information on oil rigs to petroleum
      engineers.`,
      responsibilities: [
        `I worked in an agile software development environment, multi-site global team, developed in Java,
        conducted unit testing and created excel reports. I Increased rate of bug resolution and code shipment to
        client.`,
      ],
      achievements: [""],
      techStack: "Java, Eclipse, Xamarin, Android Studio",
    },
    {
      title: "INTERN",
      company: "WIPRO LIMITED",
      city: "Gurugram",
      country: "India",
      from: "4th June 2012",
      to: "16th July 2012",
      summary: `I worked in Software Development Life Cycle activities in telecommunication domain. Created an
      application to read multiple excel files and consolidate data into visualizations for internal use, interviewed
      actors, worked closely with stakeholders, and reported with Excel.`,
      responsibilities: [""],
      achievements: [""],
    },
  ],
  education: [
    {
      degree: `MASTERS IN COMPUTER SCIENCE`,
      collegeName: `Illinois Institute of Technology`,
      collegeWebsiteUrl: `https://www.iit.edu/`,
      address: `10 W 35th St, 60616, Chicago, United States`,
      from: `18th Aug 2015`,
      to: `13th May 2017`,
    },
    {
      degree: `BACHELOR'S DEGREE IN COMPUTER SCIENCE ENGINEERING`,
      collegeName: `University of Petroleum and
        Energy Studies`,
      collegeWebsiteUrl: `https://www.upes.ac.in/`,
      address: `ENERGY ACRES, UPES, BIDHOLI, via, Prem Nagar, 248007, Dehradun, India`,
      from: `9th July 2009`,
      to: `15th July 2013`,
    },
  ],
  moreInfo: [
    {
      title: `COMMUNICATION AND INTERPERSONAL SKILLS`,
      description: `Communication is Non-Negotiable I lay equal emphasis on good communication with transparency.
Software development is better with clear communication. Everyone is on the same page with open
communication. Humans are not API end-points with defined request bodies, lets be nice, have fun and
build something people love.`,
    },
    {
      title: `ORGANISATIONAL SKILLS`,
      description: `Hyper Organized, Precise I love files and folders with intuitive names. Keywords, tags and dates & times
are icing on the cake! Order is beautiful, isn't it?`,
    },
    {
      title: `MANAGEMENT AND LEADERSHIP SKILLS`,
      description: `Technology Lead and Account Manager During my role at Digital Beacon, in addition to driving the
startup's technology decision, I was also account manager for 5+ clients. Being single point of contact, I
coordinated with fellow developers, designers, SEO specialists and CEO to fulfill client requirements. Being
the technology lead, I often visited prospective client offices and pitched the technology section of the
presentation.`,
    },
  ],
  skills: [
    {
      name: `React`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Redux`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Redux Toolkit`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Typescript`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.five,
      skillUsedInRecentRole: true,
    },
    {
      name: `React Query`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Material UI`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `styled-components`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `CSS`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `JavaScript`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `HTML`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Node`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.backend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Express`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.backend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `SASS`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Redux Saga`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.underOne,
      skillUsedInRecentRole: false,
    },
    {
      name: `Jest`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.testing,
      numberOfYears: numberOfYears.moreThanThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Jira`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.collaboration,
      numberOfYears: numberOfYears.moreThanThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Git`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.collaboration,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `MongoDB`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.database,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Firebase`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.backend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `SQL`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.database,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Agile`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.collaboration,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Angular`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Heroku`,
      proficiency: proficiency.beginner,
      skillCategory: skillCategory.deploymentAndHosting,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Jenkins`,
      proficiency: proficiency.beginner,
      skillCategory: skillCategory.deploymentAndHosting,
      numberOfYears: numberOfYears.underOne,
      skillUsedInRecentRole: false,
    },
    {
      name: `Docker`,
      proficiency: proficiency.beginner,
      skillCategory: skillCategory.deploymentAndHosting,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `AWS`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.deploymentAndHosting,
      numberOfYears: numberOfYears.moreThanThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Kubernetes`,
      proficiency: proficiency.beginner,
      skillCategory: skillCategory.deploymentAndHosting,
      numberOfYears: numberOfYears.underOne,
      skillUsedInRecentRole: false,
    },
    {
      name: `Linux`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.moreThanFive,
      skillUsedInRecentRole: true,
    },
    {
      name: `Figma`,
      proficiency: proficiency.beginner,
      skillCategory: skillCategory.graphicDesign,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: false,
    },
    {
      name: `Photoshop`,
      proficiency: proficiency.intermediate,
      skillCategory: skillCategory.graphicDesign,
      numberOfYears: numberOfYears.betweenOneAndThree,
      skillUsedInRecentRole: true,
    },
    {
      name: `Shopify`,
      proficiency: proficiency.advanced,
      skillCategory: skillCategory.frontend,
      numberOfYears: numberOfYears.underOne,
      skillUsedInRecentRole: false,
    },
  ],
};

export default data;
