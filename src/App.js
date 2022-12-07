import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Page/Home";
import SearchResult from "./Page/SearchResult";
function App() {
  return (
    <Routes>
      <Route path="/jw.gg" element={<Home />} />
      <Route path="/jw.gg/searchResult" element={<SearchResult />} />
    </Routes>
  );
}

export default App;
