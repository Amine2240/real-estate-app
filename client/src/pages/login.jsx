import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Authbool } from "../context/authbool";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { handleauthbool } = useContext(Authbool);
  const navigateTo = useNavigate();
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [response, setresponse] = useState({});
  const [seepassword, setseepassword] = useState(false);
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", logindata, {
        withCredentials: true,
      });

      setresponse(res.data);
      if (!res.data.error) {
        //

        toast.success(" logged in successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigateTo("/");
      }
      handleauthbool();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" h-[100vh] bg-black flex place-content-center items-center text-black">
        <form
          className=" bg-white rounded-md p-5 h-[500px] flex flex-col place-content-evenly w-[400px]"
          onSubmit={handlelogin}
        >
          <p className=" text-center text-red-400 capitalize font-medium">
            {response.error}
          </p>
          <p className=" capitalize text-center font-medium text-xl">welcome</p>
          <p className=" text-center">Log in to continue to real estate</p>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
            className=" outline-blue-600  p-5 border-2 border-gray-300 rounded-md h-14 w-full"
            onChange={(event) => {
              setlogindata({ ...logindata, email: event.target.value });
            }}
          />
          <div className=" relative">
            <input
              type={seepassword ? "text" : "password"}
              required
              placeholder="Password"
              name="password"
              className=" outline-blue-600 p-5 border-2 border-gray-300 rounded-md h-14 w-full"
              onChange={(event) => {
                setlogindata({ ...logindata, password: event.target.value });
              }}
            />
            {!seepassword && (
              <FontAwesomeIcon
                icon={faEye}
                className=" absolute right-0 rounded-lg top-[1px] text-blue-500 hover:bg-blue-500 transition-all cursor-pointer hover:text-white px-4 py-[19px]"
                onClick={() => {
                  setseepassword(!seepassword);
                }}
              />
            )}
            {seepassword && (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className=" absolute right-0 rounded-lg top-[1px] text-blue-500 hover:bg-blue-500 transition-all cursor-pointer hover:text-white px-4 py-[19px]"
                onClick={() => {
                  setseepassword(!seepassword);
                }}
              />
            )}
          </div>
          <input
            type="password"
            required
            name="confirmpassword"
            placeholder="Confirm Password"
            className=" outline-blue-600 p-5 border-2 border-gray-300 rounded-md h-14 w-full"
            onChange={(event) => {
              setlogindata({
                ...logindata,
                confirmpassword: event.target.value,
              });
            }}
          />
          <p className=" text-blue-600 font-semibold text-start text-xl">
            Forget password?
          </p>
          <button
            type="submit"
            className=" w-full h-[50px] rounded-md  bg-blue-600 text-white font-semibold text-xl capitalize"
          >
            log in
          </button>
          <p className=" text-lg font-semibold">
            dont have an account?{" "}
            <Link to="/signin">
              <span className=" text-blue-600 font-semibold text-start">
                Sign up{" "}
              </span>{" "}
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
