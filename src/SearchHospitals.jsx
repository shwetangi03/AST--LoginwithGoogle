import React, { useEffect, useState } from "react";

const SearchHospitals = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [geoInfo, setGeoInfo] = useState({});

  useEffect(() => {
    getVisitorIp();
  }, []);

  const getVisitorIp = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error(`some thing went wrong ${error}`);
    }
  };

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const fetchIpInfo = async () => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
      const data = await response.json();
      setGeoInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>IP location</h3>
      <div>
        <input type="text" value={ipAddress} onChange={handleInputChange} />
        <button onClick={fetchIpInfo}>Get Info</button>
      </div>

      {geoInfo.country && (
        <div>
          <strong>Country:</strong>
          {geoInfo.country} ({geoInfo.countryCode}) <br />
          <strong>Region:</strong>
          {geoInfo.regionName} <br />
          <strong>City:</strong>
          {geoInfo.city} <br />
          <strong>Zip:</strong>
          {geoInfo.zip} <br />
          <strong>Latitude:</strong>
          {geoInfo.lat} <br />
          <strong>Organization:</strong>
          {geoInfo.org} <br />
          <strong>IP:</strong>
          {geoInfo.query} <br />
        </div>
      )}
    </div>
  );
};

export default SearchHospitals;
