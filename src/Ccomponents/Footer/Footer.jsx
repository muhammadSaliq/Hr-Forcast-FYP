import React from 'react';
import logo from '../../Images/equipment suppliers logo mini.png';
import CompanyLogo from '../../Images/bs logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faInstagram , faLinkedin  } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-1">

          <Link to={'/'}   >
       <img   width={"200px "}   src={logo} alt="" />
       </Link>
            <p className="text-sm">
              Industrial kitchen equipment: It is the equipment that enables the work of enterprises such as restaurants, hotels, hospitals, factories and schools where large amounts of food production is carried out.
            </p>
            <div className="flex gap-4 mt-2">
      <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com" className="text-blue-500 hover:text-blue-700">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com" className="text-blue-700 hover:text-blue-900">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>

          </div>
          
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Corporate</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
            <li>
        <Link to="/Corporate">About Us</Link>
      </li>
      <li>
        <Link to="/TechnicalService">Our Vision</Link>
      </li>
      <li>
        <Link to="/Corporate">Our Mission</Link>
      </li>
      <li>
        <Link to="/OurDocument">Our Documents</Link>
      </li>
      <li>
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
      </li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Product Groups</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li><a href="#">Dough Kneading Machine</a></li>
              <li><a href="#">Blender/Mikser</a></li>
              <li><a href="#"> Professional Dough Kneading </a></li>
              <li><a href="#">  Oven</a></li>
              <li><a href="#">   OVERTURN DOUGH KNEADI</a></li>
              {/* ... other items ... */}
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
            <div className="border-b-2 border-red-600 w-10"></div>
            <ul className="mt-4 space-y-2">
              <li className="font-bold">
                Phone <br />
                01273 569355
              </li>
              <li className="font-bold">
                E Mail <br />
                Info@equipmentsuppliers.co.uk
              </li>
              <li className="font-bold">
                Address <br />
                Unit 19 Beach Cl, Newhaven BN9 0BY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-center p-2'>
</div>


      <div className="flex flex-col justify-center items-center pt-4">
  <hr className='w-4/5 sm:w-3/5 border border-gray-300' />
            <div className="text-sm text-white mt-2 font-2xl" >
              <Link  target="_blank" to="https://londonlogodesigners.co.uk/"  >
                &copy; 2023 <span style={{textDecoration : "underline" }}    >Londonlogodesigners</span> . </Link> All rights reserved.
            </div>
        </div>

    </footer>
  );
}

export default Footer;
