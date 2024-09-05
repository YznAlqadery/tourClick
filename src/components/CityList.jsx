import { useCities } from "../context/CitiesContext";
import CityItem from "./CityItem";

export default function CityList() {
  const { cities } = useCities();
  return (
    <ul className="city__list">
      {cities.length > 0 ? (
        cities.map((city) => <CityItem key={city.id} city={city} />)
      ) : (
        <p>No cities, start adding some!</p>
      )}
    </ul>
  );
}
