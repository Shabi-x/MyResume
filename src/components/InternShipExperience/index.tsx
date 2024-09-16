import React from 'react';
import './index.scss';
import kuaishouLogo from '../../logo/kuaishou.png';
import qingyouLogo from '../../logo/qingyou.png';
// 定义实习经历类型
interface InternShipType {
  time: string;
  company: string;
  job: "前端开发实习生" | "前端开发工程师" | "后端开发实习生" | "后端开发工程师";
  commpanyLogoUrl: string;
  discription: string;
  workContent: string[];
  techStack: string[];
}
interface InternShipItemProps {
  time: string;
  company: string;
  job: string;
  commpanyLogoUrl: string;
  discription: string;
  workContent: string[];
  techStack: string[];
}
const mock: InternShipType[] = [
  {
    time: '2019.07-2024.09',
    company: '富士康 | 货物搬运工',
    job: '前端开发实习生',
    commpanyLogoUrl: qingyouLogo,
    discription: '负责前端开发，主要负责项目的前端开发，包括前端页面的设计、开发、测试、上线等工作。',
    workContent: [
      '利用HTML、CSS、JavaScript、jQuery、Bootstrap等技术进行前端页面利用HTML、CSS、JavaScript、jQuery、Bootstrap等技术进行前端页面',
      '使用React、Vue、Angular等框架进行前端项目的开发',
    ],
    techStack: ['React', 'Antd', 'Redux', 'Swagger'],
  },
  {
    time: '2023.07 - 至今',
    company: '胖东来 | 前端架构组',
    job: '前端开发实习生',
    commpanyLogoUrl: kuaishouLogo,
    discription: '负责前端页面的开发，主要负责项目的前端开发，包括前端页面的设计、开发、测试、上线等工作。',
    workContent: [
      '利用HTML、CSS、JavaScript、React、jQuery、Bootstrap等技术进行前端页面',
      '使用React、Vue、Angular等框架进行前端项目的开发',
      '使用Webpack、Babel等工具进行前端项目的构建',
      '使用Jest、Mocha等测试框架进行前端项目的测试',
    ],
    techStack: ['React', 'TS', 'Monorepo', 'Vite'],
  }
];

const InternShipItem: React.FC<InternShipItemProps> = ({ time, company, job, commpanyLogoUrl, discription, workContent, techStack }) => {
  return (
    <div>
      <div className="item-header">
        <div className="time">{time}</div>
        <div className="company">{company}</div>
        <div className="job">{job}</div>
        <img src={commpanyLogoUrl} className="company-logo" />
      </div>
      <div className="discription">
        <div className="detail"><span style={{ fontWeight: 'bold', fontSize: '12px' }}>简介：</span>{discription}</div>
        {workContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">
              {index + 1}
            </div>{content}</div>
        ))}
      </div>
      <div className="techStack">
        <span style={{ fontWeight: 'bold', fontSize: '12px' }}>技术栈：</span>
        {techStack.map((stack, index) => {
          return <div key={index} className="stack">{stack}</div>;
        })}</div>
    </div >
  );
};

const InternShip: React.FC = () => {
  return (
    <div className="con">
      <div className="basic-info">
        实习经历
        <div className="title">INTERNSHIP EXPERIENCE</div>
      </div>
      {mock.map((item, index) => (
        <InternShipItem
          key={index}
          time={item.time}
          company={item.company}
          job={item.job}
          commpanyLogoUrl={item.commpanyLogoUrl}
          discription={item.discription}
          workContent={item.workContent}
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};

export default InternShip;
