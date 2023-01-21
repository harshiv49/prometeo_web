import React from "react";
import "./HomePage.css";
import resumeImage from "../../assets/Resume.svg";
import ProfileData from "../../assets/Profiledata-cuate.svg";
import ResumeOffers from "../../assets/ResumeOffers.svg";
import {Card} from "react-bootstrap";
import InstantResume from "../../assets/InstanResume.svg"
const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <div className="landingPage">
        <div className="leftHalfLanding">
          <h2>Rizzume</h2>
          <h6>Rizz up the Potential recruiters!</h6>
          <p>
            Elevate your job search with a professional resume tailored to your
            experience and industry using our customizable template options.
          </p>
        </div>
        <div className="rightHalfLanding">
          <img src={resumeImage} alt="Resume" />
        </div>
      </div>
      <div className="featuresSections">
        <div className="featureCard">
          <Card style={{ width: "18rem",height:"50vh",borderRadius:"18px"}}>
            <Card.Img variant="top" src={ProfileData} style={{height:"30vh"}} />
            <Card.Body>
              <Card.Title>A Resume for You!</Card.Title>
              <Card.Text>
              
                Add your recent achievments instantly. Don't wait for the formatting.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="featureCard">
          <Card style={{ width: "18rem",height:"50vh",borderRadius:"18px"}}>
            <Card.Img variant="top" src={ResumeOffers} style={{height:"30vh"}} />
            <Card.Body>
              <Card.Title>Get Offers</Card.Title>
              <Card.Text>
              Get offers with a beautiful Resume! We personally will send a list of Potential recruiters
                
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="featureCard">
          <Card style={{ width: "18rem",height:"50vh",borderRadius:"18px" }}>
            <Card.Img variant="top" src={InstantResume} style={{height:"30vh"}}  />
            <Card.Body>
              <Card.Title>Anywhere, Anytime.</Card.Title>
              <Card.Text>
              Add your recent achievments instantly. Don't wait for the formatting.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
