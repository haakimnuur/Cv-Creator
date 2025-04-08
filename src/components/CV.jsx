import '../styles/CV.css';
import '../styles/reset.css';

const CV = ({ generalInfo, educationInfo, experienceInfo }) => {
  return (
    <div className="cv-paper">
      <header className="cv-header">
        <div className="cv-name">{generalInfo.name}</div>
        <div className="cv-contact">
          <span className="cv-email">{generalInfo.email}</span>
          <span className="separator">|</span>
          <span className="cv-phone">{generalInfo.phone}</span>
        </div>
      </header>

      <section className="cv-section cv-education">
        <h2>Education</h2>
        <div className="edu-item">
          <div className="edu-school">{educationInfo.school}</div>
          <div className="edu-details">
            <span className="edu-gradYear">{educationInfo.graduation}</span>
            <span className="separator">|</span>
            <span className="edu-degree">{educationInfo.degree}</span>
          </div>
        </div>
      </section>

      <section className="cv-section cv-experience">
        <h2>Experience</h2>
        <div className="exp-item">
          <div className="exp-header">
            <span className="exp-company">{experienceInfo.company}</span>
            <span className="exp-dates">
              {experienceInfo.startDate} - {experienceInfo.endDate}
            </span>
          </div>
          <div className="exp-position">{experienceInfo.position}</div>
          <div className="exp-responsibilities">
            {experienceInfo.responsibilities}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;
