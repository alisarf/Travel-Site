/**Template for Destinations Page that is built when user selects location in nav**/

import React, { useState } from "react";

import {
  Footer,
  FeatureCards,
  HeadBanner,
  FeatureTri,
  Weather,
  ProgressBarBox,
  SectionPara,
  SectionParaMulti,
  MapApi,
  Cost,
  RadioGroupRating,
  Divide,
  TitleHead,
  IntroBanner,
  DashCard,
  Palm,
  DivideSolidSection,
  FeatureDestinations,
  ScrollToTop,
  Feedback,
} from "../material-ui/Index_Comp";

//MUI Components
import Card from "@mui/material/Card";

//Icons for Font-Awesome
import { Typography, Button } from "@mui/material";

//#Images
import palm_leaf from "../assets/images/media/palm/palm_leaf.svg";
import img from "../assets/images/kuta/Kuta-Beach.jpg";

//#Information for each location
import content from "../assets/content/content.json";

//##REQUIRED PROPS!
//INPUT: Location, ImgBanner, Video
//OUTPUT: Entire Page Template

const PageTemplate = (props) => {
  const location = props.city;
  const general = content[location].general;
  const continent = general.continent;
  const country = general.country;
  //image path of the selected location
  const imagePath = `images/${location}/${general.imageUrlWeather}`;

  //Navigation of sections :
  //-could be less hardcoded, maybe read from content.json
  const navArr = [
    { id: 1, ref: "cost", title: "cost" },
    { id: 2, ref: "transport", title: "transportation" },
    { id: 3, ref: "activities", title: "activities" },
    { id: 4, ref: "articles", title: "what to know" },
  ];
  const htTrio = "auto";

  //Feature Image [Title, SubTitle]
  const imgFeat = [
    "Things to Do",
    `Explore the top tourist destinations in ${location}.`,
  ];

  const [coordinates, setCoordinates] = useState([-8.65, 115.216667]);

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
    <div className="overflow-hidden relative scroll-smooth">
      <ScrollToTop />
      <HeadBanner title={location} />
      <IntroBanner navArr={navArr} location={location} />
      <div className="Page_Template_Container z-10 ">
        {/* The navigation selections */}

        {/* The navigation selections */}
        <section
          className="flex flex-col w-container gap-12 justify-between mx-auto mb-12 md:gap-20 md:mb-20 lg:flex-row lg:gap-8 lg:my-20 lg:w-4/5"
          style={{ height: htTrio }}
        >
          <section className="w-full lg:w-2/5">
            <section className="rounded-2xl m-auto h-fit  overflow-hidden shadow-lg">
              <div
                className="min-h-20vh p-8 relative bg-cover bg-center lg:h-2/5"
                style={{
                  backgroundImage: `url(${imagePath ? imagePath : img})`,
                }}
              >
                <div className="z-0 absolute top-0 left-0 bg-gradient-to-t opacity-80 from-gray-900 via-transparent-20 to-transparent trans transition-opacity w-full h-full"></div>
                <span className="absolute bottom-8 right-8">
                  <Weather
                    location={location}
                    cords={coordinates}
                    setCords={setCoordinates}
                  />
                </span>
              </div>
              <div className="h-3/5 flex flex-col justify-evenly bg-white p-8">
                <span className="Tag mb-4">{continent}</span>
                <h3 className="mb-4">
                  {location}, {country}
                </h3>
                <ProgressBarBox location={location} />
                <button className="Primary_Btn mt-8">Learn More</button>
              </div>
            </section>
          </section>
          <MapApi cords={coordinates} />
        </section>

        <section className="Accent_Lt Palm w-container m-auto mb-12 md:mb-20">
          <TitleHead title="Things to Do" nav="activities" />
          <FeatureCards
            array={props.imgArr}
            title={imgFeat[0]}
            subtitle={imgFeat[1]}
            location={location}
          />
        </section>

        <section className="overflow-hidden mb-12 md:mb-20 Container">
          <div className="bg-white p-12">
            <TitleHead title="transport" nav="transport" />
            <FeatureTri location={location} />
          </div>
          <SectionPara location={location} info="transport" />
          {/*<Button variant="contained" className='Button'>Learn More</Button>*/}
        </section>

        <DivideSolidSection
          msg="Laborum Lorem et labore officia proident.Ut ullamco reprehenderit eiusmod ullamco.Amet proident commodo commodo tempor minim esse in est pariatur pariatur.Mollit consequat laborum adipisicing velit.Do veniam duis culpa commodo sunt sit ullamco sint cupidatat in exercitation enim.Lorem eiusmod consectetur minim proident."
          title="Consequat mollit fugiat ad"
        />

        <section className="pt-16 bg-white Container overflow-hidden mb-12 md:mb-20">
          <TitleHead title="Cost of Living" nav="cost" />
          <Cost location={location} />
        </section>

        <DivideSolidSection
          msg="Nostrud cupidatat pariatur veniam qui sunt sint qui veniam culpa aliquip consequat.rit eiusmod ullamco.Amet proident commodo commodo tempor minim esse in est pariatur pariatur.Mollit consequat laborum adipisicing velit.Do veniam duis culpa commodo sunt sit ullamco sint cupidatat in exercitation enim.Lorem eiusmod consectetur minim proident."
          title="Consectetur minim consectetur"
        />

        <section className="pt-4 px-4 relative mx-auto bg-white overflow-hidden Container  mb-12 md:mb-20 md:pt-16 md:pb-12 md:px-16 ">
          <TitleHead title="What to know" nav="articles" />

          <SectionParaMulti location={location} info="articles" />
          {/* Use a terinary if statement with true/false
                to indicate if videobanner should be here
                <VideoBanner 
                    video = {props.video}
                    msg = 'Endless Rice Fields'
                    speed = '1.2'
                />*/}

          <img
            className="Palm_leaf top-28 right-1/3"
            style={{ transform: "rotate(180deg)" }}
            src={palm_leaf}
          />
          <img className="Palm_leaf bottom-0 left-1/3" src={palm_leaf} />
        </section>
      </div>

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

      {/* Carousel for dragging, might still work with later
            <section className='w-full Carousel-container gap-8 overflow-x-auto mb-12 md:mb-20' style={{height:'30vh'}}>
                <Card className='Carousel-child h-auto Test' sx={{borderRadius: '15px' }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='Carousel-child h-auto Test' sx={{borderRadius: '15px' }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='Carousel-child h-auto Test' sx={{borderRadius: '15px' }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='Carousel-child h-auto Test' sx={{borderRadius: '15px' }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
                <Card className='Carousel-child h-auto Test' sx={{borderRadius: '15px' }}><h5 className='font-bold text-white text-center text-2xl Text-shadow Roboto_Condensed'>Denpasar</h5></Card>
            </section>
        */}

      <Feedback msg="How helpful was Globe Travel at planning your next trip?" />
      <Footer />
      <Palm position="left" top="10%" />
      <Palm position="right" top="30%" />
      <Palm position="left" top="50%" />
      <Palm position="right" top="70%" />
    </div>
  );
};

export default PageTemplate;
