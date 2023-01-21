import { Card,Container,Button } from "react-bootstrap";
import BasicImage from '../../assets/basic-resume-template.png';
import MinimalistImage from '../../assets/minimalist-resume-template.png';
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate()
    const submitHandler=()=>{
        navigate('/temp2')
    }
    const submitHandler1=()=>{
        navigate('/temp1')
    }

    return(
        <Container style={{marginTop:'20px' ,display:'flex' }  }>
        <Card style={{ width: '23rem' }}>
      <Card.Img src={BasicImage} alt='basic-template'></Card.Img>
      <Card.Body>
        <Card.Title>Basic </Card.Title>
        <Card.Text>
        Easily personalize this basic resume layout that can be completed in under ten minutes through our intuitive process.
        </Card.Text>
        <Button variant="primary"  onClick={submitHandler1}>CREATE RESUME</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '23rem',marginLeft:'20px' }}>
    <Card.Img src={MinimalistImage} alt='basic-template'></Card.Img>
      <Card.Body>
        <Card.Title>Minimalist</Card.Title>
        <Card.Text>
        A simple and easy to follow resume template. Perfect for more conservative industries which prefer less flashy templates.
        </Card.Text>
        <Button variant="primary" onClick={submitHandler} > CREATE RESUME </Button>
      </Card.Body>
    </Card>
    
</Container>
    )
}
export default Home; 