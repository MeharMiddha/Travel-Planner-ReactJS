import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const PlaceCardItem = ({ place }) => {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.name} target='_blank'>
    <div className="border rounded-xl p-3 mt-2 flex flex-wrap gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer xl:flex-nowrap">
      <img
        src="/place.jpg"
        alt=""
        className="xl:w-[130px] xl:h-[130px] rounded-xl "
      />
      <div>
        <h2 className="font-bold text-lg text-black">{place.name}</h2>
        <p className="text-sm text-gray-400">{place?.details}</p>
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <h2 className="mt-2 text-black">⏱️ {place?.time_to_travel}</h2>
                <p className="text-sm text-blue-400">💵 Entry Price: {place?.ticket_pricing}</p>
            </div>
            <Button size="sm"><FaMapLocationDot /></Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PlaceCardItem;
