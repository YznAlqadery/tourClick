import { createContext, useContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useLocalStorageState([], "cities");

  function getCityById(id) {
    return cities.find((city) => city.id === id);
  }

  function addCity(city) {
    setCities((cities) => [...cities, city]);
  }
  function deleteCity(id) {
    setCities(cities.filter((city) => city.id !== id));
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        addCity,
        deleteCity,
        getCityById,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
