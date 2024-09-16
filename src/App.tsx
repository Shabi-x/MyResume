import BasicInfo from './components/BasicInfo';
import InternShip from './components/InternShipExperience';
import Project from './components/ProjectExperience';
import './App.scss';
import Skills from './components/Skills';

const Resume = () => {
  return (
    <div className="content">
      <BasicInfo />
      <InternShip />
      <Project />
      <Skills />
    </div>
  );
};

export default Resume;
