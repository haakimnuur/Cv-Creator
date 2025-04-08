import { useState } from 'react';

const ExperiencesForm = ({ onSubmit, initialData }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="educationForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Position"
        name="position"
        value={formData.position}
        onChange={handleChange}
      />
      <textarea
        placeholder="Responsibilities"
        className="textbox"
        name="responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
      />
      <div className="dates-container">
        <label htmlFor="startDate">Start Date:</label>
        <input
          name="startDate"
          type="date"
          placeholder="Start Date"
          max={today}
          value={formData.startDate}
          onChange={handleChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          name="endDate"
          type="date"
          placeholder="End Date"
          value={formData.endDate}
          onChange={handleChange}
          max={today}
          min={formData.startDate}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExperiencesForm;
