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
  const [isMobile, setIsMobile] = useState(false);

  const exportPDF = () => {
    window.print();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(viewportMeta);

    return () => {
      window.removeEventListener('resize', checkDevice);
      document.head.removeChild(viewportMeta);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
        color: '#333'
      }}>
        <div style={{
          fontSize: '60px',
          marginBottom: '20px',
          animation: 'bounce 2s infinite'
        }}>
          💻
        </div>

        <Alert
          severity="success"
          icon={false}
          sx={{
            maxWidth: 400,
            mb: 3,
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.9)'
          }}
        >
          <div>
            🚫 设备兼容性提示
          </div>
          <div style={{ fontSize: '14px', lineHeight: 1.5 }}>
            暂不支持手机端访问，请使用PC访问以获得最佳体验
          </div>
        </Alert>

        <div style={{
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '12px',
          padding: '16px 24px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <div style={{ fontSize: '14px', opacity: 0.9, lineHeight: 1.6, color: '#444' }}>
            <p>推荐使用 Chrome 或 Edge 浏览器</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </div>
    );
  }

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
