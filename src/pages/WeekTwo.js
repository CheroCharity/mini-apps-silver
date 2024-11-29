import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate programmatically
import Button from '@mui/material/Button';
import DataList from '../components/DataList';

function WeekOne({isMobile}) {
  const navigate = useNavigate(); // Hook for navigation

  const handleButtonClick = () => {
    navigate('/'); // Navigate to /about when button is clicked
  };

  return (
    <div>
      <DataList isMobile={isMobile}/>
      <Button onClick={handleButtonClick} style={{marginTop: 50}}>Go Back to HomePage</Button>
    </div>
  );
}

export default WeekOne;
