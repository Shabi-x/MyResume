import React from "react";
import qingyouLogo from "../../logo/qingyou.png";

import "./index.scss";

const projectList = [
  {
    projectName: "南邮小程序",
    responseJob: "（前端负责人）",
    projectTime: "2023.07 - 至今",
    projectDescription:
      "南邮小程序(官方用名“南京邮电大学”)，是青柚工作室为师生提供课表，晨跑，一卡通，成绩查询，场地预约等功能而开发的微信小程序，日活用户1W+。",
    projectList: [
      "开发业务：校园资讯（利用dangerouslySetInnerHTML实现小程序富文本渲染、附件预览）；针对微信丢失、本硕连读用户账号变更问题搭建用户解绑页，设计使用状态控制动画的思路实现登录过程中复杂的动画效果；利用IntersectionObserver实现校园资讯页列表无限滚动；仿照豆瓣UI重构图书馆模块，实现对于书籍详细信息，图书馆藏，借阅记录的查阅；开发消息盒子通知等模块；",
      "业务代码模块化：将UI层与业务逻辑层解耦，实现数据驱动与UI渲染的分离；实现pendingCacheQueue对于请求做缓存优化，状态管理、接入了redux-logger中间件，实现日志跟踪实现封装；",
      "工程化配置：推动使用pnpm管理，依赖升级，配置代码风格规范；积极拥抱Taro 3.6/4.0更新，不断优化师生日常使用体验；",
      "同时担任企业微信侧南邮小程序客服，根据全校师生反馈问题思考解决方案，及时Oncall；",
    ],
    techStack: ["React18", "TypeScript", "Taro4.0", "Redux-toolkit", "pnpm"],
    link: "https://qingyou.njupt.edu.cn/",
  },
  // {
  //   projectName: "南邮年度报告单",
  //   responseJob: "（前端负责人）",
  //   projectTime: "2024.02 - 2024.03",
  //   link: " https://wechat.njupt.edu.cn/topic2024/",
  //   projectDescription:
  //     "南邮年度报告单，是一款汇总南京邮电大学本科生日常数据的H5应用，通过前端技术实现复杂的动画和交互逻辑，在年末用户回顾汇总数据时沉浸，流畅的视、听、交互体验；",
  //   projectList: [
  //     "实现高性能的CSS动画（keyframes，伪元素）实现了较为复杂的2D， 3D动画交互效果，根据翻页变量控制动画显隐时机；",
  //     "基于vw/rem/clamp方案处理移动端适配问题，有效解决不同机型的尺寸适配问题；",
  //     "引入FontFaceObserver，封装usePreLoadImage，usePreloadFonts等hook，实现静态资源预加载，避免在静态资源未加载完成时影响页面呈现，改善用户体验；",
  //     "将老旧的npm/webpack项目基于pnpm/Vite重新搭建，提升构建、热更新速度，优化包管理体验 ；",
  //   ],
  //   techStack: ["React", "TypeScript", "SCSS", "Lottie", "Vite"],
  // },
];

interface ProjectItemProps {
  projectName: string;
  responseJob: string;
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
        <div className="response-job">{responseJob}</div>
        <a className="link" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        <div className="project-time">{projectTime}</div>
      </div>
      <div className="project-description">{projectDescription}</div>
      <ul className="project-details">
        {projectList.map((item, index) => (
          <li key={index}>
            {index + 1}. {item}
          </li>
        ))}
      </ul>
      <div className="techStack">
        <div style={{ fontWeight: "bold", fontSize: "18px" }} className="techStack-title">技术栈：</div>
        {techStack.map((stack, index) => {
          return (
            <div key={index} className="stack">
              {stack}
            </div>
          );
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
        <div className="title">Project Experience</div>
        <img src={qingyouLogo} className="company-logo" />
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
