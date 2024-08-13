import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <section className="about__section">
      <Navbar />
      <div className="container">
        <div className="about__page">
          <h1>About Our Application</h1>
          <p>
            Welcome to our interactive travel journal, designed to turn your
            globetrotting adventures into a personal map of memories. Our web
            application features an intuitive map library that lets you explore
            the world with just a click. Select any city on the map, and a
            detailed form will open up, inviting you to share your experiences,
            stories, and memories from that destination. Once you&aspos;ve added
            your travel details, the application securely stores your entries,
            creating a rich, personalized log of your journeys. Over time, you
            can see the countries you&aspos;ve visited, providing a visual
            representation of your adventures. Whether youre a frequent traveler
            or an occasional explorer, our application helps you keep track of
            your experiences and inspires you to discover new places. Start
            mapping your world today and watch your travel stories come to life!
          </p>
        </div>
      </div>
    </section>
  );
}
