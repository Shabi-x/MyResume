import React from "react";
import "./index.scss";
import kuaishouLogo from "../../logo/kuaishou.png";
import tencentLogo from "../../logo/tencent.png";
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
  workTechContent: string[];
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
  workTechContent: string[];
}
const mock: InternShipType[] = [
  {
    time: "2025.04 - 至今",
    company: "腾讯（深圳南山) |  腾讯互动娱乐事业群 - 流量生态部",
    job: "前端开发实习生",
    commpanyLogoUrl: tencentLogo,
    discription: "",
    workContent: [
      "参与腾讯游戏 流量生态部 广告投放业务线大O2(国内版/海外版) 流量池项目的开发、维护工作；该项目面向腾讯游戏下属各个工作室部门、代投商，提供了腾讯游戏实现通过媒体买量、内容带量实现用户增长的一套集投放策略制定、素材审核、广告投放、数据归因为一体的一站式服务；实习期间深度参与素材中心、数据中心、媒体中心等模块的建设、迭代工作，同时负责沉淀多个flux-Component业务组件以提升研效，并积极参与AI Agent开发能力落地的探索与实践；",
    ],
    workTechContent: [
      "我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作",
      "我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作",
      "我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作",
      "我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作我做了一些工作",
    ],
    techStack: ["Vue2.7/3.4", "TypeScript", "TDesign", "Nuxt.js", "Wujie微前端", "Monorepo"],
  },
  {
    time: "2024.07 - 2024.11",
    company: "快手（北京海淀) |  企业应用部",
    job: "前端开发实习生",
    commpanyLogoUrl: kuaishouLogo,
    discription: "",
    workContent: [
      "独立负责快手财务部门多个ToB系统包括企业权限中台，财务核销平台等后台管理系统；协助完成快手金融主页、企业员工用车报告的页面开发；协助开发Kim内置应用快手差旅应用，简化了快手员工差旅、酒店账单预定、管理、报销流程；独立从0到1搭建了供应商发票协同系统，完善了与供应商之间补充发票的流程链路；独立从无到有的搭建了铁豆项目（移动端H5），实现了差旅报销金额到虚拟货币铁豆的兑换、购买商品的流程；接触并熟悉了企业级项目从需求评审、业务开发、提测、自测和上线的整个流程；",
    ],
    workTechContent: [
      "基于Sheetjs/XlSX+file-saver等库，利用让主线程将二进制数据直接转移给子线程计算的方式优化了原有的海量数据需求下的excel报表导出功能，大大减少了导出所需等待的时间；",
      "调研并利用WebWorker+开启虚拟列表优化海量数据表格背景下的核销系统的交互计算流程，将财务条目的数学计算托管至webworker线程，减少主线程阻塞，降低页面渲染交互的卡顿感；",
      "铁豆项目实现铁豆兑换本地商品的商品页需求中，实现双列瀑布流（解决方案：利用后端返回带图片高度的数据结构，将数组切分为两个高度之和最接近子数组的算法分成两列数据，再对两列分别使用Flex布局）+无限滚动（intersectionObserver）等展示布局效果；",
      "基于i18n和Antd个性化配置，实现供应商发票协同系统等的语言国际化，主题个性化；二次封装验证码校验等业务组件；",
    ],
    techStack: ["React18", "TypeScript", "Antdesign", "Antd Mobile", "Vite"],
  }
];

const InternShipItem: React.FC<InternShipItemProps> = ({
  time,
  company,
  job,
  commpanyLogoUrl,
  discription,
  workContent,
  techStack,
  workTechContent,
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
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            业务产出：
          </span>
          {discription}
        </div>
        {workContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">{index + 1}</div>
            {content}
          </div>
        ))}
        <div className="detail">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            技术产出：
          </span>
          {discription}
        </div>
        {workTechContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">{index + 1}</div>
            {content}
          </div>
        ))}
      </div>
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

const InternShip: React.FC = () => {
  return (
    <div className="con">
      <div className="basic-info">
        实习经历
        <div className="title">Intership Experience</div>
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
          workTechContent={item.workTechContent}
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};

export default InternShip;
