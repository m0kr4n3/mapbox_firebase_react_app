import { useState, useEffect } from 'react';
import firebase from './firebase';

const RealTimeCoordinates = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("position");
    //console.log(ref);


    const getData = () => {
        setLoading(true);
        ref.onSnapshot((querySnapShot) => {
            const items = [];
            querySnapShot.forEach((doc) => {
                items.push(doc.data());
            });
            //console.log(items);
            setData(items);
            setLoading(false);
        })
    }
    useEffect(() => {
        getData();
    }, []);

    return { data, loading };
}

export default RealTimeCoordinates;