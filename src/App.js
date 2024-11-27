import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Box  from '@mui/material/Box';
import './App.css';
import Header from "./Header";
import Home from './Home';
import WeekOne from './WeekOne';


function App() {
  return (
    <div className="App">
      <Header/>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',      // Center vertically
        height: '100vh',           // Make sure the Box takes full height of the viewport
      }}
    >
        
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week-one" element={<WeekOne />} />
      </Routes>
    </Router>
     </Box>
    </div>
  );
}

export default App;
