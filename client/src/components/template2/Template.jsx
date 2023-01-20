import { Fragment } from "react";
import { Container } from "react-bootstrap";
import ResumeEditForm from "../form/ResumeEditForm";
import { GoLocation,GoMail } from "react-icons/go";
import { GrSkype } from "react-icons/gr";
import { BsPhone } from "react-icons/bs";
import "./Template.css";
const Template = () => {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center", color: "black" }}>
        RESUME TEMPLATE 2{" "}
      </h1>
      <div className="resume-holder">
        <div className="resume">
          <div className="heading">
            <p className="heading-name">John Doe</p>
            <p className="heading-position">Buisness Devlopement Manager</p>
            <p className="heading-introduction">
              Professional Buisness Devloper with more tha n four years of
              expeirence the devloper cant type more than this
            </p>
          </div>
          <hr></hr>
          <div className="contact-details">
            <ul className="contact-list">
              <li><GoMail></GoMail> john.doe@gmail.com</li>
              <li><BsPhone></BsPhone>9106878925</li>
              <li><GoLocation/>New York Usa</li>

              <li><GrSkype></GrSkype>john.doe</li>
            </ul>
          </div>
          <hr></hr>

          <div className="contact-details">
            <h1>Skills</h1>
            <div className="skills">
              <ul className="skills-tag-list1">
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
          </div>
          <br></br>
          <br></br>
          <div className="education">
            <h1>EDUCATION</h1>
            <p className="heading-education">
              {" "}
              MSc in Ecommerce and Buisness Administration
            </p>
            <p className="sub-heading-education">University Of Chicago</p>
            <p className="date-education">09/2008-06/2010</p>
            </div>


            <br></br>
          <br></br>
          <h1>WORK EXPERIENCE</h1>
          <div className="work-experience">
          <p className="work-experience-heading">BUISNESS DEVLOPEMENT MANAGER</p>
          <p  className="work-experience-sub-heading">AirStateSolutions</p>
          <p   className="work-experience-date">09/2008-06/2010</p>


          <div className="work-experience-sub-container">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates libero aliquid perspiciatis, sit recusandae. Doloremque, laborum? Id, eum illo? Necessitatibus asperiores unde doloribus perspiciatis delectus, quisquam nam hic quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed consequuntur qui fugiat id quia quasi, dicta placeat ullam voluptas porro distinctio dolorum sunt neque sint, tenetur libero itaque. A.</li>
          </ul>
          </div>
          
          </div>

          <div className="work-experience">
          <p className="work-experience-heading">BUISNESS DEVLOPEMENT MANAGER</p>
          <p  className="work-experience-sub-heading">AirStateSolutions</p>
          <p   className="work-experience-date">09/2008-06/2010</p>


          <div className="work-experience-sub-container">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates libero aliquid perspiciatis, sit recusandae. Doloremque, laborum? Id, eum illo? Necessitatibus asperiores unde doloribus perspiciatis delectus, quisquam nam hic quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed consequuntur qui fugiat id quia quasi, dicta placeat ullam voluptas porro distinctio dolorum sunt neque sint, tenetur libero itaque. A.</li>
          </ul>
          </div>
          
          </div>

        <br></br>
          <h1>PROJECTS</h1>
          <div className="projects">
          <p className="projects-heading">BUISNESS DEVLOPEMENT MANAGER</p>
          <p  className="projects-sub-heading">AirStateSolutions</p>
          <p   className="projects-date">09/2008-06/2010</p>


          <div className="projects-sub-container">
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem deserunt nam eum optio illo inventore voluptatem voluptatum iste quos non, reiciendis impedit ratione, expedita possimus assumenda, repellat pariatur earum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates libero aliquid perspiciatis, sit recusandae. Doloremque, laborum? Id, eum illo? Necessitatibus asperiores unde doloribus perspiciatis delectus, quisquam nam hic quas?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed consequuntur qui fugiat id quia quasi, dicta placeat ullam voluptas porro distinctio dolorum sunt neque sint, tenetur libero itaque. A.</li>
          </ul>
          </div>
          
          </div>

         
        </div>
      </div>
    

    <ResumeEditForm></ResumeEditForm>
    </Fragment>
  );
};

export default Template;
