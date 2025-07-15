import BasicInfo from "./components/BasicInfo";
import InternShip from "./components/InternShipExperience";
import Project from "./components/ProjectExperience";
import "./App.scss";
import "./print.scss";
import Skills from "./components/Skills";
import OpenSource from "./components/openSource";
import { useEffect } from "react";

const Resume = () => {

  const exportPDF = () => {
    window.print();
  };

  useEffect(() => {
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewportMeta);

    return () => {
      document.head.removeChild(viewportMeta);
    };
  }, []);

  return (
    <div className="App">
      <button onClick={() => exportPDF()} className="download-btn">
        Download as PDF
      </button>{" "}
      <div className="content">
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
