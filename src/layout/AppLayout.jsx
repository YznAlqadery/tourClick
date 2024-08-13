import Map from "../components/Map";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <section className="app__section">
      <div className="container">
        <div className="app__layout">
          <Sidebar />
          <Map />
        </div>
      </div>
    </section>
  );
}
