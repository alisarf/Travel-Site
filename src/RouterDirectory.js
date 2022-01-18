// start to copy here
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import Ubud from './pages/Ubud'
import Denpasar from "./pages/Denpasar";
import Kuta from "./pages/Kuta";
import Favorites from "./pages/Favorites";

import {useLocation} from 'react-router-dom';

const RouterDirectory = (props) => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path='/ubud' element={<Ubud />} />
        <Route path='/denpasar' element={<Denpasar />} />
        <Route path='/kuta' element={<Kuta/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default RouterDirectory;