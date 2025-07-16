import BasicInfo from "./components/BasicInfo";
import InternShip from "./components/InternShipExperience";
import Project from "./components/ProjectExperience";
import "./App.scss";
import "./print.scss";
import Skills from "./components/Skills";
import OpenSource from "./components/openSource";
import { useEffect } from "react";
import githubLogo from "./logo/github.png";

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
      <div className="content">
        <BasicInfo />
        <OpenSource />
        <InternShip />
        <Project />
        <Skills />
      </div>

      <div className="github-footer">
        <a href="https://github.com/Shabi-x/MyResume" target="_blank" rel="noopener noreferrer" className="github-link">
          <div className="github-avatar">
            <img src={githubLogo} alt="GitHub" />
          </div>
          <span className="github-text">Create Your Own Resume By Forking This Template?</span>
        </a>
        <button onClick={() => exportPDF()} className="download-btn">
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
