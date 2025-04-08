import { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import GeneralInfoPreview from './GeneralInfoPreview';

const GeneralInfo = ({ onSubmit }) => {
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (formData) => {
    setData(formData);
    setIsEditing(false);
    onSubmit(formData);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <section className="form-section">
      <h2>General Information</h2>
      {isEditing ? (
        <GeneralInfoForm onSubmit={handleSubmit} initialData={data} />
      ) : (
        <GeneralInfoPreview data={data} onEdit={handleEdit} />
      )}
    </section>
  );
};

export default GeneralInfo;
