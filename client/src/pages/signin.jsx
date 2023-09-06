import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const navigateTo = useNavigate();
  const [signinform, setsigninform] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [response, setresponse] = useState({});
  const [seepassword, setseepassword] = useState(false);
  const submitsignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signin",
        signinform ,{withCredentials : true}
      );
      console.log("response", response.data);
      setresponse(response.data);
      if (!response.error) {
        navigateTo("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" h-[100vh] bg-black flex place-content-center items-center text-black">
        <form
          className=" bg-white rounded-md p-5 h-[500px] flex flex-col place-content-evenly w-[400px]"
          onSubmit={submitsignin}
        >
          <p className=" text-center text-red-400 capitalize font-medium">
            {response.error}
          </p>
          <p className=" capitalize text-center font-medium text-xl">welcome</p>
          <p className=" text-center">sign in to start to real estate</p>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
            value={signinform.email}
            className=" outline-blue-600  p-5 border-2 border-gray-300 rounded-md h-14 w-full"
            onChange={(event) => {
              setsigninform({ ...signinform, email: event.target.value });
            }}
          />
          <div className=" relative">
            <input
              type={seepassword ? "text" : "password"}
              required
              name="password"
              value={signinform.password}
              placeholder="Password"
              className=" outline-blue-600 p-5 border-2 border-gray-300 rounded-md h-14 w-full"
              onChange={(event) => {
                setsigninform({ ...signinform, password: event.target.value });
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
            value={signinform.confirmpassword}
            placeholder="Confirm Password"
            className=" outline-blue-600 p-5 border-2 border-gray-300 rounded-md h-14 w-full"
            onChange={(event) => {
              setsigninform({
                ...signinform,
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
            sign in
          </button>
          <p className=" text-lg font-semibold">
            already signed in?{" "}
            <Link to="/login">
              <span className=" text-blue-600 font-semibold text-start">
                log in{" "}
              </span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
