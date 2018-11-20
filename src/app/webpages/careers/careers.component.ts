import { Component, OnInit } from '@angular/core';
import { SlotserviceService } from '../../services/http/slotservice.service';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.less']
})

export class CareersComponent implements OnInit {
  jobs: any = [];
  selectedjob: any = {};
  data: { "title": string; "data": { "question": string; "description": string; }[]; }[];

  constructor(
    private slotser: SlotserviceService
  ) {}

  ngOnInit() {
    this.jobs = [
      {
        "title": "Architect",
        "noOfPositions": 1,
        "experiencelevel": "10+ years",
        "job_location": "India",
        "skill_set": "Designing software architecture and provide support to all transactions,Design various prototypes and prepare efficient designs and provide codes to facilitate all product releases.",
        "CTC": "12,00,000 per annum",
        "description":"Designing software architecture and provide support to all transactions for high volume and implement all standards and tools in company technology architecture. Analyze and documents all product designs and associate various applications for all software systems. Design various prototypes and prepare efficient designs and provide codes to facilitate all product releases. Coordinate with product management team and analyze all functional and non functional software projects requirement. Maintain knowledge on industry developments and incorporate same into all company programs. Implementation and custom designing solutions, Strong product management implementation, analytical and training skills that have resulted in repeated success guiding sizeable, cross-functional teams in the design and launch of leading-edge solutions and best practices Very Strong in Core Java (Collections, Threads, Regular Expressions, Exception handling).      Should have expertise in following areas: Spring, Spring Boot, SOAP / REST Services and typical tools of J2EE.      EXPERIENCE with large scale, high volume E-commerce websites, Responsive design techniques.         Strong knowledge of Content Management Systems and EXPERIENCE working with Adobe Marketing Cloud tools including EXPERIENCE Manager. Hands on EXPERIENCE with designing and building AEM components and working with JCR, AEM workflows.         knowledge of using AEM in a Cloud environment like Adobe Cloud, AWS, or other. Strong web Programming SKILLS: Java, JavaScript, HTLM, CSS, JQUERY. EXPERIENCE with front end frameworks such as Angular, React, and Bootstrap.         Strong knowledge of creating REST web Services. EXPERIENCE working with both SQL and NonSQL databases. Expertise in Responsive web design, and cross-browsers compatibility and DevOps environment and working with CI/CD methodologies.         Exceptionally self-motivated, solid interpersonal SKILLS and a good communicator. Extremely detailed oriented, committed to excellence and takes unrelenting pride in the code you write.         Excellent problem solving SKILLS, willingness to take ownership and risks, and enthusiasm in the face of technical challenges. Familiarity with technical requirements of Internet Marketing and search engine optimization, information security vulnerabilities and risk Management         Very good communication skills." ,
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"architect"
      },

      {
        "title": "DevOps Lead",
        "noOfPositions": 1, 
        "experiencelevel": "6+ years", 
        "job_location": "India",
        "skill_set": " Managing entire application through Configuration Management tool -CHEF * Responsible for managing entire Nimbuzz domains - Purchase, Renewal,     Expiry, SSL .etc. ",
        "CTC": "10,00,000 per annum", 
        "description":"Introduce and implementing CI/CD practices in team to automate delivery process. Managing Web services like - Apache/ Nginx / Tomcat/ Big-IP F5 / Haproxy. * Responsible for architecture Planning, Designing & deployment. Managing entire application through Configuration Management tool -CHEF * Responsible for managing entire Nimbuzz domains - Purchase, Renewal,     Expiry, SSL .etc. Analysis of system resources utilisation and active users trend quarterly to take proactive approach. Responsible for Managing Server Hardware and application level issues. * POC for existing and new upcoming Projects - Architecture Designing, Deployment, Performance tuning, Monitoring. Configure linux based services - DNS, DHCP, NFS, SAMBA, IPTABLES .etc * Shell Scripting, AWK, SED .etc * Configuring and Administrating of various Virtual Infrastructure tools like- VMWare vsphere, VMWare ESXi, VMWare ESXi Free Edition, VMWare ESX, VMWare Vcenter, VMWare Player, VMWare Workstation .etc",
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },

      {
        "title": "AEM Advanced", 
        "noOfPositions": 1,
        "experiencelevel": "6+ years", 
        "job_location": "India",
        "skill_set": "clangualge,javalanguage We have an excellent opportunity to join our product development team specializing in Struts, Spring, Hibernate,Ajax. The successful candidate must be committed, flexible and work well individually and as part of a team.Must have a minimum of 5+ years commercial experience.", 
        "CTC": "7,00,000 per annum", 
        "description": "Rapidly iterate on product and platform features by quickly understanding requirements and producing good quality code.        Be a subject matter expert by identifying technology trends and platforms (including web and mobile apps) and collaborate with other team members to make recommendations based on the company needs.        Be involved in all stages of development, from product ideation through architecture and execution.        Help evolve the software development methodology based on agile and lean thinking, including impacting the development of coding conventions, documentation standards, testing procedures and quality assurance.        Maintain up-to-date knowledge of technology standards, industry trends, emerging technologies, and software development best practices.        Ensure technical issues are quickly resolved and implement strategies and solutions to Help reduce the likelihood of reoccurrence.        Identify competitive services, opportunities for innovation, and provide an assessment of obstacles and technical hurdles to the success of the project.        Interface with Architects to understand the design skeleton.        Create the framework for apps, set standards/guidelines.        Hands-on coding SKILLS & EXPERIENCE        EXPERIENCE with large scale, high volume E-commerce websites, Responsive design techniques.        Strong knowledge of Content Management Systems and EXPERIENCE working with Adobe Marketing Cloud tools including EXPERIENCE Manager.        Hands on EXPERIENCE with designing and building AEM components and working with JCR, AEM workflows.        knowledge of using AEM in a Cloud environment like Adobe Cloud, AWS, or other. Strong web Programming SKILLS: Java, JavaScript, HTLM, CSS, JQUERY.        EXPERIENCE with front end frameworks such as Angular, React, and Bootstrap.        Strong knowledge of creating REST web Services. EXPERIENCE working with both SQL and NonSQL databases.        Expertise in Responsive web design, and cross-browsers compatibility and DevOps environment and working with CI/CD methodologies.        Exceptionally self-motivated, solid interpersonal SKILLS and a good communicator.        Extremely detailed oriented, committed to excellence and takes unrelenting pride in the code you write.        Excellent problem solving SKILLS, willingness to take ownership and risks, and enthusiasm in the face of technical challenges.        Familiarity with technical requirements of Internet Marketing and search engine optimization, information security vulnerabilities and risk Management        Very good communication skills.",
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },

      {
        "title": "AEM Intermediate", 
        "noOfPositions": 3,
        "experiencelevel": "2+ Years",
        "job_location": "India",
        "skill_set": "Designs consistent interfaces and experiences across multiple devices -Experience in a fast paced Agile Scrum Delivery Team environment SKILLS & EXPERIENCE",
        "CTC": "4,00,000 per annum",
        "description":"Design and implement solutions based on Adobe AEM         Convert client provided content into AEM content -Design and improve solutions around Adobe AEM solution         Prototypes interactive interfaces with multiple states and roles -Conducts user testing and reporting on the outcomes         Designs consistent interfaces and experiences across multiple devices -Experience in a fast paced Agile Scrum Delivery Team environment SKILLS & EXPERIENCE         Experience with Java, JavaScript, J2EE, CSS and related technologies -Working knowledge and understanding of the following: Apache, App server logs, RESTful web services, Javascript and jQuery         Experience with cross-browser and cross-platform issues (IE, Firefox, Safari, etc.) -Familiarity with basic Linux or Unix concepts and commands          Good communication and teamwork skills",         
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"junior"
      },

      {
        "title": "Java-MS", 
        "noOfPositions": 3,
        "experiencelevel": "4+ Years",
        "job_location": "India",
        "skill_set": "Very Strong in Core Java (Collections, Threads, Regular Expressions, Exception handling).",
        "CTC": "9,00,000 per annum",
        "description":"Should have 4 years to 8 years of experience in enterprise java.        Very Strong in Core Java (Collections, Threads, Regular Expressions, Exception handling).        Hands on experience in MicroServices, Spring, Spring Boot, Spring Cloud, Cloud foundry, Docker.        Strong hands-on experience on JUnit, Mocking, Jenkin or Hudson, and Test-Driven Development.        Should have expertise in the following areas: Spring, JMS, SOAP/REST Services and typical tools of J2EE.        Good exposure to JMS environment and hand on experience in Tibco EMS / Rabbit MQ / Active MQ·        Very Strong MySQL Database Skills are essential.        Very good analytical skills and problem-solving ability a must.        Should have excellent verbal and written communication skills",  
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },
      {
        "title": "UI MEAN Stack", 
        "noOfPositions": 2,
        "experiencelevel": "6+ Years",
        "job_location": "India",
        "skill_set": "Good knowledge on coding standards, design patterns, unit testing frameworks, TDD, CICD practices.",
        "CTC": "3,00,000 per annum",
        "description":"6 years to 8 years of experience working in front end technologies.        Very strong in Object Oriented Javascript, Advanced JavaScript, HTML 5, CSS3, SASS/ LESS.        Working knowledge on Nodejs/ExpressJS (Exposing services using Node) or MEAN/MERN.        Working experience in building restful webservices using Node.        Working knowledge on Responsive web design.        Good knowledge on coding standards, design patterns, unit testing frameworks, TDD, CICD practices.        Very good logical thinking and quick at learning and exploring new frameworks.        Strong background culture of delivering projects with First time right and Zero defects in Production.        Very good analytical skills and problem-solving ability a must.       Very good communication skills.",          
        "job_due": "7-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },
      {
        "title": "Java Full Stack Lead", 
        "noOfPositions": 2,
        "experiencelevel": "6+ Years",
        "job_location": "India",
        "skill_set": "Very strong in Object Oriented JavaScript, ES6, Typescript, HTML5, CSS3, SASS/ LESS.",
        "CTC": "11,00,000 per annum",
        "description":"6 years to 8 years of experience working in both front-end technologies & Enterprise Java.        Very Strong in Core Java (Collections, Threads, Regular Expressions, Exception handling).        Should have expertise in following areas: Spring, Spring Boot, SOAP / REST Services and typical tools of J2EE.        Very strong in Object Oriented JavaScript, ES6, Typescript, HTML5, CSS3, SASS/ LESS.        Working knowledge on frameworks like Angular4 / Nodejs / Express JS / React JS.        Preference will be given to those with hands on experience in microservices architecture.        Good knowledge on coding standards, design patterns, unit testing frameworks, TDD, CICD        practices.        Very good logical thinking and quick at learning and exploring new frameworks.        Strong background culture of delivering projects with First time right and Zero defects in Production.        Very good analytical skills and problem-solving ability a must.        Very good communication skills",          
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },
      {
        "title": "Senior QA Lead", 
        "noOfPositions": 3,
        "experiencelevel": "4+ Years",
        "job_location": "India",
        "skill_set": "Creating test plans and test scripts based on the higher/lower level design documents. Worked extensively with Line of Business and User Acceptance testing resources to cover total functionality for System Integration testing, Usability Testing, including end to end and regression testing.",
        "CTC": "8,00,000 per annum",
        "description":"4 years to 8 years of experience working in QA Analyst.Taking charge of analyzing software programs to ensure high quality and eliminate programming issues.         Responsible for overseeing the correct functioning of software code and ensuring company requirements are met before product shipping. Involved in requirement gathering, analysis, and design, and performed end to end testing        Creating test plans and test scripts based on the higher/lower level design documents. Worked extensively with Line of Business and User Acceptance testing resources to cover total functionality for System Integration testing, Usability Testing, including end to end and regression testing.        Performes data based (backend) testing in AS/400 and SQL DB using SQL query.        Creating test data in System Integration and User Acceptance testing environments by conditioning data per scenarios identified in test scripts. User-centric approach to create real time test data.        Preparing Requirement Traceability Matrix after completion of test plan and test scripts.        Identifing and documenting defects/system issues using the Quality Center, and assisting root cause analysis for timely resolution of defects.        Very good communication skills",          
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"lead"
      },{
        "title": "Java Fresher", 
        "noOfPositions": 12,
        "experiencelevel": "Entry level",
        "job_location": "India",
        "skill_set": "Knowledge on Core Java, Advance Java, Basics of Spring Framework and RESTful webservices, C, C++  ",
        "CTC": "2,00,000 per annum",
        "description":"Knowledge on Core Java, Advance Java, Basics of Spring Framework and RESTful webservices, C, C++        Basic knowledge on web technologies like HTML, CSS, AngularJS, JavaScript.        Good knowledge on Operating Systems and DBMS,SQL.        Very good communication and logical thinking.",         
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"junior"
      },{
        "title": "UI Fresher", 
        "noOfPositions": 3,
        "experiencelevel": "Entry level",
        "job_location": "India",
        "skill_set": "Good knowledge in HTML, CSS, Bootstraping, AngularJS, JavaScript.. ",
        "CTC": "2,00,000 per annum",
        "description":"Good knowledge in HTML, CSS, Bootstraping, AngularJS, JavaScript.        Good knowledge of CSS pre-processors.        Knowledge on web development        User Experience Design,Interaction Design,Visual Design,Usability Analysis,        Good knowledge on Design tools Adobe Illustrator, Adobe Photoshop, and Adobe XD        Very good communication and logical thinking.",         
        "job_due": "13-feb-2019",
        'availability':"Open",
        "imgName":"junior"
      }

    ]
  }
  viewjob(data) {
    this.slotser.setJobPost(data);
  }
}
