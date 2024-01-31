import React, { useState } from 'react';
import "../assets/css/Booking.css"
import { useNavigate } from 'react-router-dom';
const Bookingform= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hall: '',
    location:'',
    phoneNumber: '',
    numberOfPersons: '',
    date: '',
    food: 'Veg',
    funActivities: [],
  });

  const navigate=useNavigate();

  const handleNav=()=>
  {
      navigate("/thankyou")
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFunActivitiesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, funActivities: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="ffform-container" style={{display:"flex"}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Hall Name:</label>
          <input
            type="text"
            name="hall"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number of Persons:</label>
          <input
            type="number"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Food:</label>
          <select
            name="food"
            value={formData.food}
            onChange={handleInputChange}
            required
          >
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
        <div className="form-group">
          <label>Fun Activities:</label>
          <select
            name="funActivities"
            value={formData.funActivities}
            onChange={handleFunActivitiesChange}
            multiple
          >
            <option value="DjParty">DJ Party</option>
            <option value="Games">Games</option>
            <option value="Singing">Singing</option>
            <option value="Dancing">Dancing</option>
          </select>
        </div>
        <button type="submit" onClick={handleNav}>Submit</button>
      </form>
    </div>
  );
};

export default Bookingform;
