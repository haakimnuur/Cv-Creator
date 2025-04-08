import { useState } from 'react';

const EducationForm = ({ onSubmit, initialData }) => {
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
        placeholder="School Name"
        name="school"
        value={formData.school}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Graduation Year"
        max={9999}
        name="graduation"
        value={formData.graduation}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EducationForm;
