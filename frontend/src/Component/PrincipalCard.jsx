import React from "react";
import DrIyi from '../Assets/Images/Dr-Iyi.jpg'
import DrAbiodun from '../Assets/Images/Dr-Abiodun.png'
import MsShola from '../Assets/Images/Ms-Shola.jpeg'

const PrincipalCard = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="flex flex-col md:flex-row flex-wrap   gap-x-8 gap-y-8 justify-between">
        <div className="w-full md:w-72 pb-6 shadow-md hover:shadow-lg">
          <img className="w-full h-72 object-cover" src={DrIyi} alt="profile-image" />

          <div className="p-4 space-y-4">
            <p className="text-xl font-semibold">Dr. Iyi Uwadiae</p>
            <p className="text-gray-500">CHAIRMAN GOVERNING COUNCIL</p>
          </div>
        </div>
        <div className="w-full md:w-72 pb-6 shadow-md hover:shadow-lg">
          <img className="w-full h-72 object-cover" src={DrAbiodun} alt="profile-image" />

          <div className="p-4 space-y-4">
            <p className="text-xl font-semibold">Dr. Iyi Uwadiae</p>
            <p className="text-gray-500">CHAIRMAN GOVERNING COUNCIL</p>
          </div>
        </div>
        <div className="w-full md:w-72 pb-6 shadow-md hover:shadow-lg">
          <img className="w-full h-72 object-cover" src={MsShola} alt="profile-image" />

          <div className="p-4 space-y-4">
            <p className="text-xl font-semibold">Ms Shola Fatoye</p>
            <p className="text-gray-500">REGISTRAR </p>
          </div>
        </div>
      </section>

      <button className="px-4 py-2 rounded-md bg-primary hover:bg-opacity-85 text-white my-10">See More</button>
    </div>
  );
};

export default PrincipalCard;
