import './Intrusions.css';
import IntrusionListItem from './components/IntrusionListItem';
import ScreenNavbar from '../../components/Navbar/Navbar';
import { S3 } from 'aws-sdk';
import { useEffect, useState } from 'react';

const Intrusions = (props) => {
    const [intrusionList, setIntrusionList] = useState([]);

    const s3 = new S3({
        accessKeyId: 'AKIA6JI5KFJUBAJVWMXO',
        secretAccessKey: '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',
        region: 'eu-west-3'
    });

    let bucketName = "seccom.video.store.1";
    let renderBucketList = [];

    useEffect(() => {
        s3.listObjectsV2({ Bucket: bucketName }, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                for (let i = 0; i < data.Contents.length; i++) {
                    renderBucketList.push(<IntrusionListItem id={i} date={data.Contents[i].LastModified.toString()} type={data.Contents[i].Key + " Size: " + data.Contents[i].Size} url={"https://s3.eu-west-3.amazonaws.com/seccom.video.store.1/"+data.Contents[i].Key} />);
                }
                setIntrusionList(renderBucketList);
            }
        });
    },[])


    return (
        <>
            <ScreenNavbar />
            <div className='intrusions-section'>
                <ul className="responsive-table" style={{ paddingLeft: 0 }}>
                    <li className="table-header">
                        <div className="col col-11">ID</div>
                        <div className="col col-22">Date</div>
                        <div className="col col-33">Camera</div>
                        <div className="col col-44">View</div>
                    </li>
                    {intrusionList}
                </ul>
            </div>
        </>
    )
}

export default Intrusions;