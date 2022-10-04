import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

interface MapsProps {
  property: string;
}

const Maps: React.FC<MapsProps> = ({ property }) => {
  return (
    <React.Fragment>
      <p>{property}</p>
    </React.Fragment>
  );
};

export default Maps;
