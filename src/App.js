import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { data } from "./Cars";
import Main from "./Component/Main";
import Learn from "./Pages/Learn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learn/:id" element={<Learn data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
