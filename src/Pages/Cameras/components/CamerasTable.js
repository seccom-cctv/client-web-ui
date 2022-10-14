import Table from 'react-bootstrap/Table';
import CameraTableItem from './CameraTableItem';

const CamerasTable = () => {
    return (
        <Table striped bordered hover style={{ width: '87%', margin: '0 auto' }}>
            <thead>
                <tr>
                    <th>Camera</th>
                    <th>Location</th>
                    <th>Desc</th>
                    <th>View More</th>
                </tr>
            </thead>
            <tbody>
                <CameraTableItem camera="1" location="Office 3" desc="Lorem Ipsum" />
                <CameraTableItem camera="2" location="Office 4" desc="Lorem Ipsum" />
                <CameraTableItem camera="3" location="Office 5" desc="Lorem Ipsum" />
                <CameraTableItem camera="4" location="Office 6" desc="Lorem Ipsum" />
                <CameraTableItem camera="5" location="Office 7" desc="Lorem Ipsum" />
                <CameraTableItem camera="6" location="Office 8" desc="Lorem Ipsum" />
                <CameraTableItem camera="7" location="Office 9" desc="Lorem Ipsum" />
                <CameraTableItem camera="8" location="Office 10" desc="Lorem Ipsum" />
                <CameraTableItem camera="9" location="Office 11" desc="Lorem Ipsum" />
                <CameraTableItem camera="10" location="Office 12" desc="Lorem Ipsum" />
                <CameraTableItem camera="11" location="Office 13" desc="Lorem Ipsum" />
                <CameraTableItem camera="12" location="Office 14" desc="Lorem Ipsum" />
                <CameraTableItem camera="13" location="Office 15" desc="Lorem Ipsum" />
                <CameraTableItem camera="14" location="Office 16" desc="Lorem Ipsum" />
                <CameraTableItem camera="15" location="Office 17" desc="Lorem Ipsum" />
                <CameraTableItem camera="16" location="Office 18" desc="Lorem Ipsum" />
                <CameraTableItem camera="17" location="Office 19" desc="Lorem Ipsum" />
            </tbody>
        </Table>
    )
}

export default CamerasTable;