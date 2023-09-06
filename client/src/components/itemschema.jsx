/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { deleteproperty } from "../hooks/deleteproperty";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { Authbool } from "../context/authbool";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const Itemschema = ({ item, modifyarraylikedelement }) => {
  const [itemfromdb, setitemfromdb] = useState({});
  const { user, isAuthenticated } = useAuth0();
  console.log("user", user);
  const navigateTo = useNavigate();
  // const { authbool } = useContext(Authbool);
  const postproperty = async () => {
    try {
      await axios.post("http://localhost:5000/properties/addproperty", {
        item: item,
        user: user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updatelikedelement = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/properties/updatebool/${id}`,
        item?.likedelement,
        { withCredentials: true }
      );
      getoneproperty(id);
    } catch (error) {
      console.log(error);
    }
  };
  const getoneproperty = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/properties/updatebool/${id}`,
        { withCredentials: true }
      );
      setitemfromdb(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getoneproperty(item.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemfromdb]);



  return (
    <>
      <div
        onClick={() => {
          navigateTo(`/details/${item.id}`);
          if (item !== null) {
            window.localStorage.setItem("item", JSON.stringify(item));
          }
        }}
        className=" cursor-pointer relative w-[240px] hover:bg-gradient-to-t hover:from-blue-200 hover:to-transparent hover:scale-110 hover:shadow-xl  hover:shadow-blue-100 transition-all duration-[.35s] rounded-lg p-2 my-2 h-[375px] overflow-hidden z-0 "
      >
        <div className=" h-fit">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={(e) => {
              e.stopPropagation();
              if (isAuthenticated) {
                modifyarraylikedelement(item);
                updatelikedelement(item?.id);
                !itemfromdb?.likedelement
                  ? postproperty()
                  : deleteproperty(item?.id);
              } else {
                toast.error("loggin first!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            }}
            className={` ${
              itemfromdb?.likedelement ? " text-red-500" : "text-white"
            }  absolute text-2xl right-7 top-5 cursor-pointer z-30`}
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
};

export default Itemschema;
