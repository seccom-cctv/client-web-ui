import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const CameraTableItem = (props) => {
    return (
        <tr>
            <td>{props.camera}</td>
            <td>{props.location}</td>
            <td>{props.desc}</td>
            <td style={{width: '10rem'}}><FontAwesomeIcon icon={faExternalLinkAlt}/></td>
        </tr>
    )
}

export default CameraTableItem;