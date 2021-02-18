import {useState, useEffect} from 'react';
import Tracking from '../../components/Tracking/Tracking';
import axios, {AxiosResponse} from 'axios';
import List from '../../components/List/List';

export default function PurchaseTrackingPage() {
    const [progress, setProgress] = useState<Array<any>>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/purchases').then((response: AxiosResponse<any>) => {
            console.log('purchases are: ', response);
        }).catch(e => console.log(e));
    }, []);

    return(
        <div>
            <List />
            {/*<Tracking />*/}
        </div>
    );
}


// In warehouse
// In transit
// Ready for delivery
// Delivered
// Signed By:
