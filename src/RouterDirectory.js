// start to copy here
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import Ubud from './pages/Ubud'
import Denpasar from "./pages/Denpasar";
import Kuta from "./pages/Kuta";


const RouterDirectory = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/ubud' element={<Ubud />} />
        <Route path='/denpasar' element={<Denpasar />} />
        <Route path='/kuta' element={<Kuta />} />
      </Routes>
    </BrowserRouter>

  );
};

export default RouterDirectory;