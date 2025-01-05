/* eslint-disable */
import { useParams } from "react-router-dom";
import { API } from "../utils/config";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/search/Searchbar";
import Map from "../components/map/Map";
import Infowindow from "../components/map/InfoWindow";
import Modal from "../components/common/Modal";

export default function SearchResult() {
  const [locationInfos, setLocationInfos] = useState();
  const { isModalOpen, location } = useSelector((state) => state.location);
  const { dramaName } = useParams();

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
      <Modal isOpen={isModalOpen}>{location}</Modal>
      <div className="flex flex-row w-full h-full">
        {locationInfos ? (
          <>
            <div className="absolute z-40 right-12 top-32 w-96 h-10">
              <Searchbar />
            </div>
            <div className="h-full w-full dark:bg-dark dark:opacity-85">
              <Map locationInfos={locationInfos} />
            </div>
            <Infowindow
              locationInfos={locationInfos}
            />
          </>
        ) : (
          <p>로딩중입니다...</p>
        )}
      </div>
    </div>
  );
}
