import React from "react";
import "./style.css";
import {useState,useRef} from 'react'
import image1 from "../../assets/Template1Image.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Fragment } from "react";
import ResumeEditForm from "../form/ResumeEditForm";
const Template1 = () => {
  const educationInitialState = {
    title: " MSc in Ecommerce and Buisness Administration",
    subject: "University Of Chicago",
    date: "09/2008-06/2010",
  };
  const [educationDetails, setEducationDetails] = useState(
    educationInitialState
  );
  const personalDataInitialState = {
    name: " John Doe",
    profession: "Buisness Devlopement Manager",
    phone: "2217321098",
    email: " john.doe@email.com",
    country: "Gujarat, India ",
    introduction: "09/2008-06/2010",
    linkedin: "john.doe",
  };
  const [personalDetails, setPersonalDetails] = useState(
    personalDataInitialState
  );

  const WorkExperienceInitialState = {
    heading: " John Doe",
    sub_heading: "Buisness Devlopement Manager",
    date: "09/2008-06/2010",
    description1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
    description3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
  };
  const [workExperience, setWorkExperience] = useState(
    WorkExperienceInitialState
  );

  const projectsInitialState = {
    heading: " John Doe",
    subheading: "Buisness Devlopement Manager",

    description1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
    description2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
    description3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.",
  };
  const [projectDetails, setProjectDetails] = useState(projectsInitialState);

 

  // useEffect(()=>{
  //   console.log(skillDetails);
  // },[skillDetails])

  const [skillDetails, setSkillDetails] = useState([]);


  const pdfRef = useRef();
  return (
    <Fragment>
    
    <div className="template1Formatter">

    <div className="template1Holder">
      {/* TEMPLATE 1 HEADER START */}
      <div className="template1Header">
        <div className="leftHalfHeaderTemplate1">
          <div className="template1Image">
            <img src={image1} alt="profile-image" className="template1ProfileImage" />
          </div>
          <div className="template1NameAndPosition">
            <h2>Jane Roe</h2>
            <h6>Backend Developer</h6>
          </div>
        </div>
        <div className="rightHalfHeaderTemplate1">
          <ul className="template1ContactList">
            <li>
              example.email@gmail.com{" "}
              <AiOutlineMail style={{ fontSize: "24px" }} />{" "}
            </li>
            <li>
              123456789 <BsFillPhoneFill />
            </li>
            <li>
              Example City, Country <BiLocationPlus />
            </li>
            <li>
              linkedIn.com <BsLinkedin />{" "}
            </li>
            <li>
              github.com <BsGithub />
            </li>
          </ul>
        </div>
      </div>

      {/* ONE LINER */}
      <div className="template1OneLiner">
        A clear and concise summary of your skills, experience, and
        qualifications that highlights your value as a candidate.
      </div>

      {/* MAIN BODY OF RESUME */}
      <div className="mainBody">
        <div className="leftHalfTemplate1MainBody">
          {/* WORK EXPERIENCE SECTION START */}
          <div className="workExperienceTemplate1">
            <h2>Work Experience</h2>
            <div className="experienceCardTemplate1">
              <h3>Business Developer Manager</h3>
              <h5>Company Name</h5>
              <div className="experienceDateAndLocationTemplate1">
                <div className="date">09/2014-06/2017</div>
                <div className="place">New York,USA</div>
              </div>
              <div className="experiencePointsTemplate1">
                <ul className="experienceListTemplate1">
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  
                </ul>
              </div>
            </div>
            
          </div>

          {/* EDUCATION SECTION START */}
          <div className="educationSectionTemplate1">
            <h2>EDUCATION</h2>
            <div className="educationDetails">
              <h4>Msc in Economics and Business Admin</h4>
              <h5>The University of California</h5>
              <h6>09/2010-0/6/2015</h6>
            </div>
            <div className="educationDetails">
              <h4>Msc in Economics and Business Admin</h4>
              <h5>The University of California</h5>
              <h6>09/2010-0/6/2015</h6>
            </div>
          </div>
        </div>
        <div className="rightHalfTemplate1MainBody">

          {/* SKILLS SECTION START */}
          <div className="skillSectionTemplate1">
            <h2>SKILLS</h2>
              <ul className="allListSkill">
                <li>SEO </li>
                <li>Public Speaking </li>
                <li>Negotiation </li>
                <li>Teamwork </li>
                <li>Decision Making </li>
                <li>Research Marketing </li>
                <li>Artificial Language</li>
                <li>Sales and Marketing </li>
              </ul>
          </div>

          {/* Projects */}
          <div className="projects">
            <h2>PROJECTS</h2>
            <div className="experienceCardTemplate1">
              <h3>Delusional Car Center</h3>
              <div className="experienceDateAndLocationTemplate1">
                <div className="date">09/2014-06/2017</div>
              </div>
              <div className="experiencePointsTemplate1">
                <ul className="experienceListTemplate1">
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere!
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <ResumeEditForm  educationDetails={educationDetails}
    setEducationDetails={setEducationDetails}
    personalDetails={personalDetails}
    setPersonalDetails={setPersonalDetails}
    projectDetails={projectDetails}
    setProjectDetails={setProjectDetails}
    workExperience={workExperience}
    setWorkExperience={setWorkExperience}
    skillDetails={skillDetails}
    setSkillDetails={setSkillDetails}></ResumeEditForm>
    </Fragment>
  );
};

export default Template1;
