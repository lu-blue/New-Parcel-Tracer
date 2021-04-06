export const Map = ({ longitude, latitude }) => {
  const ACCESS_TOKEN =
    "pk.eyJ1IjoibHUtYmx1ZSIsImEiOiJja240YXMxNmcwZmxuMndzOXlyNzM2aHg1In0.S6lw60PpX1ZNLjNUwsoyNQ";

  return (
    <img className="map"
      src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+555555(${longitude},${latitude})/${longitude},${latitude},8.71,0/200x200?access_token=${ACCESS_TOKEN}`}
    />
  );
};
