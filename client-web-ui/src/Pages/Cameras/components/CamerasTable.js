import Table from 'react-bootstrap/Table';
import CameraTableItem from './CameraTableItem';
import { data } from "./data";

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
                {data.map((item) => {
                    return (
                        <CameraTableItem
                            key={item.id}
                            image={item.image}
                            camera={item.camera}
                            location={item.location}
                            desc={item.desc}
                        />
                    );
                })}
            </tbody>
        </Table>
    )
}

export default CamerasTable;