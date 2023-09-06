import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { Authbool } from "../context/authbool";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "@mantine/core";

// eslint-disable-next-line react/prop-types
const Navbar = ({ reference }) => {
  const { handleauthbool } = useContext(Authbool);
  const navigateTo = useNavigate();
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const handlelogout = async () => {
    try {
      const response = await axios.post("http://localhost:5000/logout", null, {
        withCredentials: true,
      });
      console.log(response.data);
      handleauthbool();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        ref={reference}
        className=" flex flex-wrap sm:flex-row bg-navblack flex-col items-center sm:place-content-between   sm:pb-0 pb-14"
      >
        <Link to="/">
          <label htmlFor="" className=" cursor-pointer z-20 ">
            <img src={logo} alt="" width={100} className=" m-5" />
          </label>
        </Link>
        <ul className=" z-30 flex flex-col  sm:flex-row  sm:w-[600px] place-content-evenly items-center">
          <Link to="/properties">
            <li className="  sm:my-0 my-5 cursor-pointer text-3xl sm:text-base text-gray-200 capitalize">
              properites
            </li>
          </Link>
          <li className="sm:my-0 my-5 cursor-pointer text-3xl sm:text-base text-gray-200 capitalize">
            contact us
          </li>

          <li
            onClick={() => {
              if (isAuthenticated) {
                navigateTo("/mylist");
              } else {
                toast.error(" loggin first!", {
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
            className=" sm:my-0 my-5 cursor-pointer text-3xl sm:text-base text-gray-200 capitalize"
          >
            my list
          </li>
          <li className=" capitalize">
            {isAuthenticated && (
              <>
                <Menu trigger="hover" shadow="xl" width={140}>
                  <Menu.Target>
                    <img
                      src={user.picture}
                      alt=""
                      className=" rounded-full w-12 cursor-pointer"
                    />
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Label>user info</Menu.Label>
                    <Menu.Item>{user.name}</Menu.Item>
                    <Menu.Item>
                      <button
                        onClick={() => {
                          handlelogout();
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          });
                        }}
                        className=" sm:my-0 my-5 text-white bg-gradient-to-tl from-blue-600 from-50% to-blue-400  h-10 w-20 rounded-md"
                      >
                        log out
                      </button>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </>
            )}
            {!isAuthenticated && (
              <button
                onClick={loginWithRedirect}
                className="sm:my-0 my-5 bg-gradient-to-tl from-blue-600 from-50% to-blue-400  h-10 w-20 rounded-md"
              >
                log in
              </button>
            )}
          </li>
        </ul>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navbar;
