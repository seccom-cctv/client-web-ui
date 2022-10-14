import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CameraCard.css';
import img from './image.jpg';

const CameraCard = (props) => {
    return (
        <Card style={{ width: '18rem', maxWidth: '18rem', height: '21rem', maxHeight: '21rem' }}>
            <Card.Img style={{maxHeight: '55%', minHeight: '55%'}} variant="top" src={props.image} />
            <Card.Body style={{maxHeight: '45%', minHeight: '45%', padding: 0, margin: 0}}>
                <Card.Title style={{maxHeight: '25%', minHeight: '25%', padding: '0.5rem 0 0 0.5rem', margin: 0}}>{props.title}</Card.Title>
                <Card.Text style={{maxHeight: '40%', minHeight: '40%', padding: '0.5rem 0 0 0.5rem', margin: 0}}>
                    {props.text}
                </Card.Text>
                <div style={{maxHeight: '35%', minHeight: '35%', padding: '0 0 0 0.5rem', margin: 0}}>
                    <Button variant="primary">View More</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CameraCard;