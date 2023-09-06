import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import Itemschema from "./itemschema";
import { ClipLoader } from "react-spinners";

const Popularchoices = () => {
  const swiper = useSwiper();
  const [arrayfetched, setarrayfetched] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://full-stack-real-estate-youtube.vercel.app/api/residency/allresd",{withCredentials : false}
      );
      setarrayfetched(response.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const actualarray = arrayfetched.slice(0, 8);
  useEffect(() => {
    fetchdata();
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
  const [slidesPerView, setslidesPerView] = useState(
    window.innerWidth > 748 ? 4 : 1
  );

  const handlesize = () => {
    if (window.innerWidth < 768) {
      setslidesPerView(1);
    } else {
      if (window.innerWidth > 768 && window.innerWidth < 1000) {
        setslidesPerView(2);
      } else {
        if (window.innerWidth > 1000 && window.innerWidth < 1300) {
          setslidesPerView(3);
        } else {
          setslidesPerView(5);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handlesize);
  }, []);

  return (
    <div className=" w-[85%] mx-auto  ">
      <div className=" m-5 flex place-content-between">
        <div>
          <p className=" text-xl text-orange-500 capitalize font-semibold">
            best choices
          </p>
          <p className=" text-3xl text-blue-950 capitalize font-bold">
            popular residencies
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              swiper.slidePrev();
            }}
            className="prev-button  bg-blue-100 m-2 w-10 h-10 rounded-lg text-blue-500"
          >
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
          </button>
          <button
            onClick={() => {
              swiper.slideNext();
            }}
            className=" next-button bg-white text-blue-500 shadow-lg m-2 w-10 h-10 rounded-lg"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      {loading && (
        <div className="text-center">
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
        </div>
      )}
      <div className=" flex gap-5 flex-wrap  place-content-center">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          slidesPerView={slidesPerView}
          className=" w-full ml-20 sm:ml-0"
        >
          {loading && <p className=" text-black">loading....</p>}
          {!loading &&
            actualarray.map((item, i) => {
              return (
                <SwiperSlide className=" p-4" key={i}>
                  <Itemschema
                    item={item}
                    modifyarraylikedelement={modifyarraylikedelement}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Popularchoices;
