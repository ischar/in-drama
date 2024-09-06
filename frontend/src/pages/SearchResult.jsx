/* eslint-disable */
import { useParams } from "react-router-dom";
import { API } from "../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import Map from "../components/Map";
import Infowindow from "../components/InfoWindow";
import Modal from "../components/Modal";

export default function SearchResult() {
  const [locationInfos, setLocationInfos] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { dramaName } = useParams();

  const handleLocationClick = (data) => {
    openModal();
  }

  useEffect(() => {
    axios
      .get(`${API.SEARCH}/${dramaName}`)
      .then((res) => {
        setLocationInfos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {location}
        </Modal>
        {locationInfos ? (
          <>
            <div className="absolute z-50 right-12 top-32 w-96 h-10">
              <Searchbar />
            </div>
            <div className="h-full w-full dark:bg-dark dark:opacity-85">
            <Map locationInfos={locationInfos} />

            </div>
            <Infowindow locationInfos={locationInfos} onLocationClick={handleLocationClick} />
          </>
        ) : (
          <p>로딩중입니다...</p>
        )}
      </div>
    </div>
  );
}
