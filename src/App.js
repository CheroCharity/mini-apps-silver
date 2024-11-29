import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Box  from '@mui/material/Box';
import './App.css';
import Header from "./components/Header";
import Home from './pages/Home';
import WeekOne from './pages/WeekOne';
import WeekTwo from './pages/WeekTwo';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query to check if the screen size is <= 768px
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = () => {
      setIsMobile(mediaQuery.matches); // Updates state if the media query matches
    };

    // Set initial state
    handleMediaQueryChange();

    // Add event listener for media query change
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  return (
    <div className="App">
      <Header/>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',      // Center vertically
      }}
    >
        
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/week-one" element={<WeekOne isMobile={isMobile}/>} />
        <Route path="/week-two" element={<WeekTwo isMobile={isMobile}/>} />
      </Routes>
    </Router>
     </Box>
    </div>
  );
}

export default App;
