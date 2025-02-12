import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About Us",
    link: "/#about",
  },
  {
    title: "Services",
    link: "/#services",
  },
  {
    title: "Cars",
    link: "/#cars",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Drivique
            </h1>
            <p className="text-sm">
              Drivique is your trusted partner for all things automotive. From expert reviews to the latest industry trends, we help you make informed decisions on vehicles, accessories, and maintenance.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Guntur, Andhra Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Important Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.link} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Services Section */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Our Services
              </h1>
              <ul className="flex flex-col gap-3">
                <li>Car Reviews & Ratings</li>
                <li>Vehicle Maintenance Tips</li>
                <li>Automotive News & Trends</li>
                <li>Car Buying Guides</li>
              </ul>
            </div>
            {/* Newsletter Subscription */}
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Stay Updated
              </h1>
              <p className="text-sm mb-3">Subscribe to our newsletter for the latest automotive updates.</p>
              <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md border" />
              <button className="mt-3 bg-primary text-white py-2 px-4 rounded-md w-full hover:bg-opacity-80 duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
