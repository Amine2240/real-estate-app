import "./App.css";
import Landingpage from "./pages/landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signin from "./pages/signin";
import "./App.css";
import Properties from "./pages/properties";
import Mylist from "./pages/mylist";
import Detailspage from "./pages/detailspage";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/mylist" element={<Mylist />} />
          <Route path="/details/:propertyid" element={<Detailspage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
