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
    time: "2024.07 - 2024.11",
    company: "快手（北京海淀) |  企业应用部",
    job: "前端开发实习生",
    commpanyLogoUrl: kuaishouLogo,
    discription: "",
    workContent: [
      "独立负责快手财务部门多个ToB系统包括企业权限中台，搭建包括表单填写，Excel文件快速导入、导出报表、批量提交等环节的三级审批流；、财务核销平台等后台管理系统；协助完成快手金融主页、企业员工用车报告的页面开发；协助开发Kim内置应用快手差旅应用，简化了快手员工差旅、酒店账单预定、管理、报销流程；独立从0到1搭建了供应商发票协同系统，完善了与供应商之间补充发票的流程链路；独立从无到有的搭建了铁豆项目（移动端H5），实现了差旅报销金额到虚拟货币铁豆的兑换、购买商品的流程；接触并熟悉了企业级项目从需求评审、业务开发、提测、自测和上线的整个流程；",
      // "深度参与组件库建设，自主设计并封装可复用的通用组件，如支持联动搜索的可编辑下拉框、条件筛选半屏组件等，提升团队研发效率；",
    ],
    workTechContent: [
      "基于Sheetjs/XlSX+file-saver等库，利用让主线程将二进制数据直接转移给子线程计算的方式优化了原有的海量数据需求下的excel报表导出功能，大大减少了导出所需等待的时间；",
      "调研并利用WebWorker+开启虚拟列表优化海量数据表格背景下的核销系统的交互计算流程，将财务条目的数学计算托管至webworker线程，减少主线程阻塞，降低页面渲染交互的卡顿感；",
      "铁豆项目实现铁豆兑换本地商品的商品页需求中，实现双列瀑布流（解决方案：利用后端返回带图片高度的数据结构，将数组切分为两个高度之和最接近的算法分成两列数据，再对两列分别使用Flex布局）+无限滚动（intersectionObserver）等展示布局效果；基于AntdMobile封装移动端的半屏升起、条件筛选等业务组件；",
      "基于i18n和Antd个性化配置，实现供应商发票协同系统等的语言国际化，主题个性化；二次封装验证码校验等业务组件；",
    ],
    techStack: ["React", "TypeScript", "Antd", "Antd Mobile", "Vite"],
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
