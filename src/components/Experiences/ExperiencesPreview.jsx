const ExperiencesPreview = ({ data, onEdit }) => {
  return (
    <div className="preview-container">
      <p>
        <strong>Company Name:</strong> {data.company}
      </p>
      <p>
        <strong>Position: </strong>
        {data.position}
      </p>
      <p>
        <strong>Responsibilities:</strong> {data.responsibilities}
      </p>
      <p>
        <strong>Start Date:</strong> {data.startDate}
      </p>
      <p>
        <strong>End Date:</strong> {data.endDate}
      </p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
};

export default ExperiencesPreview;
