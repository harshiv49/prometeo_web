import { Fragment } from "react";
import { Container } from "react-bootstrap";
import './Template.css'
const Template = () => {
  return (
    <Fragment>

    <h1 style={{textAlign:'center'}}>RESUME TEMPLATE 2 </h1>
    <div className="resume-holder">
    <div className="resume">
      
      <div className="heading">
        <p className="heading-name">John Doe</p>
        <p className="heading-position">Buisness Devlopement Manager</p>
        <p className="heading-introduction">
          Professional Buisness Devloper with more tha n four years of
          expeirence the ddevloper cant type more than this
        </p>
      </div>
      <hr></hr>
      <div className="contact-details">
        <ul className="contact-list">
          <li>john.doe@gmail.com</li>
          <li>9106878925</li>
          <li>New York Usa</li>
       
          <li>john.doe</li>
        </ul>
      </div>
      <hr></hr>

      <div className="contact-details">
        <h1>Skills</h1>
        <div>
        <ul className="skills-tag-list">
          <li>SEO</li>
          <li>Public Speaking</li>
          <li>Negotiation</li>
          <li>Teamwork</li>
          <li>Desicion Making</li>
          <li>Research Stratergy</li>
        </ul>
        </div>
        <div>
        <ul className="skills-tag-list">
          <li>Emotional Intelligence</li>
          <li>Outbound Marketing</li>
          <li>Email Marketing</li>
          <li>Google Analytics</li>
          <li>Sales and Marketing</li>
        </ul>
        </div>

      </div>
      </div>
      </div>


    </Fragment>
  );
};

export default Template;
