const EducationPreview = ({ data, onEdit }) => {
  return (
    <div className="preview-container">
      <p>
        <strong>School Name:</strong> {data.school}
      </p>
      <p>
        <strong>Degree:</strong> {data.degree}
      </p>
      <p>
        <strong>Graduation Year:</strong> {data.graduation}
      </p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default EducationPreview;
