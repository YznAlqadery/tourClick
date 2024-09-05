import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import AppLayout from "./layout/AppLayout";
*/
import CityList from "./components/CityList";
import Form from "./components/Form";
import City from "./components/City";
import CountryList from "./components/CountryList";
import Spinner from "./components/Spinner";
import { CitiesProvider } from "./context/CitiesContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const AppLayout = lazy(() => import("./layout/AppLayout"));

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
