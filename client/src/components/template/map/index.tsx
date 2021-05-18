import React, { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useToggleClick } from "_hooks";
import { Link } from "react-router-dom";
import "./style/map.scss";

const center = {
  lat: 52.237049,
  lng: 21.017532,
};

export const Map: FC = () => {
  const { open, handleToggle } = useToggleClick();
  const position = { lat: 52.17049, lng: 21.0532 };
  const infoWindow = (
    <div className="map__info">
      <h3 className="map__title">Furniture Shop</h3>
      <p className="map__description">visit us in our store</p>
      <Link to="/" className="map__link">
        Let's see
      </Link>
    </div>
  );
  const map: string = process.env.REACT_APP_GOOGLE_API!;
  return (
    <>
      <div className="map">
        <LoadScript googleMapsApiKey={map}>
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
    </>
  );
};
