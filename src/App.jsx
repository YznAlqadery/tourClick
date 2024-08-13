import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import AppLayout from "./layout/AppLayout";
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";
import CountryList from "./components/CountryList";
import { CitiesProvider } from "./context/CitiesContext";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="city/:id" element={<City />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
