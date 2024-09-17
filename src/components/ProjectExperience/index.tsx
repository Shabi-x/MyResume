import React from 'react';
import './index.scss';

const projectList = [
  {
    projectName: '南邮小程序',
    responseJob: '前端负责人',
    projectTime: '2023.07 - 至今',
    projectDescription: (
      <>
        南邮小程序，是
        <a className='hypelink' href="https://qingyou.njupt.edu.cn/" target="_blank">青柚工作室</a>
        为师生提供课表，晨跑，一卡通，成绩查询，场地预约，电费充值等功能而开发的微信小程序，日活用户1W+。
      </>
    ),
    projectList: [
      '开发业务模块：校园资讯（富文本渲染，文件预览，列表无限滚动）、重新搭建登录逻辑、重构图书馆、消息盒子等模块；根据全校师生反馈及时Oncall；',
      '业务代码模块化：将UI 与业务逻辑解耦；基于IoC 对于业务代码进行统一封装使用。对于请求缓存，状态管理，日志跟踪实现封装',
      '拥抱Taro4.0版本升级，部分模块引入CompileMode提升运行时性能；'
    ],
    techStack: ['React', 'TypeScript', 'Taro', 'Redux-toolkit'],
  },
  {
    projectName: '南邮年度报告单',
    responseJob: '前端负责人',
    projectTime: '2024.02 - 2024.03',
    projectDescription: '南邮年度报告单，是一款汇总南京邮电大学本科生日常数据的H5应用，通过前端技术实现复杂的动画和交互逻辑，在年末用户回顾汇总数据时沉浸，流畅的视、听、交互体验；',
    projectList: [
      '设计并使用CSS动画、过渡实现了较为复杂的2D， 3D动画效果；',
      '基于vw/rem/clamp方案处理移动端适配问题，有效解决不同机型的尺寸适配问题。',
      '引入FontFaceObserver，封装usePreLoadImage，usePreloadFonts等hook，实现静态资源预加载，避免在静态资源未加载完成时影响页面呈现，改善用户体验。',
      '将老旧的npm/webpack项目基于pnpm/Vite重新搭建，提升构建、热更新速度，优化开发体验。'
    ],
    techStack: ['React', 'TypeScript', 'Lottie', 'Vite'],
  }
];

interface ProjectType {
  projectName: string;
  responseJob: string;
  projectTime: string;
  projectDescription: React.ReactNode;
  projectList: string[];
  techStack: string[];
}

interface ProjectItemProps {
  projectName: string;
  responseJob: string;
  projectTime: string;
  projectDescription: React.ReactNode;
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
          <li key={index}>{index + 1}. {item}</li>
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
