import { Link } from "react-router-dom";

export default function FrontPage() {
  return (
    <section className="front__page">
      <div className="container">
        <div className="front__page__content">
          <h1 className="title">
            You travel the world.
            <br />
            And we&apos;ll map it for you.
          </h1>
          <p className="subtitle">
            Map Your Adventures: A Detailed World Map That Tracks and Showcases
            Every City and Country You&apos;ve Visited, Creating a Visual Record
            of Your Global Journeys
          </p>
          <Link to="/app" className="btn">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
