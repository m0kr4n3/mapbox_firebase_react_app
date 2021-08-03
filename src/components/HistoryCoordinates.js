import { useState, useEffect } from 'react';
import firebase from '../firebase';



const HistoryCoordinates = (car) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);



    const ref = firebase.firestore().collection("cars").doc(car).collection("position");
    //console.log(ref);

    async function getData() {
        setLoading(true);
        const docs = await ref.orderBy('time').get();
        //console.log(docs);
        const items = [];
        docs.forEach((doc) => {
                items.push(doc.data());
            })
            //console.log(items);

        setData(items);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    return { data, loading };

    // if(loading){
    //     return (
    //         <div>loading ...</div>
    //     );
    // }
    // return ( 
    //     <div className="HistoryCoordinates">
    //         {data.map((doc) => {
    //             return <h1>{doc.coordinates.longitude}</h1>
    //         })}
    //     </div>
    //  );
}

export default HistoryCoordinates;