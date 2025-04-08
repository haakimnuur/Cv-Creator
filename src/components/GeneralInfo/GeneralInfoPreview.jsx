const GeneralInfoPreview = ({ data, onEdit }) => {
  return (
    <div className="preview-container">
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>Phone:</strong> {data.phone}
      </p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default GeneralInfoPreview;
