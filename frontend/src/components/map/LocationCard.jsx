import React, { useState } from 'react';

export default function LocationCard({ locationInfo }) {

  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div
      onClick={handleCardClick} 
      className="my-8 w-11/12 h-12 border-gray-500 border-b-0.5 hover:bg-dark-element-yellow active:bg-dark-element-yellow hover:bg-opacity-65 active:bg-opacity-85">
      <p className="font-medium ">{locationInfo.placeName}</p>
      <p className="font-normal text-gray-300">{locationInfo.location}</p>
    </div>
  );
}
