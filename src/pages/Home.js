import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate programmatically
import Button from '@mui/material/Button';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = (week) => {
    if(week === "week1"){
    navigate('/week-one'); // Navigate to /week-one when button is clicked
    }
    if(week === "week2"){
      navigate('/week-two'); // Navigate to /week-two when button is clicked
      }
  };

  return (
    <div>
    <div>
      <Button onClick={() =>{handleButtonClick("week1")}}>1. Week One</Button>
    </div>
    <div>
      <Button onClick={() =>{handleButtonClick("week2")}}>2. Week Two</Button>
    </div>
    </div>
  );
}

export default Home;
