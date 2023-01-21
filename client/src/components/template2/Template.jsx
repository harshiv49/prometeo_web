import { Fragment } from "react";
import { Container } from "react-bootstrap";
import ResumeEditForm from "../form/ResumeEditForm";
import { GoLocation,GoMail } from "react-icons/go";
import { GrSkype } from "react-icons/gr";
import { BsPhone,BsLinkedin } from "react-icons/bs";
import {useState,useRef} from 'react'; 
import ReactToPdf from"react-to-pdf";
import Pdf from "react-to-pdf";
import "./Template.css";
const Template = () => {
  const educationInitialState={
        title:' MSc in Ecommerce and Buisness Administration',
        subject:'University Of Chicago',
        date:'09/2008-06/2010',
      }
  const [educationDetails, setEducationDetails] =useState(educationInitialState);
  const personalDataInitialState={
        name:' John Doe',
        profession:'Buisness Devlopement Manager',
        phone:'2217321098',
        email:' john.doe@email.com',
        country:'Gujarat, India ',
        introduction:'09/2008-06/2010',
        linkedin:'john.doe'
      }
  const [personalDetails , setPersonalDetails] =useState(personalDataInitialState); 
  
  const WorkExperienceInitialState={
    heading:' John Doe',
    sub_heading:'Buisness Devlopement Manager',
    date:'09/2008-06/2010',
    description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
    description2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
    description3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
  }
const [workExperience , setWorkExperience] =useState(WorkExperienceInitialState);  


const projectsInitialState={
  heading:' John Doe',
  sub_heading:'Buisness Devlopement Manager',

  description1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
  description2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
  description3:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.',
}
const [projectDetails, setProjectDetails] =useState(projectsInitialState);  

// useEffect(()=>{
//   console.log(skillDetails);
// },[skillDetails])


const [skillDetails, setSkillDetails] =useState([]);  
const pdfRef = useRef();
  return (
    <Fragment>
    <div  ref={pdfRef}>
    <h1 style={{ textAlign: "center", color: "black" }}>
      RESUME TEMPLATE 2{" "}
    </h1>
    <div className="resume-holder">
      <div className="resume">
        <div className="heading">
          <p className="heading-name">{personalDetails.name}</p>
          <p className="heading-position">{personalDetails.profession}</p>
          <p className="heading-introduction">
          {personalDetails.introduction}
          </p>
        </div>
        <hr></hr>
        <div className="contact-details">
          <ul className="contact-list">
            <li><GoMail></GoMail>  {personalDetails.email}</li>
            <li><BsPhone></BsPhone> {personalDetails.phone}</li>
            <li><GoLocation/> {personalDetails.country}</li>

            <li><BsLinkedin></BsLinkedin> {personalDetails.linkedin}</li>
          </ul>
        </div>
        <hr></hr>

        
          <h1>Skills</h1>
          <div className="skills">
            <ul className="skills-tag-list1">
            {skillDetails.map((skill,key)=>{
              return(
                <li key={key}>{skill}</li>
              )
            })}
              <li>SEO</li>
              <li>Public Speaking</li>
              <li>Negotiation</li>
              <li>Teamwork</li>
              <li>Desicion Making</li>
              <li>Research Stratergy</li>
            </ul>
            <ul className="skills-tag-list2">
              <li>Emotional Intelligence</li>
              <li>Outbound Marketing</li>
              <li>Email Marketing</li>
              <li>Google Analytics</li>
              <li>Sales and Marketing</li>
            </ul>
        
        </div>
        <br></br>
        <br></br>
        <div className="education">
          <h1>EDUCATION</h1>
          <p className="heading-education">
            {" "}
            {educationDetails.title}
          </p>
          <p className="sub-heading-education">{educationDetails.subject}</p>
          <p className="date-education" placeholder="DD-MM-YYYY">{educationDetails.date}</p>
          </div>


          <br></br>
        <br></br>
        <h1>WORK EXPERIENCE</h1>
        

        <div className="work-experience">
        <p className="work-experience-heading">{workExperience.heading}</p>
        <p  className="work-experience-sub-heading">{workExperience.sub_heading}</p>
        <p   className="work-experience-date">{workExperience.date}</p>


        <div className="work-experience-sub-container">
        <ul>
          <li>{workExperience.description1}</li>
          <li>{workExperience.description2}</li>
          <li>{workExperience.description3}</li>
        </ul>
        </div>
        
        </div>

      <br></br>
        <h1>PROJECTS</h1>
        <div className="projects">
        <p className="projects-heading">{projectDetails.heading}</p>
        <p  className="projects-sub-heading">{projectDetails.sub_heading}</p>
        <p   className="projects-date">{projectDetails.date}</p>


        <div className="projects-sub-container">
        <ul>
        <li>{projectDetails.description1}</li>
        <li>{projectDetails.description2}</li>
        <li>{projectDetails.description3}</li>
        </ul>
        </div>
        
        </div>

       
      </div>
    </div>
    </div>
    <ResumeEditForm educationDetails={educationDetails} setEducationDetails={setEducationDetails}  personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}  projectDetails={projectDetails} setProjectDetails={setProjectDetails}  workExperience={workExperience} setWorkExperience={setWorkExperience} skillDetails={skillDetails} setSkillDetails={setSkillDetails}></ResumeEditForm>
   
<Pdf targetRef={pdfRef} filename="personalEmail.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
    </Fragment>
  );
};

export default Template;
