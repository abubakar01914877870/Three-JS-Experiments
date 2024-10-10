import { createContext, useContext, useEffect, useState } from "react";
const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [locationData, setLocationData] = useState(null);
  const [stateCode, setStateCode] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        if (!process.env.FETCH_LOCATION) {
          return;
        }
        const response = await fetch("/api/location");
        const data = await response.json();

        if (response.status === 200) {
          setLocationData(data.location);
          setStateCode(data.location.isoCode);
        } else {
          throw new Error("Failed to get location");
        }
      } catch (error) {
        setLocationData(null);
      }
    };

    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ locationData, stateCode }}>
      {children}
    </LocationContext.Provider>
  );
};
