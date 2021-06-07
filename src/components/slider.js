import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import  { useState } from "react";


const Slider = ({car,setCar,data,loading}) => {
    const [ value, setValue ] = useState(0); 


    if(loading)
    return (
        <div>loading ...</div>
    );
    return (
        <div className="Slider">
            { (data.length !== 0) ? (
                
                <RangeSlider
                value={value}
                onChange={changeEvent => setValue(changeEvent.target.value)}
                min={0}
                max={data.length -1}
                tooltipLabel={(value) => {
                    const doc = data[value].time.toDate().toString();
                    setCar(data[value]);
                    return doc;
                }}/>
                
            ): null }
      </div>
    );
  
  };
export default Slider;