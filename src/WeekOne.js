import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate programmatically
import Button from '@mui/material/Button';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    navigate('/'); // Navigate to /about when button is clicked
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>Go Back to HomePage</Button>
    </div>
  );
}

export default Home;
