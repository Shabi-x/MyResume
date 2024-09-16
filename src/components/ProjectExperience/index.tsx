import React from 'react';
import './index.scss';

const projectList = [
  {
    projectName: '南邮小程序',
    responseJob: '前端负责人',
    projectTime: '2021.06 - 2021.08',
    projectDescription: (
      <>
        南邮小程序，是
        <a className='hypelink' href="https://qingyou.njupt.edu.cn/" target="_blank">青柚工作室</a>
        为师生提供课表，晨跑，一卡通，成绩查询，场地预约等功能的小程序，日活用户数突破1000万，月活用户1W+。
      </>
    ),
    projectList: [
      '重构校园资讯模块、登录逻辑、图书馆等功能，负责用户反馈Oncall',
      '业务代码模块化，UI 与业务逻辑解耦，基于IoC 对于业务代码进行统一封装使用。对于请求缓存，状态管理，日志跟踪实现封装',
    ],
    techStack: ['React', 'TypeScript', 'Taro', 'Redux-toolkit'],
  }
];

interface ProjectType {
  projectName: string;
  responseJob: string; // 责任角色
  projectTime: string; // 项目时间
  projectDescription: React.ReactNode; // 修改为 ReactNode 类型
  projectList: string[]; // 项目细节列表
  techStack: string[]; // 修改为数组
}

interface ProjectItemProps {
  projectName: string;
  responseJob: string;
  projectTime: string;
  projectDescription: React.ReactNode; // 修改为 ReactNode 类型
  projectList: string[];
  techStack: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ projectName, responseJob, projectTime, projectDescription, projectList, techStack }) => {
  return (
    <div className="project-item">
      <div className="project-header">
        <div className="project-name">{projectName}</div>
        <div className="response-job">{responseJob}</div>
        <div className="project-time">{projectTime}</div>
      </div>
      <div className="project-description">{projectDescription}</div>
      <ul className="project-details">
        {projectList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="techStack">
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>技术栈：</span>
        {techStack.map((stack, index) => {
          return <div key={index} className="stack">{stack}</div>;
        })}
      </div>
    </div>
  );
};

const Project: React.FC = () => {
  return (
    <div className="con">
      <div className="basic-info">
        项目经历
        <div className="title">PROJECT EXPERIENCE</div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
