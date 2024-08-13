import { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
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

export default function Form() {
  const { cities, addCity } = useCities();
  const [latitude, longitude] = useLocation();
  const [fetchedCity, setFetchedCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCity() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();

        if (!data.countryName) {
          throw new Error("Something went wrong");
        }

        setFetchedCity(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCity();
  }, [latitude, longitude]);

  const { countryName, countryCode, city } = fetchedCity;

  async function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      id: cities.length + 1,
      countryName,
      cityName: city,
      countryCode,
      notes,
      date,
      position: { lat: latitude, lng: longitude },
    };
    await addCity(newCity);
    navigate("/app/cities");
  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row__container">
        <label htmlFor="cityName">City name</label>
        <input id="cityName" value={city} disabled={true} />
        {countryCode && (
          <span>{flagemojiToPNG(getFlagEmoji(countryCode))}</span>
        )}
      </div>

      <div className="row__container">
        <label htmlFor="date">
          When did you go to {city}, {countryName}?
        </label>

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="row__container">
        <label htmlFor="notes">Notes about your trip to {city}..</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="form__buttons">
        <button className="btn">Add</button>
        <button className="btn btn-back" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
      </div>
    </form>
  );
}
