import React from "react";
import "./style.css";
import image1 from "../../assets/Template1Image.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Fragment } from "react";
import ResumeEditForm from "../form/ResumeEditForm";
const Template1 = () => {
  
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
                    Reprehenderit, magni facere! Cumque corporis quibusdam
                    accusantium cum dolorum autem! In dolores ullam a odit
                    harum, eum nam praesentium natus odio beatae!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere! Cumque corporis quibusdam
                    accusantium cum dolorum autem! In dolores ullam a odit
                    harum, eum nam praesentium natus odio beatae!
                  </li>
                  <li>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, magni facere! Cumque corporis quibusdam
                    accusantium cum dolorum autem! In dolores ullam a odit
                    harum, eum nam praesentium natus odio beatae!
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rightHalfTemplate1MainBody">Right Half</div>
      </div>
    </div>
    </div>
    <ResumeEditForm></ResumeEditForm>
    </Fragment>
  );
};

export default Template1;
