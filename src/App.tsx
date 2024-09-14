import './App.scss';
import BasicInfo from './components/BasicInfo';
import InternShip from './components/InternShipExperience';
import Project from './components/ProjectExperience';

const Resume = () => {
  return (
    <div className="content">
      <BasicInfo />
      <InternShip />
      <Project />
    </div>
  );
};

export default Resume;
