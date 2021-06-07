import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import carIcon from './vector.svg';
import RealTimeCoordinates from './RealTimeCoordinates';



const Map = () => {
  const { data, loading } = RealTimeCoordinates();
  console.log(data);
  const [viewport, setViewport] = useState({
    latitude: 36.666280, 
    longitude: 2.936340,
    width: "100vw",
    height: "100vh",
    zoom: 14
  });

  const [SelectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCar(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibW9rcmFuZTAwMjMiLCJhIjoiY2tud2theHFoMGg3czJvdGd6bTdxMjlrMSJ9.M3Pn1DMgCtLCU3Myd3ZciA"
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
  
        {data.map(car => (
          <Marker
            latitude={car.coordinates.latitude}
            longitude={car.coordinates.longitude}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedCar(car);
              }}
            >
              <img src={carIcon} alt="car"/>
            </button>
          </Marker>
        ))}

        {SelectedCar ? (
          <Popup
            latitude={SelectedCar.coordinates.latitude}
            longitude={SelectedCar.coordinates.longitude}
            onClose={() => {
              setSelectedCar(null);
            }}
          >
            <div>
              <h2>{"Car ID :" + SelectedCar.carID}</h2>
              <p>{SelectedCar.time.toDate().toString()}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Map;


