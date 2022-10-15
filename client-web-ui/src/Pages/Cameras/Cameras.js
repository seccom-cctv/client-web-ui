import './Cameras.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSquare } from "@fortawesome/free-solid-svg-icons";
import CamerasList from './components/CamerasList';
import { useState } from 'react';
import CamerasTable from './components/CamerasTable';

const Cameras = () => {

    const [showList, setShowList] = useState(true);
    const [showTable, setShowTable] = useState(false);

    const handleShowList = () => {
        setShowList(true);
        setShowTable(false);
    }

    const handleShowTable = () => {
        setShowList(false);
        setShowTable(true);
    }

    return (
        <div className='cameras' data-testid="cameras">
            <div className='cameras-header-wrapper'>
                <h2 className='cameras-header'>Available Cameras</h2>
                <div className='camera-grid-buttons'>
                    <Button variant="light" onClick={handleShowList}>
                        <FontAwesomeIcon icon={faSquare} />
                        <FontAwesomeIcon style={{ marginLeft: '0.2rem' }} icon={faSquare} />
                    </Button>
                    <Button variant="light" onClick={handleShowTable}><FontAwesomeIcon icon={faList} /></Button>
                </div>
            </div>
            <hr className='break-line'></hr>
            {showList && <CamerasList />}
            {showTable && <CamerasTable />}
        </div>
    )
}

export default Cameras;