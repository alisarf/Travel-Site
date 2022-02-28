import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import Favorites from "./pages/Favorites";
import PageTemplate from "./pages/PageTemplate";
import content from './assets/content/content.json'
import ScrollToTop from "./material-ui/ScrollToTop";


const RouterDirectory = (props) => {
  //NEEDS TO READ THE LOCATIONS THAT ARE NEEDED BASED ON CONTENT.JSON

  //GETS ALL LOCATIONS AND CREATES PAGES VIA PAGETEMPLATES
  const potlocal = []
  for(var i in content){
    potlocal.push(i)
  }
  
  return (
    <BrowserRouter>
    <ScrollToTop/>
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