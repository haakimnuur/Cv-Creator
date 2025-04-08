import { useState } from 'react';
import EducationForm from './EducationForm';
import EducationPreview from './EducationPreview';

const Education = ({ onSubmit }) => {
  const [data, setData] = useState({ school: '', degree: '', graduation: '' });
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
      <h2>Education</h2>
      {isEditing ? (
        <EducationForm onSubmit={handleSubmit} initialData={data} />
      ) : (
        <EducationPreview data={data} onEdit={handleEdit} />
      )}
    </section>
  );
};

export default Education;
