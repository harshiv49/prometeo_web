import { Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useState } from "react";
import {AiFillPlusSquare} from "react-icons/ai";
import EductaionalForm from "./EducationalForm";
import PersonalEditForm from "./PersonalEditForm";
import SkillsForm from "./SkillForm";
import WorkExperienceForm from "./WorkExperience";
import ProjectForm from "./ProjectForm";
const ResumeEditForm = () => {
  const [wantsToUpdateEducationalDetails,setWantsToUpdateEducationalDetails]=useState(false);
  const [wantsToUpdateSkills,setWantsToUpdateSkills]=useState(false);
  const [wantsToUpdatePersonalDetails,setWantsToUpdatePersonalDetails]=useState(false);
  const [wantsToUpdateProjects,setWantsToUpdateProjects]=useState(false);
  const [wantsToUpdateWorkExperience,setWantsToUpdateWorkExperience]=useState(false);

  let flag= false;
  const educationDetailsHandler=()=>{
    flag=!flag;
    setWantsToUpdateEducationalDetails(flag);
   
  }
  const personalDetailsHandler=()=>{
    flag=!flag;
    setWantsToUpdatePersonalDetails(flag);
   
  }
  const workExperiencesHandler=()=>{
    flag=!flag;
    setWantsToUpdateWorkExperience(flag);
   
  }
  const projectDetailsHandler=()=>{
    flag=!flag;
    setWantsToUpdateProjects(flag);
   
  }
  const skillsHandler=()=>{
    flag=!flag;
    setWantsToUpdateSkills(flag);
   
  }
  return (
    <Fragment>
    <h1 style={{textAlign:'center',color:'black'}}>BUILD YOUR RESUME</h1>
    <div className="modalOpener" onClick={educationDetailsHandler}>
    <div > EDUCATIONAL DETAILS</div>
    <AiFillPlusSquare style={{fontSize:"3rem"}}/>
    </div>
      {wantsToUpdateEducationalDetails&&(
        <EductaionalForm></EductaionalForm>
       ) 
      }

      <div className="modalOpener" onClick={personalDetailsHandler}>
      <div >PERSONAL DETAILS </div>
      <AiFillPlusSquare style={{fontSize:"3rem"}}/>
      </div>
     

      {wantsToUpdatePersonalDetails&&(
        <PersonalEditForm></PersonalEditForm>
        ) 
      }
      

      <div className="modalOpener" onClick={workExperiencesHandler}>
      <div > WORK EXPERIENCE</div>
      <AiFillPlusSquare style={{fontSize:"3rem"}}/>
      </div>
     
      {wantsToUpdateWorkExperience&&(
          <WorkExperienceForm></WorkExperienceForm>
        ) 
      }
      <div>


      <div className="modalOpener" onClick={projectDetailsHandler}>
    <div > PROJECT</div>
    <AiFillPlusSquare style={{fontSize:"3rem"}}/>
    </div>
      {wantsToUpdateProjects&&(
        <ProjectForm></ProjectForm>
       ) 
      }
      </div>
      
      <div className="modalOpener" onClick={skillsHandler}>
      <div >SKILLS</div>
      <AiFillPlusSquare style={{fontSize:"3rem"}}/>
      </div>

      {wantsToUpdateSkills&&(
      <SkillsForm></SkillsForm>) 
      }

      
      
    </Fragment>
  );
};
export default ResumeEditForm ;
