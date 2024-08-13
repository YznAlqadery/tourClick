import { Link, useParams } from "react-router-dom";
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

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function City() {
  const { getCityById } = useCities();
  const { id } = useParams();
  const currentCity = getCityById(parseInt(id));

  const { cityName, date, notes, countryCode } = currentCity;

  return (
    <div className="city">
      <div className="row__container">
        <h6>City name</h6>
        <h3>
          <span>
            {countryCode ? flagemojiToPNG(getFlagEmoji(countryCode)) : ""}{" "}
          </span>{" "}
          {cityName}
        </h3>
      </div>

      <div className="row__container">
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className="row__container">
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className="row__container">
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div className="city__btn-back">
        <Link to="/app/cities" className="btn">
          &larr; Back to cities
        </Link>
      </div>
    </div>
  );
}
