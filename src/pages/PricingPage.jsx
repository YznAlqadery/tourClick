import Navbar from "../components/Navbar";

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="pricing__content">
          <h1 className="plans__pricing">Plans & Pricing</h1>
          <p className="plans__subtitle">
            Whether your tracking needs are large or small, we&apos;re here to
            help you scale.{" "}
          </p>
          <div className="pricing__cards">
            <div className="pricing__card">
              <h2 className="plan">Free</h2>
              <p>For hobby projects or small teams.</p>
              <p className="price">Free forever</p>
              <button className="btn">Get started</button>
            </div>
            <div className="pricing__card">
              <h2 className="plan">Pro</h2>
              <p>For businesses looking to grow.</p>
              <p className="price">
                $9.99<span>/month</span>
              </p>
              <button className="btn">Get started</button>
            </div>
            <div className="pricing__card">
              <h2 className="plan">Enterprise</h2>
              <p>For businesses looking to grow.</p>
              <p className="price">
                $19.99<span>/month</span>
              </p>
              <button className="btn">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
