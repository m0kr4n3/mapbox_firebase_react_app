import HistoryMap from './HistoryPosition';
// eslint-disable-next-line no-unused-vars
import RealTimeMap from './RealTimePosition';
import Slider from './slider';
import HistoryCoordinates from './HistoryCoordinates';
import {useState } from 'react';
import './maps.css';


function Map() {
  const { data, loading } = HistoryCoordinates("IL3p8wCpJ7Omxgh2B98N");
  const [car, setCar] = useState(data[0]);
  return ( 
    <div className="app">
      {/* History Position */}
      <HistoryMap car= {car}  loading={loading}/>
      <Slider car={car} setCar={setCar} data={data} loading={loading}/>

      {/* Real time Position */}
      {/* <RealTimeMap /> */}
    </div>

  );
}


export default Map;