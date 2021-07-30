// NPM Packages
import React from "react";
import { useState } from "react";

export default function ParcelDetails({ parcel }) {
  const [readMore, setReadMore] = useState(false);

  const {
    parcel_id,
    sender,
    user_name,
    location_name,
    eta,
    status,
    last_updated,
    notes,
    location_status_ok,
    verification_required,
  } = parcel;

  const extraContent = (
    <section className="AllDetails">
      <article className="text-details">
        <br />
        <h3 className="details-h3">PARCEL ID: {parcel_id}</h3>

        <div>
          <span>FROM: {sender}</span>
          <p>TO: {user_name}</p>
          <p>STATUS: {status}</p>
          <br />
          <p>ETA: {eta}</p>
          <p>PICK-UP LOCATION: {location_name}</p>
          <p>
            LOCATION STATUS: {" "}
            {location_status_ok === false ? "Under review" : "Approved"}
          </p>
          <p>
            AT PICK-IP: {" "}
            {verification_required === false ? "No ID required" : "ID required"}
          </p>
          <br />

          <p>LAST UPDATED: {last_updated}</p>
          <p>NOTES: {notes === null ? "N/A" : notes}</p>

         
        </div>
      </article>
    </section>
  );

  const linkName = readMore ? "View Less" : "View More";

  return (
    <div className="More">
      <button
        className="read-more-button"
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h3>{linkName}</h3>
      </button>
      {readMore && extraContent}
      {/* <hr /> */}
    </div>
  );
}