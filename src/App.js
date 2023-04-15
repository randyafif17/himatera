import React from 'react';
import './App.css';
import Home from "./Pages/Home";
import Department from "./Pages/Department";
import Event from "./Pages/Event";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Pages/Blog';
import { DetailsPages } from './Pages/DetailsPages';

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//       console.log(entry)
//           if (entry.isIntersecting) {
//               entry.target.classList.add('show');
//           } else {
//               entry.target.classList.remove('show');
//           }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/department" element={<Department />} />
      <Route path="/event" element={<Event />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path='/details/:id' element={<DetailsPages />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}

export default App;
