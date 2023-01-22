import { Fragment, useState } from "react";
import { Form, Container, Button, ButtonGroup, ToggleButton } from "react-bootstrap";

const WorkExperienceForm = ({ workExperience, setWorkExperience }) => {
  const [radioValue, setRadioValue] = useState('0');

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const index = radioValue;

  const radios = [
    { name: 'Update 1', value: '0' },
    { name: 'Update 2', value: '1' },
  ];
  return (
    <Fragment>
      <Container style={{ width: "80%" }}>
      <ButtonGroup className="workExperienceButtons">
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${idx}`}
          type="radio"
          variant={idx % 2 ? 'outline-success' : 'outline-success'}
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)} 
          className="ToggleButtonExperience"
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="work-heading">
            <Form.Label>Heading</Form.Label>
            <Form.Control
              type="text"
              value={workExperience[index].heading}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].heading = event.target.value),
                ])
              }
              placeholder="Enter heading"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="work-sub-heading">
            <Form.Label>Sub heading</Form.Label>
            <Form.Control
              type="text"
              value={workExperience[index].sub_heading}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].sub_heading = event.target.value),
                ])
              }
              placeholder="Enter Sub Heading"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="text"
              value={workExperience[index].date}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].date = event.target.value),
                ])
              }
              placeholder="Enter Date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description1">
            <Form.Label>Description1</Form.Label>
            <Form.Control
              as="textarea"
              value={workExperience[index].description1}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].description1 = event.target.value),
                ])
              }
              placeholder="Enter Description1"
              rows={6}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description2">
            <Form.Label>Description2</Form.Label>
            <Form.Control
              as="textarea"
              value={workExperience[index].description2}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].description2 = event.target.value),
                ])
              }
              placeholder="Enter Description2"
              rows={6}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description3">
            <Form.Label>Description3</Form.Label>
            <Form.Control
              as="textarea"
              value={workExperience[index].description3}
              onChange={(event) =>
                setWorkExperience([
                  ...workExperience,
                  (workExperience[index].description3 = event.target.value),
                ])
              }
              placeholder="Enter Description3"
              rows={6}
            />
          </Form.Group>

          {/*
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter Description" rows={6} />
          </Form.Group>
          */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};
export default WorkExperienceForm;
