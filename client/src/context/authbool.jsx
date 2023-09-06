import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const Authbool = createContext();

const AuthboolProvider = (props) => {
  const [authbool, setauthbool] = useState(false);
  const handleauthbool = async () => {
    try {
      const response = await axios.get("http://localhost:5000/loginbool", {
        withCredentials: true,
      });
      console.log("bool from backend", response.data);
      setauthbool(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleauthbool();
  }, [authbool]);
  return (
    <Authbool.Provider value={{ authbool, handleauthbool }}>
      {
        // eslint-disable-next-line react/prop-types
        props.children
      }
    </Authbool.Provider>
  );
};

export default AuthboolProvider;
