import React from "react";
import "./index.scss";
import kuaishouLogo from "../../logo/kuaishou.png";
// 定义实习经历类型
interface InternShipType {
  time: string;
  company: string;
  job:
    | "前端开发实习生"
    | "前端开发工程师"
    | "后端开发实习生"
    | "后端开发工程师";
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
    time: "2024.07 - 2024.11",
    company: "快手（北京海淀) |  企业应用部",
    job: "前端开发实习生",
    commpanyLogoUrl: kuaishouLogo,
    discription:
      "实习期间负责快手B端业务包括 规则权限中台，核算、供应商协同，C端业务包括快手差旅铁豆项目等快手内部员工系统的需求评审，项目开发，历史项目修补迭代;",
    workContent: [
      "阅读PRD文档，独立对接业务需求，完成多个产品需求迭代；接手并修复项目中的历史遗留问题",
      "使用TS基本特性以及类型工具定义接口数据类型，使得代码结构更清晰，易于团队协作，维护；",
      "通过学习KIM-yoda客户端桥搭方案，封装相关组件，编写相关文档利于后续的维护和迭代，搭建差旅铁豆项目；",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Antd",
      "Antd Mobile",
      "Vite",
      "Workspace",
    ],
  },
];

const InternShipItem: React.FC<InternShipItemProps> = ({
  time,
  company,
  job,
  commpanyLogoUrl,
  discription,
  workContent,
  techStack,
}) => {
  return (
    <div>
      <div className="item-header">
        <div className="time">{time}</div>
        <div className="company">{company}</div>
        <div className="job">{job}</div>
        <img src={commpanyLogoUrl} className="company-logo" />
      </div>
      <div className="discription">
        <div className="detail">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>简介：</span>
          {discription}
        </div>
        {workContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">{index + 1}</div>
            {content}
          </div>
        ))}
      </div>
      <div className="techStack">
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>技术栈：</span>
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
