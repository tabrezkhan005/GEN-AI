import React from "react";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div 
        data-aos="fade-up" 
        className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-6 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Let's Collaborate on Your Next Car Rental Venture
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto transition-colors duration-300">
            Elevate your Drivique experience with seamless solutions. Connect with us to discuss innovative possibilities tailored to your needs.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block text-lg font-semibold py-3 px-8 bg-primary text-white hover:bg-primary/80 active:bg-primary/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;