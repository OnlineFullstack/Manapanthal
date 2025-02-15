import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Notification from './pages/Notification';

import Interest from './pages/Interest';
import SignUpForm from './components/SignUpForm';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/interest" element={<Interest />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/notification" element={<Notification />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
