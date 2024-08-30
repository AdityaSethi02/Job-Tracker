import React, { useState } from 'react';
import axios from 'axios';

const PopupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    domain: '',
    platform: '',
    status: 'Applied',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send formData to the backend to save in the database
    await axios.post('http://localhost:5000/api/jobs', formData);

    setFormData({
        companyName: '',
        position: '',
        domain: '',
        platform: '',
        status: 'Applied',
    })
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
        <label className='mb-2'>
            Company Name: 
            <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
                autoComplete="off"
            />
        </label>
        <label className='mb-2'>
            Position: 
            <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
                autoComplete="off"
            />
        </label>
        <label className='mb-2'>
            Domain: 
            <input
                type="text"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
                autoComplete="off"
            />
        </label>
        <label className='mb-2'>
            Platform: 
            <input
                type="text"
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="border rounded p-2 mb-2 w-full"
                autoComplete="off"
            />
        </label>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default PopupForm;
