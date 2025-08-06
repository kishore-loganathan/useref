import React, { useRef, useState, useEffect } from "react";

const Counter = () => {
  const ref = useRef(1);
  const valueref = useRef();
  const colorref = useRef();
  const [counter, setcounter] = useState(1);
  const upperref = useRef(0);
  const lowerref = useRef(0);

  const handleLowerChange = (e) => {
    lowerref.current = e.target.value;
  };

  const handleUpperChange = (e) => {
    upperref.current = e.target.value;
  };

  const handleCounterChange = (e) => {
    setcounter(Number(e.target.value));
  };

  const incrementing = () => {
    const upper = Number(upperref.current);
    const lower = Number(lowerref.current);
    if (counter + 1 > upper) {
      setcounter(lower);
    } else {
      setcounter((prev) => prev + 1);
    }
  };

  const decrementing = () => {
    const upper = Number(upperref.current);
    const lower = Number(lowerref.current);
    if (counter - 1 < lower) {
      setcounter(upper);
    } else {
      setcounter((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (colorref.current) {
      colorref.current.style.color = "blue";
    }
    ref.current = counter;
    if (valueref.current) {
      valueref.current.focus();
    }
  }, [counter]);

  const handlesave = () => {
    const upper = Number(upperref.current);
    const lower = Number(lowerref.current);
    if (upper < lower) {
      console.error("Upper limit must be higher than the lower limit");
    } else {
      setcounter(lowerref.current);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-xl shadow-md space-y-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Smart Counter
        </h2>
        <div className="flex gap-2 flex-col">
          <input
            type="number"
            placeholder="Lower Limit"
            onChange={handleLowerChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Upper Limit"
            onChange={handleUpperChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Change the value to:"
            ref={valueref}
            name="counter"
            value={counter}
            onChange={handleCounterChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex gap-3 justify-between">
          <button
            onClick={handlesave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={incrementing}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment
          </button>
          <button
            onClick={decrementing}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Decrement
          </button>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-gray-600">Ref Value (Old): {ref.current}</h1>
          <h1 ref={colorref} className="text-xl font-semibold">
            State Value (Current): {counter}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
