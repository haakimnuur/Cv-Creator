import GeneralInfo from './components/GeneralInfo/GeneralInfo';
import { useState } from 'react';

import './App.css';
import './styles/reset.css';

import Education from './components/Education/Education';
import Experiences from './components/Experiences/Experiences';
import CV from './components/CV';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [educationInfo, setEducationInfo] = useState({
    school: '',
    degree: '',
    gradYear: '',
  });
  const [experienceInfo, setExperienceInfo] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  });

  return (
    <div className="app-container">
      <div className="form-container">
        <GeneralInfo onSubmit={setGeneralInfo} />
        <Education onSubmit={setEducationInfo} />
        <Experiences onSubmit={setExperienceInfo} />
      </div>

      <div className="cv-container">
        <CV
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
