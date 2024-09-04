/* eslint-disable */
import { useParams } from "react-router-dom";
import { API } from "../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import Map from "../components/Map";
import Infowindow from "../components/InfoWindow";

export default function SearchResult() {
  const [locationInfos, setLocationInfos] = useState();

  const { dramaName } = useParams();
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
        {locationInfos ? (
          <>
            <div className="absolute z-50 right-32 top-32 w-96 h-10">
              <Searchbar />
            </div>
            <Infowindow locationInfos={locationInfos} />
            <Map locationInfos={locationInfos} />
          </>
        ) : (
          <p>로딩중입니다...</p>
        )}
      </div>
    </div>
  );
}
