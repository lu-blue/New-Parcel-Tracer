// Internal Packages
import Image from "../assets/parcel.jpeg";
import ParcelDetails from "../components/ParcelDetails";
import { Map } from "../components/Map";

export default function ParcelItem({ prop }) {
  const { parcel_id, status, sender, eta, location_coordinate_latitude,
    location_coordinate_longitude } = prop;

  return (
    <div className="grid">
      <Map className="map"
    latitude={location_coordinate_latitude}
    longitude={location_coordinate_longitude}
  />
      

      <div className="text">
        <hr />
        <h2>PARCEL ID: {parcel_id}</h2>
        <span className="status">STATUS: {status}</span>
        <p>SENDER: {sender}</p>
        <p>
          EXPECTED DELIVERY TIME:
          <br />
          {eta}
        </p>
        <hr />
        <ParcelDetails parcel={prop} />
      </div>
    </div>
  );
}
