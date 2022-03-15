import React from "react";
import { Link } from "react-router-dom";
//Icons mUI
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="Footer_maxwidth m-auto text-center flex flex-col md:flex-row justify-between ">
        <section className="flex flex-col justify-center">
          <Link to="/">
            <h2 className="Special_Title font-bold text-center uppercase text-white">
              Globe Travel
            </h2>
          </Link>
          <div className="md:mr-auto">
            <FacebookIcon className="Footer__Icon" />
            <InstagramIcon className="Footer__Icon mx-2" />
            <TwitterIcon className="Footer__Icon" />
          </div>
        </section>
        <section className="flex flex-row justify-center mb-10">
          <div className="inline-block">
            <ul className="Footer__Links">
              <li>Contact us</li>
              <li>Locations</li>
              <li>Mission</li>
              <li>Careers</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
