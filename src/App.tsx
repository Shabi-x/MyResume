import BasicInfo from './components/BasicInfo';
import InternShip from './components/InternShipExperience';
import Project from './components/ProjectExperience';
import './App.scss';
import Skills from './components/Skills';
import { usePDF } from 'react-to-pdf';

const Resume = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'MyResume.pdf' }); // 修改这里

  return (
    <div className="App">
      <button onClick={() => toPDF()}>Download as PDF</button> {/* 修改这里 */}
      <div className="content" ref={targetRef}>
        <BasicInfo />
        <InternShip />
        <Project />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
