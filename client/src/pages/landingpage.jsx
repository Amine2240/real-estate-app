import Contact from "../components/contact";
import Getstarted from "../components/getstarted";
import Landingcomp from "../components/landingcomp";
import Ourvalue from "../components/ourvalue";
import Popularchoices from "../components/popularchoices";
import Sponsors from "../components/sponsors";

const Landingpage = () => {
  return (
    <>
      <Landingcomp /> 
      <Sponsors />
      <Popularchoices />
      <Ourvalue />
      <Contact />
      <Getstarted />
    </>
  );
};

export default Landingpage;
