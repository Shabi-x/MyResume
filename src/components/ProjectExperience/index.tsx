import React from "react";
import qingyouLogo from "../../logo/qingyou.png";

import "./index.scss";

const projectList = [
  {
    projectName: "基于比较器（LVDS接口）的中短波软件无线电系统",
    responseJob: "（前端负责人）",
    projectTime: "2024.02 - 2024.03",
    link: " ",
    projectDescription:
      "独立开发了一个基于1位ADC（比较器）的软件定义无线电系统，实现了AM与FM广播的解调功能，相当于一个中短波电台的功能。通过高效的信号处理算法，成功接收和解码无线电信号，具备低功耗低成本和高性能的特点。（所有工作均为本人独立完成）",
    projectList: [
      "采样与量化：与传统的SDR使用多位ADC（模数转换器）不同，1bitSDR使用LVDS差分对进行采样。这意味着每个采样值只能是0或1，代表信号的两个状态。这种方式可以大幅度降低硬件复杂性和功耗以及成本。",
      "数字信号处理（DSP）：接下来的处理主要依赖于数字信号处理算法。由于信号已经以1位的形式表示，通常需要使用专门的算法来恢复原始信号的信息。这些算法包括过采样、噪声整形、数字滤波和抽取等，能够在低信噪比的条件下有效提取信号。",
      "解调与输出：NCO+查找表产生解调所需的本地载波，经过混频器产生IQ两路正交信号后经过CIC级联积分梳状滤波器滤除高频噪声（梳状滤波器通过差分运算器实现，用于消除积分器中的延迟效应。其结构与积分器相反）。解调器通过对输入 I 和 Q 信号的平方和求平方根，恢复出调制信号的幅度。",
      "所获成果：2024全国大学生嵌入式系统设计竞赛FPGA赛道国家级一等奖"
    ],
    techStack: ["React", "TypeScript", "Lottie", "Vite"],
  },
];

interface ProjectType {
  projectName: string;
  responseJob?: string;
  projectTime: string;
  projectDescription: React.ReactNode;
  projectList: string[];
  techStack: string[];
}

interface ProjectItemProps {
  projectName: string;
  responseJob?: string;
  projectTime: string;
  projectDescription: React.ReactNode;
  projectList: string[];
  techStack: string[];
  link: string | undefined;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectName,
  responseJob,
  projectTime,
  projectDescription,
  projectList,
  techStack,
  link,
}) => {
  return (
    <div className="project-item">
      <div className="project-header">
        <div className="project-name">{projectName}</div>
        {/* <div className="response-job">{responseJob}</div>
        <div className="link">{link}</div> */}
        {/* <div className="project-time">{projectTime}</div> */}
      </div>
      <div className="project-description">{projectDescription}</div>
      <ul className="project-details">
        {projectList.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
      {/* <div className="techStack">
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>技术栈：</span>
        {techStack.map((stack, index) => {
          return (
            <div key={index} className="stack">
              {stack}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

const Project: React.FC = () => {
  return (
    <div className="con">
      <div className="basic-info">
        项目经历
        <div className="title">Project Experience</div>
      </div>

      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            projectName={project.projectName}
            responseJob={project.responseJob}
            projectTime={project.projectTime}
            projectDescription={project.projectDescription}
            projectList={project.projectList}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
