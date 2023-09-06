import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets/contact.jpg";
import {
  faCommentDots,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const callinfo = [
    {
      icon: faPhone,
      titre: "chat",
      number: "05 41 7917 61",
      button: "chat",
    },
    {
      icon: faCommentDots,
      titre: "call",
      number: "021 12 12 09",
      button: "call",
    },
    {
      icon: faCommentDots,
      titre: "video call",
      number: "07 93 50 99 51",
      button: "video call",
    },
    {
      icon: faMessage,
      titre: "message",
      number: "06 56 27 99 16",
      button: "message",
    },
  ];
  return (
    <div className=" w-[95%]  flex-wrap mx-auto flex place-content-center items-center ">
      <div className=" w-[600px] ">
        <p className=" text-2xl text-orange-500 capitalize font-semibold m-2">
          our contact
        </p>
        <p className=" text-3xl text-blue-950 capitalize font-bold m-2">
          easy to contact us
        </p>
        <p className=" text-gray-500 mx-2 my-5">
          We always ready to help by providijng the best services for you.{" "}
          <br /> We beleive a good blace to live can make your life better
        </p>
        <div className=" flex flex-wrap gap-6 place-content-center m-2">
          {callinfo.map((item, i) => {
            return (
              <div
                key={i}
                className=" hover:scale-[1.15] hover:shadow-blue-100 hover:shadow-lg rounded-md transition-all border-gray-200 border h-[140px] p-2 flex flex-col place-content-around w-[80%] sm:w-[280px]"
              >
                <div className=" flex ml-2">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className=" text-blue-500 bg-blue-100 p-4 rounded-md"
                  />
                  <div className=" ml-4">
                    <p className=" text-black text-2xl capitalize font-semibold">
                      {item.titre}
                    </p>
                    <p className=" text-gray-400">{item.number} </p>
                  </div>
                </div>
                <button className=" h-[40px] hover:bg-gradient-to-tl from-blue-600 from-50% to-blue-400 hover:text-white hover:scale-[0.90] duration-[.5s] transition-all capitalize font-semibold text-lg rounded-md mx-auto text-blue-500 bg-blue-100 w-[250px]">
                  {item.button} now
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-[290px] sm:w-[450px] h-[550px] sm:ml-10">
        <img
          src={image}
          alt=""
          className=" rounded-t-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;

//
