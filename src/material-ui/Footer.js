import React from 'react'
import { Link } from '@mui/material';

//Icons mUI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

//Images
import { ReactComponent as Logo } from '../assets/palm-tree-svgrepo-com.svg';



const Footer = () => {
    const styles = {
        icon: { width: '30px', height: '30px',},
        aqua: {color: 'rgb(87, 189, 183)',},
        grey: {color: 'rgb(65 71 74)',}
      }

    return (
        <footer className=' flex flex-row justify-between bg-black'>
        <section className='flex flex-col justify-center'>
          <Link to='/' >
              <span className="Special_Title font-bold text-center uppercase text-white">Travel Bali</span>
          </Link>
        <div>
        <FacebookIcon className='Transition_Icon'/>
        <InstagramIcon className='Transition_Icon'/>
        <TwitterIcon className='Transition_Icon'/>
        </div>
      </section>
      <section className='flex flex-row justify-center mb-10'>

          {/*<div className='inline-block'>
              <h6 className='font-bold'>Resources</h6>
              <ul className='ListItems'>
                <li>Call Center</li>
                <li>Affliates</li>
                <li>Toll Free</li>
                <li>Coupons</li>
              </ul>
          </div>
          <div className='inline-block'>
              <h6 className='font-bold'>Travelers</h6>
              <ul className='ListItems'>
                <li>Insurnace</li>
                <li>Reimbursement</li>
                <li>Covid Protocols</li>
                <li>Travel Bans</li>
              </ul>
          </div>*/}
          <div className='inline-block'>
            <h6 className='font-bold'>Company</h6>
            <ul className='ListItems'>
              <li>Contact us</li>
              <li>Locations</li>
              <li>Mission</li>
              <li>Careers</li>
            </ul>
          </div>
          {/*<div className='inline-block'>
            <h6 className='font-bold' style={styles.aqua}>Get In Touch</h6>
            <ul className='ListItems'>
              <li>1.800.867.5309</li>
              <li>customerservice@travelbali.com</li>
            </ul>
          </div>*/}
      </section>
      </footer>
    )
}

export default Footer
