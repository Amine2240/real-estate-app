import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faCar,
  faGasPump,
  faLocationDot,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import GeoCoderMarker from "../components/geomaker";
import { reffunction } from "../hooks/reffunction";

const Detailspage = () => {
  const refelement = useRef();
  const [parseditem, setparseditem] = useState({});
  useEffect(() => {
    const storeddata = window.localStorage.getItem("item");
    if (storeddata !== null) {
      setparseditem(JSON.parse(storeddata));
    }
  }, []);

  return (
    <>
      <Navbar reference={refelement} />
      <div className=" text-black mx-auto w-[90%] m-10">
        <img
          src={parseditem.image}
          alt=""
          width="85%"
          className=" mx-auto h-[500px] object-cover rounded-3xl"
        />
        <div className=" flex w-[85%]  mx-auto flex-col  sm:flex-row items-center">
          <div className=" h-[400px] sm:w-[550px] flex flex-col place-content-evenly m-2">
            <div className="flex  w-full place-content-between">
              <p className=" text-4xl font-bold capitalize text-blue-950">
                {parseditem.title}{" "}
              </p>
              <p className=" text-2xl font-bold capitalize text-orange-500">
                {" "}
                ${parseditem.price}
              </p>
            </div>
            <div className="flex">
              <p className=" text-blue-950 opacity-80 capitalize font-medium text-lg mx-5">
                {" "}
                <FontAwesomeIcon icon={faBath} />
                {parseditem.facilities?.bathrooms} bathrooms{" "}
              </p>
              <p className=" text-blue-950 opacity-80 capitalize font-medium text-lg mx-5">
                {" "}
                <FontAwesomeIcon icon={faCar} />
                {parseditem.facilities?.parkings} parkings{" "}
              </p>
              <p className=" text-blue-950 opacity-80 capitalize font-medium text-lg mx-5">
                {" "}
                <FontAwesomeIcon icon={faGasPump} />
                {parseditem.facilities?.bedrooms} romm/s{" "}
              </p>
            </div>
            <p className=" text-gray-500 capitalize">
              {" "}
              {parseditem.description} <br />
              <span className=" text-blue-950 text-2xl">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
              </span>{" "}
              {parseditem.address} {parseditem.city} {parseditem.country}
            </p>
            <button className=" hover:scale-95 transition-all duration-300 my-5 bg-gradient-to-tl from-blue-700 from-50% to-blue-400  h-10 w-[100%] text-white capitalize font-semibold rounded-md">
              book you visit
            </button>
          </div>

          <MapContainer
            center={[51.505, -0.09]}
            zoom={1}
            scrollWheelZoom={false}
            style={{ height: "300px", width: "80%" }}
            className=" rounded-xl shadow-lg m-1 "
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoCoderMarker />
          </MapContainer>
        </div>
      </div>
      <button
        onClick={() => {
          reffunction(refelement);
        }}
        className=" fixed bg-gradient-to-tl from-blue-700 from-50% to-blue-400 z-10 w-14 h-14 rounded-full right-7 bottom-7 shadow-2xl shadow-black"
      >
        <FontAwesomeIcon icon={faCaretUp} className=" text-3xl " />{" "}
      </button>
    </>
  );
};

export default Detailspage;
