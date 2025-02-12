import React, { useState } from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

// SVG Icons as components
const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.8a1 1 0 00-.8.4L2.3 11l-5.16.86a1 1 0 00-.84.99V16h3m10 0a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const GaugeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6v6l4 2"></path>
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    description: "Beautifully maintained BMW UX in pristine condition. The perfect blend of luxury and performance, this vehicle is equipped with the latest features and has low mileage. Ideal for anyone looking for a stylish and reliable SUV.",
    specifications: {
      category: "SUV",
      condition: "Used",
      make: "BMW",
      model: "UX",
      year: "2021",
      driveType: "RWD",
      transmission: "Automatic",
      fuelType: "Diesel",
      mileage: "18000",
      engineSize: "2.0L",
      cylinder: "4",
      color: "White",
      door: "4"
    },
    features: [
      "digitalOdometer",
      "panoramicMoonroof",
      "antiLockBraking",
      "driverAirBag",
      "tractionControl",
      "rearSpoiler",
      "androidAuto",
      "homeLink",
      "airConditioner",
      "leatherSeats",
      "touchscreenDisplay",
      "childSafetyLocks"
    ],
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    description: "KIA UX offers a perfect balance of comfort and efficiency, equipped with modern safety features and a spacious interior.",
    specifications: {
      category: "SUV",
      condition: "New",
      make: "KIA",
      model: "UX",
      year: "2023",
      driveType: "AWD",
      transmission: "Automatic",
      fuelType: "Hybrid",
      mileage: "0",
      engineSize: "2.5L",
      cylinder: "4",
      color: "Silver",
      door: "4"
    },
    features: [
      "blindSpotMonitor",
      "panoramicMoonroof",
      "laneDepartureWarning",
      "adaptiveCruiseControl",
      "wirelessCharging",
      "headUpDisplay",
      "androidAuto",
      "appleCarPlay",
      "airConditioner",
      "leatherSeats",
      "touchscreenDisplay",
      "parkingSensors"
    ],
    aosDelay: "500",
  },
  {
    name: "Audi A6",
    price: 120,
    image: car3,
    description: "The Audi A6 delivers an exhilarating driving experience with its cutting-edge technology and premium styling.",
    specifications: {
      category: "Sedan",
      condition: "New",
      make: "Audi",
      model: "A6",
      year: "2023",
      driveType: "AWD",
      transmission: "Automatic",
      fuelType: "Petrol",
      mileage: "0",
      engineSize: "3.0L",
      cylinder: "6",
      color: "Black",
      door: "4"
    },
    features: [
      "virtualCockpit",
      "matrixLEDHeadlights",
      "quattroAllWheelDrive",
      "bangAndOlufsenSound",
      "wirelessCharging",
      "adaptiveSuspension",
      "androidAuto",
      "appleCarPlay",
      "airConditioner",
      "leatherSeats",
      "touchscreenDisplay",
      "parkingAssist"
    ],
    aosDelay: "1000",
  },
];

const getSpecIcon = (key) => {
  switch (key) {
    case 'category':
    case 'make':
    case 'model':
      return <CarIcon />;
    case 'year':
      return <CalendarIcon />;
    case 'mileage':
      return <GaugeIcon />;
    default:
      return <WrenchIcon />;
  }
};

const CarList = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <>
      <span id="cars"></span>
      <div className="pb-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container">
          {/* Heading */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-gray-900 dark:text-white transition-colors duration-300"          >
            Explore Our Luxury Car Collection
          </h1>
          <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Choose from our premium range of vehicles designed for elegance,
            comfort, and performance.
          </p>
          {/* Car listing */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              {carList.map((data, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary p-3 rounded-xl relative group bg-white dark:bg-gray-800 transition-colors duration-300">
                  <div className="w-full h-[120px]">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold text-gray-900 dark:text-white">

                      <p>${data.price}/Day</p>
                      <button
                                                className="text-yellow-500 dark:text-blue-400 underline hover:text-yellow-600 dark:hover:text-blue-300"

                        onClick={() => setSelectedCar(data)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3 text-gray-900 dark:text-white">
                    12Km
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* End of car listing */}
          <div className="grid place-items-center mt-8">
            <button data-aos="fade-up"               className="button-outline dark:border-white dark:text-white dark:hover:bg-white/10"
            >
              Get Started
            </button>
          </div>

          {/* Detailed Car View Modal */}
          {selectedCar && (
            <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto transition-colors duration-300">
                <div className="p-6">
                  {/* Close button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedCar(null)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl">
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side - Car Image */}
                    <div className="relative">
                      <img
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
                        <p className="text-xl font-bold text-gray-900 dark:text-white">Our Price</p>
                        <p className="text-3xl font-bold text-primary">${selectedCar.price}/Day</p>
                      </div>
                    </div>

                    {/* Right side - Car Details */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedCar.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{selectedCar.description}</p>
                      </div>

                      {selectedCar.specifications && (
                        <>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Features</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {selectedCar.features?.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                  <InfoIcon />
                                  <span className="text-sm">
                                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-2">
                              {Object.entries(selectedCar.specifications).map(([key, value]) => (
                                <div key={key} className="flex items-center gap-2">
                                  {getSpecIcon(key)}
                                  <span className="text-gray-600 capitalize">{key}:</span>
                                  <span>{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors">
                        Make an Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CarList;