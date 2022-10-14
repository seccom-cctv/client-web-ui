import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CameraCard from '../../../components/CameraCard/CameraCard';

const CamerasList = () => {
    return (
        <Container style={{margin: '0 auto'}}>
                <Row style={{marginBottom: '2rem'}}>
                    <Col><CameraCard image="/cameras/image.jpg" title="House 1" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image2.jpg" title="Office 2" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image2.jpg" title="House 3" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image.jpg" title="Airport 4" text="Lorem Ipsum" /></Col>
                </Row>
                <Row>
                    <Col><CameraCard image="/cameras/image.jpg" title="Office 3" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image2.jpg" title="House 47" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image.jpg" title="House 94" text="Lorem Ipsum" /></Col>
                    <Col><CameraCard image="/cameras/image2.jpg" title="House 7" text="Lorem Ipsum" /></Col>
                </Row>
            </Container>
    )
}

export default CamerasList;