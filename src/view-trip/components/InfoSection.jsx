import { Button } from "@/components/ui/button";
import React from "react";
import { RiShareForward2Line } from "react-icons/ri";

function InfoSection({ trip }) {
  return (
    <div>
      <img
        src="/placeholder.jpg"
        alt=""
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="text-gray-500 p-1 px-3 bg-gray-200 rounded-full">
              🗓️ {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className="text-gray-500 p-1 px-3 bg-gray-200 rounded-full">
              💸 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="text-gray-500 p-1 px-3 bg-gray-200 rounded-full">
              🥂 Traveler: {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button><RiShareForward2Line /></Button>
      </div>
    </div>
  );
}

export default InfoSection;
