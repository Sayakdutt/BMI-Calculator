import { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // BMI logic

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
      setBmi(bmi);

      if (bmi < 18.5) {
        setMessage("UnderWeight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("Normal weight");
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    }
  };

  //reload logic
  let reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            BMI CALCULATOR
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Weight (kg)
              </label>
              <div className="mt-2">
                <input
                  name="weight"
                  type="text"
                  placeholder=" Enter the Weight"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="height"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Height (cm)
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="weight"
                  type="text"
                  placeholder=" Enter the Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={calcBmi}
              >
                Calculate BMI
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={reload}
              >
                Reload
              </button>
            </div>

            <div>
              {bmi && (
                <div className="mt-4">
                  <h2 className="mt-10 text-center text-sm text-black-500 text-bold">
                    Your BMI is : {bmi}
                  </h2>
                  <h2 className="mt-10 text-center text-sm text-black-500 text-bold">
                    {message}
                  </h2>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
