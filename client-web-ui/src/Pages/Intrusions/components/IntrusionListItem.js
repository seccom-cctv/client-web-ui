import { VideoIcon } from "@primer/octicons-react"; // custom icons
import { AwesomeButton } from 'react-awesome-button';

const IntrusionListItem = (props) => {

    const openVideo = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <li className="table-row" data-testid="building-table-row">
            <div className="col col-11" data-label="id">{props.id}</div>
            <div className="col col-22" data-label="date">{
                props.date.split(" ")[1]+" "+props.date.split(" ")[2]+" "+props.date.split(" ")[3]+" "+props.date.split(" ")[4]
            }</div>
            <div className="col col-33" data-label="type">{props.type.split("-")[0]}</div>
            <div className="col col-44 col-icon" data-label="Logs">
                <AwesomeButton type="primary" onPress={() => openVideo(props.url)}><VideoIcon /></AwesomeButton>
            </div>
        </li>
    )
}

export default IntrusionListItem;