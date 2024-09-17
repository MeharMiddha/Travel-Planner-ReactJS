import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

const PlaceCardItem = ({ place }) => {
  const [photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])
  const GetPlacePhoto=async()=>{
    const data={
      textQuery:place?.name
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.name} target='_blank'>
    <div className="border rounded-xl p-3 mt-2 flex flex-wrap gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer xl:flex-nowrap">
      <img
        src={photoUrl?photoUrl:"/place.jpg"}
        alt=""
        className="xl:w-[130px] xl:h-[130px] rounded-xl object-cover"
      />
      <div>
        <h2 className="font-bold text-lg text-black">{place?.name}</h2>
        <p className="text-sm text-gray-400">{place?.details}</p>
        <div className="flex justify-between">
            <div className="flex flex-col">
                <h2 className="mt-2 text-black">⏱️ {place?.time_to_travel}</h2>
            </div>
            <Button size="sm"><FaMapLocationDot /></Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PlaceCardItem;
