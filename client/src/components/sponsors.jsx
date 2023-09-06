import prologis from "../assets/prologis.png";
import tower from "../assets/tower.png";
import equinix from "../assets/equinix.png";
import realty from "../assets/realty.png";

const Sponsors = () => {
  const listimg = [prologis, tower, equinix, realty];
  return (
    <div className=" flex flex-wrap place-content-around m-10">
      {listimg.map((item) => {
        return (
          <>
            <img width={150} src={item} alt="" className=" object-contain" />
          </>
        );
      })}
    </div>
  );
};

export default Sponsors;
