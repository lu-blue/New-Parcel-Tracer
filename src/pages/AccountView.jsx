import React, { useState, useEffect } from "react";
import axios from "axios";

import ParcelItem from "../components/ParcelItem";

export default function AccountView() {
  const [parcels, setParcels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredParcels, setFilteredParcels] = useState([]);
  const [sortKey, setSortKey] = useState("eta");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://my.api.mockaroo.com/orders.json?key=e49e6840")
      .then((res) => {
        setParcels(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredParcels(
      parcels.filter((parcel) =>
        parcel.parcel_id.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, parcels]);

  if (loading) {
    return <p>Loading parcels...</p>;
  }

  const sortedResults = filteredParcels.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  return (
    <div className="search-text">
      <h1>Your Account</h1>
      <h2>Hi Jhon Doe, here are your parcels: </h2>

        <input className="search-box"
          type="text"
          placeholder="Enter parcel ID"
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Search options */}
      <section className="filter-box">
        Filter results by:<br /> 
        <button className="filter" onClick={() => setSortKey("eta")}>ETA</button>
        <button className="filter" onClick={() => setSortKey("status")}>Status</button>
      </section>
      
      {filteredParcels.map((item) => (
        <ParcelItem key={item.id} prop={item} />
      ))}

      
    </div>
  );
}
