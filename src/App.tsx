import BasicInfo from "./components/BasicInfo";
import InternShip from "./components/InternShipExperience";
import Project from "./components/ProjectExperience";
import "./App.scss";
import Skills from "./components/Skills";
import { usePDF } from "react-to-pdf";
import OpenSource from "./components/openSource";

const Resume = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "26届前端实习 梁少峻 南邮.pdf",
  });

  return (
    <div className="App">
      <button onClick={() => toPDF()} className="download-btn">
        Download as PDF
      </button>{" "}
      {/* 修改这里 */}
      <div className="content" ref={targetRef}>
        <BasicInfo />
        <OpenSource />
        <InternShip />
        <Project />
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
