import Card from 'react-bootstrap/Card';
import './CameraCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

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
                    <Link className='camera-card-link' variant="primary">View More<FontAwesomeIcon className='camera-card-icon' icon={faExternalLinkAlt} /></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CameraCard;