import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loading from "./components/shared/Loading/Loading";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { IntlProvider } from "react-intl";
import Profile from "./pages/Profile/Profile";
// import { translate } from "./translation/translate";
// import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

function App() {
  // const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <IntlProvider>
          <ScrollToTop />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
