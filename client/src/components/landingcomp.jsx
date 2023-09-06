import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./navbar";
import { faCaretUp, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/hero-image.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { reffunction } from "../hooks/reffunction";
import AOS from "aos";
import CountUp from "react-countup";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Landingcomp = () => {
  const refelement = useRef();
  const numberslist = [
    {
      start: 8500,
      end: 9000,
      title: "premium product",
      duration: 3,
    },
    {
      start: 1900,
      end: 2000,
      title: "happy customer",
      duration: 2,
    },
    {
      start: 0,
      end: 35,
      title: "awards winning",
      duration: 2.5,
    },
  ];
  return (
    <>
      <div className=" h-[fit]  bg-myblack pb-[63px]">
        <Navbar reference={refelement} />
        <div className=" w-[80%] h-[fit]  mx-auto lg:flex  lg:flex-row lg:place-content-between lg:items-center sm:flex sm:flex-col   ">
          <div className=" flex flex-col place-content-evenly h-[80vh] ">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" text-6xl font-bold capitalize z-10"
            >
              discover <br />
              most suitable <br /> property
            </h1>
            <p className=" text-gray-400">
              find a variety of properties that suit you very easily <br />{" "}
              forget all difficulties in finding a residence for you{" "}
            </p>
            <div className=" relative w-96 bg">
              <input
                type="text"
                className=" absolute h-14 w-96 rounded-lg text-black pl-10 pr-24 outline-0"
                placeholder=" search by title/city/country..."
              />
              <FontAwesomeIcon
                icon={faLocationDot}
                className=" absolute text-blue-500 top-4 text-2xl left-2"
              />
              <Link to="/properties">
                <button className=" absolute bg-gradient-to-tl from-blue-600 from-50% to-blue-400  h-10 w-20 rounded-md right-2 top-2 ">
                  search
                </button>
              </Link>
            </div>
            <div className=" w-[420px] flex place-content-between mt-10 ">
              {numberslist.map((item, i) => {
                return (
                  <>
                    <div key={i} className="  ">
                      <p className=" text-center text-4xl">
                        <CountUp
                          start={item.start}
                          end={item.end}
                          duration={item.duration}
                        />
                        <span className=" text-2xl text-yellow-600 ">+</span>{" "}
                      </p>
                      <p className=" capitalize text-gray-400">{item.title}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div
            className="   w-[280px] mx-auto  sm:w-[400px] "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src={image} alt="" className=" rounded-t-full" />
          </div>
          <section className=" absolute top-10 left-10   ">
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              className=" h-16 w-16 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full absolute left-[350px] top-20 "
            ></div>

            <div className=" h-80 w-80 bg-white rounded-full blur-3xl opacity-40 absolute top-14 left-14  "></div>
          </section>
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

export default Landingcomp;
