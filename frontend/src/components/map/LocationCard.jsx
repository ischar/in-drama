import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/actions/locationActions";

export default function LocationCard({ locationInfo }) {
  const locationDispatch = useDispatch();

  const handleCardClick = () => {
    locationDispatch(
      showModal({ isModalOpen: true, locationInfo: locationInfo })
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full pt-2 border-b-0.5 hover:bg-gray-100 active:bg-dark-element-yellow hover:bg-opacity-65 active:bg-opacity-85"
    >
      <div className="mx-4 w-11/12 h-full border-gray-500 border-b-0.5">
        <p className="font-Mediuml ">{locationInfo.placeName}</p>
        <p className="font-normal pb-2 text-sm text-gray-500">
          {locationInfo.location}
        </p>
      </div>
    </div>
  );
}
