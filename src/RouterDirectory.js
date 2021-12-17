// start to copy here
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import Ubud from './Ubud'

const RouterDirectory = () => {
  return (

    <BrowserRouter>
      <Routes>
              <Route path="/" element={<App />} />
              <Route path='/ubud' element={<Ubud />} />
      </Routes>
    </BrowserRouter>

  );
};

export default RouterDirectory;