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
    time: '2024.07 - 2024.11',
    company: '快手（北京海淀) |  企业应用部',
    job: '前端开发实习生',
    commpanyLogoUrl: kuaishouLogo,
    discription: '实习期间负责快手内部ToB业务包括采购平台，规则权限中台，核算、发票平台等系统的搭建，开发，迭代；',
    workContent: [
      '阅读PRD文档，独立对接业务需求，完成多个产品需求迭代；接手并修复项目中的历史遗留问题',
      '使用TS基本特性以及类型工具定义接口数据类型，使得代码结构更清晰，易于团队协作，维护；',
    ],
    techStack: ['React', 'TypeScript', 'Ant Design', 'Vite'],
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
        <div className="detail"><span style={{ fontWeight: 'bold', fontSize: '18px' }}>简介：</span>{discription}</div>
        {workContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">
              {index + 1}
            </div>{content}</div>
        ))}
      </div>
      <div className="techStack">
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>技术栈：</span>
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
