/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {Spinner} from 'components/common';
import { useToggleClick } from "_hooks";
import { Link } from "react-router-dom";
import "./style/map.scss";

const center = {
  lat: 52.237049,
  lng: 21.017532,
};

export const Map: FC = () => {
  const { open, handleToggle } = useToggleClick();
  const [mapApi, setMapApi] = useState("");

  const position = { lat: 52.17049, lng: 21.0532 };

  useEffect(() => {
    if (mapApi === "") {
      setTimeout(() => {
        setMapApi(process.env.REACT_APP_GOOGLE_API!);
      },0);
    }
  }, []);

  const infoWindow = (
    <div className="map__info">
      <h3 className="map__title">Furniture Shop</h3>
      <p className="map__description">visit us in our store</p>
      <Link to="/" className="map__link">
        Let's see
      </Link>
    </div>
  );

  if (mapApi === "") return <div className='map__loading'><Spinner/></div>;
  else
    return (
      <div className="map">
        <LoadScript googleMapsApiKey={mapApi}>
          <GoogleMap
            mapContainerClassName="map__wrapper"
            center={center}
            zoom={10}
          >
            <Marker {...{ position, onClick: handleToggle }} />
          </GoogleMap>
        </LoadScript>
        {open && infoWindow}
      </div>
    );
};
