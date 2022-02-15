# Travel Bali - Dynamic Multipage Travel Site

A dynamic travel site built using React. React Router directory and pages are dynamically constructed via translation of JSON file containing content on a variety of tourist destinations. In order to add pages, admin would simply add new destination information to content.json file. UI constructed using Material UI components and Tailwind css for efficient and consistent styling. Location weather and map from Mapbox and Open Weather Map Api.

live: https://globetravel.web.app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [API's](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The purpose of this repository was to learn how to work with Material UI and Tailwind CSS and to build on React knowledge. The only significant challenge I have faced with this project is passing array props between pages when using React Router. I tried using local storage to pass the informatin between pages, however, this doesn't seem to solve the problem. I believe creating a database with user accounts would be the way to go but I don't anticipate spending the time to set this up for the "favorite" icon system. Another small issue occured when passing img urls from JSON file to Material UI components. I found that storing images within the public folder resolved this issue. 

### Screenshot

Destination Page Sample:

![](./public/images/screenshots/screenshot_page_full_sml.png)

## My process

### Built with

- React
- Material UI
- Tailwind CSS
- Adobe Illustrator
- Font Awesome Icon Package
- MapBox Api
- Open Weather Map Api
- SASS
- JSON

### What I learned

- How to repurpose components from previous React projects
- Build on React knowledge, working with useState, useEffect, props, reusability of components and React Router
- How to utilize and style Material UI components
- How convinient Tailwind Css and Material UI can be for time efficiency and styling consistency
- How to interact with MapBox and Open Weather Map Api system

### Continued development

Favorite Icon Functionality:

As mentioned earlier, I think the site could benefit from the favorite icon functionality, however, I am not interested at this time in constructing a database with user login etc. 

CMS:

I thought it would be interesting to build a simple CMS system for this website but after looking into it, it appears the concensus is that CMS are not worth recreating as there are many CMS services already being offered with plug-in features. 

Add More Content to Live Site:

Because I like to travel, I think I'll continue to add destinations and content to the JSON file just for fun. :)

### API's

Open Weather Map API: 

https://openweathermap.org/

Map Box API:

https://www.mapbox.com/

## Author

- Website - [Alisar Fares-Boulos](https://www.alisarfaresboulos.com)

## Acknowledgments

I found these resources helpful along the way.


useEffect() in Practice:

https://dmitripavlutin.com/react-useeffect-explanation/


Working with React Router 6 changes:

https://www.youtube.com/watch?v=zEQiNFAwDGo&t=1043s


Working with the MapBox Api:

https://www.youtube.com/watch?v=JJatzkPcmoI&list=PL6TWpVj3-2povDZZk7osCUQgJG90koJHG&index=3

UI Inspiration:
https://nomadlist.com/cost-of-living
https://www.lonelyplanet.com/