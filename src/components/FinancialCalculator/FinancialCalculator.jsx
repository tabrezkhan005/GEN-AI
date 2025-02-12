import React, { useState } from "react";

const FinancialCalculator = () => {
  const [isRupees, setIsRupees] = useState(false);
  const [values, setValues] = useState({
    price: "",
    interestRate: "",
    loanTerm: "",
    downPayment: ""
  });
  const [error, setError] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  // Function to format numbers in Indian currency format (with commas)
  const formatIndianCurrency = (num) => {
    const value = num.toString();
    const lastThree = value.substring(value.length - 3);
    const otherNumbers = value.substring(0, value.length - 3);
    const formattedValue = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return "₹" + formattedValue;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setValues(prev => ({
        ...prev,
        [name]: value
      }));
      setError("");
    }
  };

  const calculatePayment = () => {
    // Reset previous states
    setError("");
    setMonthlyPayment(null);

    // Validate if all fields are filled
    if (!values.price || !values.interestRate || !values.loanTerm || !values.downPayment) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Convert string inputs to numbers
      const price = parseFloat(values.price);
      const downPayment = parseFloat(values.downPayment);
      const interestRate = parseFloat(values.interestRate);
      const loanTerm = parseInt(values.loanTerm);

      // Validate input values
      if (isNaN(price) || isNaN(downPayment) || isNaN(interestRate) || isNaN(loanTerm)) {
        setError("Please enter valid numbers");
        return;
      }

      if (price <= 0 || interestRate <= 0 || loanTerm <= 0) {
        setError("Please enter valid positive numbers");
        return;
      }

      if (downPayment >= price) {
        setError("Down payment cannot be greater than or equal to the price");
        return;
      }

      // Calculate loan amount
      const principal = price - downPayment;
      
      // Convert annual interest rate to monthly
      const monthlyRate = (interestRate / 100) / 12;

      // Calculate monthly payment using the loan amortization formula
      const payment = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
        (Math.pow(1 + monthlyRate, loanTerm) - 1);

      if (isFinite(payment) && payment > 0) {
        if (isRupees) {
          setMonthlyPayment(Math.round(payment).toString());
        } else {
          setMonthlyPayment(payment.toFixed(2));
        }
      } else {
        setError("Invalid calculation result. Please check your inputs.");
      }
    } catch (err) {
      setError("An error occurred during calculation. Please check your inputs.");
    }
  };

  const toggleCurrency = () => {
    setIsRupees(!isRupees);
    // Clear all fields when switching currency
    setValues({
      price: "",
      interestRate: "",
      loanTerm: "",
      downPayment: ""
    });
    setMonthlyPayment(null);
    setError("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Loan Calculator {isRupees ? "(INR)" : "(USD)"}
        </h2>
        <button
          onClick={toggleCurrency}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
        >
          <div className="flex items-center">
            <span className={`mr-2 ${isRupees ? 'text-gray-500' : 'text-gray-900 dark:text-white font-semibold'}`}>$</span>
            <div className={`w-10 h-6 rounded-full transition-colors duration-200 ease-in-out ${isRupees ? 'bg-[#FFD700]' : 'bg-gray-400'}`}>
              <div className={`w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${isRupees ? 'translate-x-4' : 'translate-x-0'}`}></div>
            </div>
            <span className={`ml-2 ${isRupees ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500'}`}>₹</span>
          </div>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">
            Price {isRupees ? "(₹)" : "($)"}
          </label>
          <input
            type="text"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            placeholder="Enter price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Interest Rate (%)</label>
          <input
            type="text"
            name="interestRate"
            value={values.interestRate}
            onChange={handleInputChange}
            placeholder="Enter interest rate"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">Loan Term (Months)</label>
          <input
            type="text"
            name="loanTerm"
            value={values.loanTerm}
            onChange={handleInputChange}
            placeholder="Enter loan term"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2">
            Down Payment {isRupees ? "(₹)" : "($)"}
          </label>
          <input
            type="text"
            name="downPayment"
            value={values.downPayment}
            onChange={handleInputChange}
            placeholder="Enter down payment"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mt-4">{error}</p>
      )}

      <button 
        onClick={calculatePayment}
        className="w-full bg-[#FFD700] hover:bg-[#F4C430] text-gray-800 py-2 px-4 rounded-md mt-6 transition duration-200"
      >
        Calculate
      </button>

      {monthlyPayment && !error && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-[#FFD700]">
          <p className="text-center text-xl font-bold text-gray-800 dark:text-white">
            Monthly Payment: {isRupees ? formatIndianCurrency(monthlyPayment) : `$${monthlyPayment}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default FinancialCalculator;