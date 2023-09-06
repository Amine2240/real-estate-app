const Getstarted = () => {
  return (
    <>
    <div className=" w-[72%] h-[230px] bg-blue-600 mx-auto rounded-lg flex flex-col place-content-evenly m-5 p-5">
      <p className=" text-center text-white capitalize font-bold text-3xl">
        get started with homyz
      </p>
      <p className=" text-center text-gray-300 text-lg">
        subscribe and find super attractive price quotes from us. <br />
        find your residence soon.{" "}
      </p>
      <button className=" capitalize text-white font-semibold border-2 border-white w-[150px] h-[40px] hover:scale-110 transition-all mx-auto rounded-lg bg-blue-700">
        get started
      </button>
    </div>
    <div className=" w-[85%] h-[1px] mx-auto bg-gray-300"></div>
    </>
  );
};

export default Getstarted;
