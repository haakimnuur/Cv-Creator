import { useState } from 'react';
import ExperiencesForm from './ExperiencesForm';
import ExperiencesPreview from './ExperiencesPreview';

const Experiences = ({ onSubmit }) => {
  const [data, setData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (formData) => {
    setData(formData);
    onSubmit(formData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="form-section">
      <h2>Experiences</h2>
      {isEditing ? (
        <ExperiencesForm onSubmit={handleSubmit} initialData={data} />
      ) : (
        <ExperiencesPreview data={data} onEdit={handleEdit} />
      )}
    </section>
  );
};

export default Experiences;
