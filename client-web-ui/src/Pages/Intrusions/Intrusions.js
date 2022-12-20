import './Intrusions.css';
import IntrusionListItem from './components/IntrusionListItem';
import ScreenNavbar from '../../components/Navbar/Navbar';
import { S3 } from 'aws-sdk';
import { useEffect, useState } from 'react';

const Intrusions = (props) => {
    const [intrusionList, setIntrusionList] = useState([]);
    let renderBucketList = [];

    useEffect(() => {
        const s3 = new S3({
            accessKeyId: 'AKIAYV57IAJ4DNJJ6OEJ',
            secretAccessKey: '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',
            region: 'us-east-1'
        });
    
        s3.listObjectsV2({ Bucket: 'seccom.video.store' }, (err, data) => {
            if (err) {
                console.error(err);
            } else {
                console.log(data.Contents); // This is an array of objects representing the objects in the bucket
                for (let i = 0; i < data.Contents.length; i++) {
                    renderBucketList.push(<IntrusionListItem id={i} date={data.Contents[i].LastModified.toString()} type={data.Contents[i].Key + " Size: "+ data.Contents[i].Size} />);
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
                        <div className="col col-33">Type</div>
                        <div className="col col-44">View</div>
                    </li>
                    {intrusionList}
                </ul>
            </div>
        </>
    )
}

export default Intrusions;