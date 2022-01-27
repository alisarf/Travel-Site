// start to copy here
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
//import Ubud from './pages/oldPageSystem/Ubud'
//import Denpasar from "./pages/oldPageSystem/Denpasar";
//import Kuta from "./pages/oldPageSystem/Kuta";
import Favorites from "./pages/Favorites";
import PageTemplate from "./pages/PageTemplate";

import {useLocation} from 'react-router-dom';
import content from './assets/content/content.json'


const RouterDirectory = (props) => {
  //NEEDS TO READ THE LOCATIONS THAT ARE NEEDED BASED ON CONTENT.JSON

  //const potlocations = [{url : '/ubud', city: 'ubud'},{url : '/denpasar', city: 'denpasar' },{url : '/kuta', city: 'kuta'}]
  //GETS ALL LOCATIONS AND CREATES PAGES VIA PAGETEMPLATES
  const potlocal = []
  for(var i in content){
    potlocal.push(i)
  }
  console.log('potlocal = ' + JSON.stringify(potlocal))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        {potlocal.map(local => (
          <Route path= {"/" + local} element={<PageTemplate city = {local} />} />
        ))}
      </Routes>
    </BrowserRouter>

  );
};

export default RouterDirectory;