import React, { useState } from "react";

//Custom SCSS
import "./css/style.css";
import "./css/utilities/reset.css";
import "./css/general.css";

//Page Template for Async
import PageTemplate from "./pages/PageTemplate";

//Custom Components
import {
  FeatureCards,
  HeadBanner,
  Footer,
  TitleHead,
  IntroBanner,
  Split_Img_Card,
  FeatureDestinations,
  Feedback,
  DivideSolidSection,
} from "./material-ui/Index_Comp";

//MUI Components
import {
  Typography,
  Button,
  Paper,
  TextField,
  Pagination,
  Card,
  Backdrop,
} from "@mui/material";

//Image Banner
import ImgBanner from "./assets/images/kuta/Kuta-Beach.jpg";
//Image Paths for Cards
import imagesArr from "./assets/content/mainFeature.json";
//Import Content
import content from "./assets/content/content.json";

//May add these back in later - don't want to forget so not deleting
//import RadioGroupRating from "./material-ui/rating";
//import Video from "./assets/images/bali/culture.mp4";
//import VideoBanner from "./material-ui/VideoBanner";
//import palm_leaf from "./assets/images/media/palm/palm_leaf.svg";
//import this_img from "./assets/images/ubud/ubud-people.jpg";

function App() {
  const ftArr = [
    { title: "People", url: "ubud-people.jpg" },
    { title: "Rice Field", url: "ubud-rice.jpg" },
    { title: "Swing over Fields", url: "ubud-swing.jpg" },
    { title: "Rice Field", url: "ubud-jungle.jpg" },
  ];

  //---Feature Images with Pagination UI---
  //Feature Image Arr with pagination:
  //get 'images' object
  const featImgArr = imagesArr.images;

  //Img Array Range
  const [start, setStart] = useState([0]);
  const [end, setEnd] = useState([3]);
  //Handle new page click
  function pageChange(e, value) {
    //value = page count
    let starter = (value - 1) * 3;
    let ending = starter + 3;
    setStart(starter);
    setEnd(ending);
  }

  const data = JSON.parse(localStorage.getItem("data")) || "";
  const [elem, setElem] = useState(data);

  //Active Location
  const [destination, setDestination] = useState();

  /** Feature Destination Hook **/
  //format 'content' obj for the FeatureDestination hook 'arr' input
  var ftDestArr = [];
  function getKeys() {
    for (const location in content) {
      let imageUrl = content[location].general.imageUrl;
      let pathUrl = location;
      ftDestArr = [
        ...ftDestArr,
        { title: location, imageUrl: imageUrl, pathUrl: pathUrl },
      ];
    }
  }
  getKeys();

  return (
    <main>
      <HeadBanner title="Adventure!" image={ImgBanner} elem={elem} />
      <IntroBanner image={ImgBanner} />
      {destination ? (
        <PageTemplate city={destination} />
      ) : (
        <div className="grid pt-30 w-full mx-auto mt-12">
          <TitleHead
            classNam="mt-16 mb-10"
            sx={{ marginTop: "4rem", marginBottom: "2.5rem" }}
            title="Featured Destinations"
            nav="articles"
          />
          <p className="text-center Work_sans mb-12">
            Find activites hosted by the locals.
          </p>
          <FeatureDestinations arr={ftDestArr} />

          <DivideSolidSection
            msg="Laborum Lorem et labore officia proident.Ut ullamco reprehenderit eiusmod ullamco.Amet proident commodo commodo tempor minim esse in est pariatur pariatur.Mollit consequat laborum adipisicing velit.Do veniam duis culpa commodo sunt sit ullamco sint cupidatat in exercitation enim.Lorem eiusmod consectetur minim proident."
            title="Consequat mollit fugiat ad"
          />

          {/**TODO: FIGURE OUT THE UI design 
          <Split_Img_Card
            imgArr={ftArr}
            header="Get Outside"
            subheader="Find activites hosted by the locals."
          />
        */}

          {/*<section className="grid m-auto gap-10 sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3">    
              {featImgArr.slice(start, end).map(image => (
                  <CardBuilder 
                    id= {image.id} 
                    image ={image.url} 
                    setElem={setElem} 
                    elem={elem} 
                    className="mx-auto h-full"
                  />
                ))}
              </section>
            <Pagination 
              className = "m-auto" 
              count={Math.ceil(featImgArr.length / 3)} 
              variant="outlined" color="primary"  
              onChange={pageChange}
            />
            */}
          <section className="m-auto w-full">
            {/*<img className=' m-auto rounded' src={cultureimage} alt="" />
            <VideoBanner 
              video = {Video}
              msg = 'Culture'
            />*/}
          </section>

          <div className="gap-10 pb-4 w-container m-auto">
            {/* default array needed for home page images*/}
            <TitleHead title="Things to do" nav="articles" />
            <FeatureCards
              location="denpasar"
              title="Featured Locations"
              subtitle="Explore the best locations within the southern region."
            />
          </div>
        </div>
      )}
      {/*
      <Typography 
        variant="h1" 
        className="text-center">
        Travel Bali
      </Typography>
      */}
      {/*    SIGNUP FORM
      <section className="flex flex-row m-auto Accent_Bg pt-12 pb-12 w-container rounded-2xl shadow-lg mb-12 md:mb-20">
        <div className="relative">
          <img src={halfdiv} className=" absolute w-40 h-100%"></img>
          <img src={signupGuy} className="w-40 h-40 z-10 relative"></img>
        </div>
        <div className=" m-auto items-center flex flex-col gap-y-4 ">
          <TitleHead title="Get the Latest News!" nav="signup" />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            className="flex-1"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            className="flex-2"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="flex-3"
          />
          <Button>Sign Up</Button>
        </div>
      </section>
      */}
      <DivideSolidSection
        msg="Exercitation cupidatat enim ad amet eu officia consectetur.Ullamco minim mollit cupidatat fugiat veniam esse labore labore velit eiusmod incididunt sit aliquip.Ea eu minim veniam ullamco dolore deserunt.Ex laboris qui labore velit enim sunt minim consectetur.Deserunt sunt eiusmod commodo laboris.Dolor mollit sint duis velit ea."
        title="Eu non fugiat et nisi excepteur"
      />
      <Feedback msg="How helpful was Globe Travel at planning your next trip?" />
      <Footer />
    </main>
  );
}

export default App;
