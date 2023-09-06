/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import * as ELG from "esri-leaflet-geocoder";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import axios from "axios";
import { useMap } from "react-leaflet";

const DefaulIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [35, 35],
});
L.Marker.prototype.options.icon = DefaulIcon;

const GeoCoderMarker = () => {
  const [position, setPosition] = useState([60, 19]);
  const [placeaddress, setplaceaddress] = useState("");
  const map = useMap();
  // const apikey =
  //   "AAPK74e39b3e28684cabb545a53522eb0e1b71Mqto-id0zLeHuTEJHdRbpXJKVXP2xdT9hTwQrd7KNGllEFWr3Qr7W8wqcpNECs";

  const handlegeocode = async () => {
    const item = localStorage.getItem("item");
    if (item !== null) {
      setplaceaddress(
        `${JSON.parse(item).address} ${JSON.parse(item).city} ${
          JSON.parse(item).country
        }`
      );
    }

    try {
      const response = await axios.get(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?f=json&singleLine=${placeaddress}`
      );
      const data = response.data;
      if (data.candidates.length > 0) {
        const { location } = data.candidates[0];
        setPosition([location.y, location.x]);
        map.flyTo([location.y, location.x], 8);
      } else {
        setPosition([60, 19]);
      }
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  useEffect(() => {
    handlegeocode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeaddress]);

  return (
    <Marker position={position} icon={DefaulIcon}>
      <Popup>{placeaddress}</Popup>
    </Marker>
  );
};

export default GeoCoderMarker;
