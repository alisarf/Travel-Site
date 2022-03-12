import React from "react";
import { Link } from "@mui/material";
//Icons mUI
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className=" text-center flex flex-col md:flex-row justify-between bg-black">
      <section className="flex flex-col justify-center">
        <Link to="/">
          <span className="Special_Title font-bold text-center uppercase text-white">
            Globe Travel
          </span>
        </Link>
        <div className="md:mr-auto">
          <FacebookIcon className="Footer__Icon" />
          <InstagramIcon className="Footer__Icon mx-2" />
          <TwitterIcon className="Footer__Icon" />
        </div>
      </section>
      <section className="flex flex-row justify-center mb-10">
        <div className="inline-block">
          <h6 className="font-bold">Company</h6>
          <ul className="Footer__Links">
            <li>Contact us</li>
            <li>Locations</li>
            <li>Mission</li>
            <li>Careers</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
