import { useCities } from "../context/CitiesContext";
import Country from "./Country";

export default function CountryList() {
  const { cities } = useCities();
  const countries = cities.map((city) => city.countryName);

  return (
    <ul className="country__list">
      {Array.from(new Set(countries)).map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </ul>
  );
}
