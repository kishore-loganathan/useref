import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter></Counter>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
