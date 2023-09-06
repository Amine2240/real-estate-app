import {
  faCaretDown,
  faShieldHalved,
  faSignal,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import image from "../assets/value.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Ourvalue = () => {
  const [interestbool, setinterestbool] = useState(false);
  const [pricesbool, setpricesbool] = useState(false);
  const [marketbool, setmarketbool] = useState(false);

  const valueinfo = [
    {
      icon: faShieldHalved,
      valuebooleen: interestbool,
      functionbooleen: setinterestbool,
      titre: "Best interest rates on the market",
      para: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim",
    },
    {
      icon: faXmark,
      valuebooleen: pricesbool,
      functionbooleen: setpricesbool,
      titre: "Prevent unstable prices",
      para: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim",
    },
    {
      icon: faSignal,
      valuebooleen: marketbool,
      functionbooleen: setmarketbool,
      titre: "Best price on the market",
      para: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim",
    },
  ];

  return (
    <div className=" w-[95%]  flex-wrap mx-auto flex place-content-center items-center ">
      <div className=" w-[290px] sm:w-[450px] ">
        <img src={image} alt="" className=" rounded-t-full" />
      </div>
      <div className=" w-[600px] ml-0 sm:ml-32">
        <p className=" text-2xl text-orange-500 capitalize font-semibold m-2">
          our value
        </p>
        <p className=" text-3xl text-blue-950 capitalize font-bold m-2">
          value we give to you
        </p>
        <p className=" text-gray-500 mx-2 my-5">
          We always ready to help by providijng the best services for you.{" "}
          <br /> We beleive a good blace to live can make your life better
        </p>
        <div className="">
          {valueinfo.map((item, i) => {
            return (
              <div
                key={i}
                className={` ${
                  item.valuebooleen ? " h-[170px]" : "h-[65px]"
                }  transition-all  border border-gray-200 rounded-lg pt-3 px-3 pb-1 my-7 shadow-blue-100 shadow-lg`}
              >
                <div className=" flex place-content-between mb-5 items-center">
                  <FontAwesomeIcon
                    className=" p-3 rounded-lg w-4 text-blue-500 bg-blue-100 "
                    icon={item.icon}
                  />
                  <p className=" text-xl text-blue-950 capitalize font-bold">
                    {item.titre}
                  </p>
                  <FontAwesomeIcon
                    className=" cursor-pointer p-3  rounded-lg w-4 text-blue-500 bg-blue-100 "
                    icon={faCaretDown}
                    onClick={() => {
                      item.functionbooleen(!item.valuebooleen);
                    }}
                  />
                </div>

                <p
                  className={` text-gray-500 m-2 ${
                    item.valuebooleen ? " opacity-100" : " opacity-0 scale-0"
                  } transition-all duration-[0.2s]`}
                >
                  {item.para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourvalue;
