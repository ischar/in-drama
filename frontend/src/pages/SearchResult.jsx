/* eslint-disable */
import { useParams } from "react-router-dom";
import { API } from "../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/search/Searchbar";
import Map from "../components/map/Map";
import Infowindow from "../components/map/InfoWindow";
import Modal from "../components/Modal";

export default function SearchResult() {
  const [locationInfos, setLocationInfos] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState("");
  const { dramaName } = useParams();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLocationClick = (data) => {
    openModal();
  };

  useEffect(() => {
    axios
      .get(`${API.SEARCH}/${dramaName}`)
      .then((res) => {
        setLocationInfos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dramaName]);

  return (
    <div className="w-full h-full">
      <Modal isOpen={isModalOpen} />
      <div className="flex flex-row w-full h-full">
        {locationInfos ? (
          <>
            <div className="absolute z-50 right-12 top-32 w-96 h-10">
              <Searchbar />
            </div>
            <div className="h-full w-full dark:bg-dark dark:opacity-85">
              <Map locationInfos={locationInfos} />
            </div>
            <Infowindow
              locationInfos={locationInfos}
              onLocationClick={handleLocationClick}
            />
          </>
        ) : (
          <p>로딩중입니다...</p>
        )}
      </div>
    </div>
  );
}
