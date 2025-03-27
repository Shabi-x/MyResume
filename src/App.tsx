import BasicInfo from "./components/BasicInfo";
import InternShip from "./components/InternShipExperience";
import Project from "./components/ProjectExperience";
import "./App.scss";
import Skills from "./components/Skills";
import { usePDF } from "react-to-pdf";
import Education from "./components/eduBackGround";

const Resume = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "26届 徐立铭 南邮.pdf",
  }); // 修改这里

  return (
    <div className="App">
      <button
        onClick={() => toPDF()}
        style={{ margin: "20px", padding: "10px" }}
      >
        Download as PDF
      </button>
      <div className="content" ref={targetRef} style={{paddingTop:'15px'}}>
        <BasicInfo />
        <Education/>
        <InternShip />
        <Project />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
