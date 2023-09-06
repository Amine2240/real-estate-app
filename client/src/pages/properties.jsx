import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Itemschema from "../components/itemschema";
import { reffunction } from "../hooks/reffunction";

const Properties = () => {
  const [arrayfetched, setarrayfetched] = useState([]);
  const [searcheditem, setsearcheditem] = useState("");
  const [loading, setloading] = useState(true);
  const refelement = useRef();
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://full-stack-real-estate-youtube.vercel.app/api/residency/allresd",
        { withCredentials: false }
      );
      setarrayfetched(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const modifyarray = () => {
    setarrayfetched(
      arrayfetched.map((item) => {
        return { ...item, likedelement: false };
      })
    );
  };
  useEffect(() => {
    fetchdata();
    modifyarray();
  }, []);
  const modifyarraylikedelement = (element) => {
    setarrayfetched(
      arrayfetched.map((item) => {
        if (item == element) {
          return { ...item, likedelement: !item.likedelement };
        } else {
          return item;
        }
      })
    );
  };
  const filteredarray = arrayfetched.filter((item) => {
    return (
      item?.title.toLowerCase().includes(searcheditem.toLowerCase()) ||
      item?.country.toLowerCase().includes(searcheditem.toLowerCase()) ||
      item?.city.toLowerCase().includes(searcheditem.toLowerCase())
    );
  });

  const arraytomap = (arrayfetched, filteredarray) => {
    if (searcheditem == "") {
      return arrayfetched;
    } else {
      return filteredarray;
    }
  };

  return (
    <div>
      <Navbar reference={refelement} />
      <div className=" relative w-96 mx-auto mb-28 mt-5">
        <input
          type="text"
          value={searcheditem}
          className=" absolute h-14 w-96 rounded-lg  text-black pl-10 pr-24 outline-0 border border-gray-300"
          placeholder=" search by title/city/country..."
          onChange={(event) => {
            setsearcheditem(event.target.value);
          }}
        />
        <FontAwesomeIcon
          icon={faLocationDot}
          className=" absolute text-blue-500 top-4 text-2xl left-2"
        />
        <button className=" absolute bg-gradient-to-tl from-blue-600 from-50% to-blue-400  h-10 w-20 rounded-md right-2 top-2 ">
          search
        </button>
      </div>
      {loading && (
        <div className="text-center">
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
        </div>
      )}
      <div className=" flex flex-wrap w-[77%] mx-auto  place-content-between p-10  ">
        {!loading &&
          arraytomap(arrayfetched, filteredarray).map((item, i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Itemschema
                key={i}
                item={item}
                modifyarraylikedelement={modifyarraylikedelement}
              />
            );
          })}
      </div>
      <button
        onClick={() => {
          reffunction(refelement);
        }}
        className=" fixed bg-gradient-to-tl from-blue-700 from-50% to-blue-400 z-10 w-14 h-14 rounded-full right-7 bottom-7 shadow-2xl shadow-black"
      >
        <FontAwesomeIcon icon={faCaretUp} className=" text-3xl " />{" "}
      </button>
    </div>
  );
};

export default Properties;
