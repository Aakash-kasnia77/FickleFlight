import React from "react";
import BgPicsa from "../Images/BannerBackground.png"

interface HeadingProps {
  title: string;
  count: number;
};


const Heading: React.FC<HeadingProps> = ({ title, count }) => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url( ${BgPicsa} ) , linear-gradient(to right, #114F8B, #2A9AD7) `,
        }}>
        <h1 className="text-6xl font-bold text-white mt-8" >Let's explore & travel the world</h1>
        <h1 className="text-2xl font-bold text-white mt-2" >Find the best destinations and the most popular stays!</h1>

        <div className="flex flex-col bg-white items-center w-3/4 border-2 p-2 mt-8 pb-4">
          <div className="flex justify-between w-full">
            <p className="text-lg ml-4">SEARCH FLIGHTS</p>
            <div className="flex space-x-4 mr-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="tripType" value="Return" className="h-5 w-5 text-blue-600" />
                <span className="text-lg">Return</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="tripType" value="One-way" defaultChecked className="h-5 w-5 text-blue-600" />
                <span className="text-lg">One-way</span>
              </label>
            </div>
          </div>

          <div className="flex space-x-2 mt-4 w-full">
            <div className="relative  w-full ">
              <label
                htmlFor="departure"
                className="absolute text-xs text-gray-1000 left-3 top-2 transform -translate-y-1/2 bg-white px-1"
              >
                Departure
              </label>
              <input
                id="departure"
                type="text"
                // placeholder=" "
                className="w-full border-2 border-gray-800 rounded focus:outline-none focus:ring-0 text-sm mt-2 pt-3 pb-1 px-3"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="departure"
                className="absolute text-xs text-gray-1000 left-3 top-2 transform -translate-y-1/2 bg-white px-1"
              >
                Arrival
              </label>
              <input
                id="departure"
                type="text"
                // placeholder=" "
                className="w-full border-2 border-gray-800 rounded focus:outline-none focus:ring-0 text-sm mt-2 pt-3 pb-1 px-3"
              />
            </div>
            <div className="relative w-full">
              <label
                htmlFor="dateInput"
                className="absolute text-xs text-gray-1000 left-3 top-2 transform -translate-y-1/2 bg-white px-1"
              >
                Date
              </label>
              <input
                id="dateInput"
                type="date"
                placeholder=" asffa"
                className="w-full border-2 border-gray-800 rounded focus:outline-none focus:ring-0 text-sm mt-2 pt-3 pb-1 px-3"
              />
            </div>
              <button
               className="bg-orange-500 mt-2 rounded-lg h-10 w-1/2 hover:bg-orange-600 hover:text-white"
               >Search Flights</button>

          </div>

        </div >
      </div >
    </>
  );
};

export default Heading;