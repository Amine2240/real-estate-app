import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { deleteproperty } from "../hooks/deleteproperty";
import { useNavigate } from "react-router-dom";
import { reffunction } from "../hooks/reffunction";


const Mylist = () => {
  // const list = useSelector((state) => state.list.value);
  const [myfavlist, setmyfavlist] = useState([]);
  const navigateTo = useNavigate();
  const refelement = useRef();
  const getallproperties = async () => {
    try {
      const response = await axios.get("http://localhost:5000/properties/all", {
        withCredentials: true,
      });
      setmyfavlist(response.data);
      console.log("response", response.data);
      console.log("myfavlist", myfavlist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallproperties();
  }, [myfavlist]);
  
  return (
    <div>
      <Navbar reference={refelement} />
      <div>
        <p className=" text-blue-500 capitalize font-bold text-4xl text-center m-8">
          my favorite places
        </p>
        {myfavlist.length == 0 && (
          <p className=" text-black text-center text-2xl font-semibold capitalize">
            no items yet
          </p>
        )}
        <div className=" flex flex-wrap w-[77%] mx-auto place-content-evenly p-10">
          {myfavlist.map((item) => {
            return (
              <>
                <div
                  onClick={() => {
                    navigateTo(`/details/${item._id}`);
                    if (item !== null) {
                      window.localStorage.setItem("item", JSON.stringify(item));
                    }
                  }}
                  className=" cursor-pointer relative w-[240px] hover:bg-gradient-to-t hover:from-blue-200 hover:to-transparent hover:scale-110 hover:shadow-xl  hover:shadow-blue-100 transition-all duration-[.35s] rounded-lg p-2 my-2 h-[375px] overflow-hidden "
                >
                  <div className=" h-fit">
                    <FontAwesomeIcon
                      icon={faRemove}
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteproperty(item?._id);
                      }}
                      className={` hover:text-red-500 absolute text-2xl right-7 top-5 cursor-pointer `}
                    />
                    <div className=" w-[200px] h-[200px] ">
                      <img
                        src={item?.image}
                        alt=""
                        className=" ml-2 object-cover w-full h-full rounded-lg"
                      />
                    </div>
                    <p className=" m-1 text-xl text-gray-600 capitalize font-bold">
                      {" "}
                      <span className=" text-orange-500">$</span>
                      {item?.price}
                    </p>
                    <p className=" ml-1 text-3xl text-blue-950  font-bold">
                      {item?.title}
                    </p>
                    <p className="  text-gray-500 m-2 ">{item?.description} </p>
                  </div>
                </div>
              </>
            );
          })}
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
    </div>
  );
};

export default Mylist;
