import { Link } from "react-router-dom";
import { useCities } from "../context/CitiesContext";

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const flagemojiToPNG = (flag) => {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export default function CityItem({ city }) {
  const { id, position } = city;
  const { deleteCity } = useCities();
  return (
    <li className="city__item">
      <Link
        to={`/app/city/${id}?lat=${position.lat}&lng=${position.lng}`}
        className="city__link"
      >
        <span>{city.id}</span>
        <h3>{city.cityName}</h3>

        <span>{flagemojiToPNG(getFlagEmoji(city.countryCode))}</span>
      </Link>
      <button onClick={() => deleteCity(id)}>&#10005;</button>
    </li>
  );
}
