// booking.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './booking.css';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [name, setName] = useState('');

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setShowTime(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConfirm = () => {
    // Implement the logic to handle the confirmation, e.g., save the appointment details
    setShowTime(false); // Hide the confirmation section after confirming
  };

  return (
    <div className="booking-container">
      <h1 className="header">Book appointment with Pastor</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      {showTime && (
        <div className="confirmation-section">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <Link to="/thank">
            <button>Confirm</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Booking;
