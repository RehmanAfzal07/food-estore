import React, { useState } from "react";
import './Login.css'


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here, e.g., login logic
    // For this example, we'll just log the data to the console.
    console.log("Phone Number:", phoneNumber);
    console.log("Address:", address);
  };

  return (
    <div className="container mt-5" >
        <LocationFinder />
      <form onSubmit={handleSubmit}>
      <div className="form-group "> 
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
       
      </div>
      
      <div className="loginButton">
      <button type="submit" className="btn btn-danger">
        Log In
      </button>
      
    
      
      </div>
    
     
      
    </form>
    </div>
  );
};

export default Login;









const LocationFinder = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);
  

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
          fetchAddress(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError("Error getting geolocation: " + error.message);
        }
      );
    } else {
      setError("Geolocation is not available in this browser.");
    }
  };

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setAddress(data.results[0].formatted_address);
      } else {
        setAddress("");
        setError("Unable to fetch address.");
      }
    } catch (error) {
      setAddress("");
      setError("Error fetching address: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={getLocation}>Find Location</button>
      {error && <p>{error}</p>}
      {latitude && longitude && (
        <p>
        
          Your Location: Latitude {latitude.toFixed(6)}, Longitude {longitude.toFixed(6)}
        </p>
      )}
      {address && <p>Address: {address} </p>}
    </div>
  );
};



