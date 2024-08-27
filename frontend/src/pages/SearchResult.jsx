/* eslint-disable */
import { useParams } from "react-router-dom";
import { API } from "../utils/config";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "../components/Searchbar";
import Map from "../components/Map";

export default function SearchResult() {
  const [locations, setLocations] = useState();

  const { dramaName } = useParams();
  useEffect(() => {
    axios
      .get(`${API.SEARCH}/${dramaName}`)
      .then((res) => {
        setLocations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full">
      <Searchbar />
      <Map locations={locations} />
    </div>
  );
}