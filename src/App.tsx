import BasicInfo from "./components/BasicInfo";
import InternShip from "./components/InternShipExperience";
import Project from "./components/ProjectExperience";
import "./App.scss";
import "./print.scss";
import Skills from "./components/Skills";
import OpenSource from "./components/openSource";
import { useEffect, useState } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import githubLogo from "./logo/github.png";

const Resume = () => {
  const [open, setOpen] = useState(false);

  const exportPDF = () => {
    window.print();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <a onClick={handleOpen} className="github-link" style={{ cursor: 'pointer' }}>
          <div className="github-avatar">
            <img src={githubLogo} alt="GitHub" />
          </div>
          <span className="github-text">Create Your Own Resume By Forking This Template?</span>
        </a>
        <button onClick={() => exportPDF()} className="download-btn">
          Download as PDF
        </button>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="info" variant="filled">
          抱歉，该简历模板的代码暂未打算开源，敬请期待后续更新！
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Resume;
