import Navbar from "../components/Navbar";

export default function ProductPage() {
  return (
    <section className="product__section">
      <Navbar />
      <div className="container">
        <div className="product__page">
          <h1>Discover Your World, One Click at a Time</h1>
          <p>
            Welcome to the ultimate travel companion for every explorer. Our
            interactive web application transforms the way you document and
            relive your adventures. With a user-friendly map interface, you can
            effortlessly chart your travels, capture memories, and visualize
            your journey across the globe.
          </p>
          <h3>Key Features:</h3>
          <ul className="features">
            <li className="feature">
              <strong>Interactive Map Library: </strong> Explore a dynamic map
              where every city you’ve visited is just a click away. This
              interactive experience makes it easy to pinpoint locations and add
              your travel experiences.
            </li>
            <li className="feature">
              <strong>Personalized Travel Log: </strong> Click on any city and a
              detailed form will open, allowing you to enter descriptions,
              photos, and other details about your trip. This information is
              stored securely, creating a unique travel diary that’s always
              accessible.
            </li>
            <li className="feature">
              <strong>Track Your Journeys: </strong> Want to know how many
              countries you’ve visited? Our application automatically tracks
              your travels, giving you a clear view of the number of countries
              you&aspos;ve explored.
            </li>
            <li className="feature">
              <strong> Easy Access and Management: </strong>
              Review your past trips, update details, and see how your travel
              map evolves over time. Your travel history is just a click away,
              making it simple to reflect on past adventures or plan new ones.
            </li>
          </ul>
          <h3>Why Choose Us?</h3>
          <p>
            Our application is more than just a travel log; it’s a way to
            connect with your journey. Whether you’re a seasoned traveler or
            just getting started, our platform is designed to grow with you,
            capturing the essence of each trip and helping you visualize your
            global footprint. Start your adventure today. Your journey is
            unique—let’s make it unforgettable!
          </p>
        </div>
      </div>
    </section>
  );
}
