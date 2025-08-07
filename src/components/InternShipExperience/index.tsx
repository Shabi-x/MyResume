import React from "react";
import "./index.scss";
import kuaishouLogo from "../../logo/kuaishou.png";
import tencentLogo from "../../logo/tencent.png";

// 高亮关键词数组
const highlightKeywords = [
  // 技术栈
  "sheetjs/XLSX", "file-saver", "ResizeObserver", "intersectionObserver",
  
  // 业务术语
  "EventBus", "Wujie","Wujie微前端",
  
  // 技术概念
  "双栈数据结构", "不同分辨率设备上保持原始空间比例关系", "虚拟列表", "双列瀑布流", "无限滚动",
  "webworker线程", "二进制数据", "批量精准搜索能力", "支持与或逻辑的级联选择器",
  
  // 数字和成果
  "14个", "4个", "50%", "0到1",
  
  // 业务关键词
  "AI Agent", "语言国际化", "主题个性化", "腾讯游戏-流量生态部-游戏广告投放", "按页面维度", "渐进式技术栈升级", "子应用销毁、权限控制、跨应用通信",
  "批量精准搜索", "与或级联选择器"
];

// 文本高亮处理函数
const highlightText = (text: string): React.ReactNode => {
  if (!text) return text;
  
  // 创建正则表达式，匹配所有关键词
  const regex = new RegExp(`(${highlightKeywords.map(keyword => 
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // 转义特殊字符
  ).join('|')})`, 'gi');
  
  // 分割文本并处理高亮
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    // 检查是否为关键词（忽略大小写）
    const isKeyword = highlightKeywords.some(keyword => 
      keyword.toLowerCase() === part.toLowerCase()
    );
    
    return isKeyword ? (
      <strong key={index} style={{ fontWeight: '400' }}>{part}</strong>
    ) : (
      part
    );
  });
};

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
      "参与腾讯游戏-流量生态部-游戏广告投放业务线大O2流量池项目的开发、维护工作；该项目面向腾讯游戏下属各个工作室部门、代投商，提供腾讯游戏实现媒体买量、内容带量实现用户增长的一套集投放策略制定、素材审核、广告投放、广告数据归因为一体的广告投放平台；",
      "实习期间深度参与素材中心、数据中心、媒体中心等模块的建设、迭代工作：共计完成产品迭代需求单14个、同时负责沉淀多个flux-Component业务组件以提升研效，共计沉淀公共组件4个；并积极参与AI Agent开发能力落地的探索与实践；"
    ],
    workTechContent: [
      "优化素材审批拒绝流程：基于fabricjs，进一步搭建了素材审批拒绝流程中的多颜色、多画笔工具在图片广告素材、视频素材当前帧的画笔标注能力；封装useMarkTool实现核心交互逻辑，包括通过ResizeObserver实时监听容器尺寸变化，结合动态计算的比例变换矩阵(xRatio/yRatio)实现坐标系统映射，确保标注(自由画笔、矩形、椭圆)在不同分辨率设备上保持原始空间比例关系；采用双栈数据结构(prevList/nextList)管理画布状态快照，支持多步操作的撤销/重做功能。",
      // "基于Tdesign沉淀公共组件并落地业务使用：通过埋点系统定位媒体中心查询二级媒体时的点击占比数据，提出并封装了flux-mutiple-search，实现了对于二级媒体批量精准搜索能力；封装flux-cascader-logic组件，在媒体中心、素材中心落地了支持与或逻辑的级联选择器，丰富了个性标签、公共标签的查询逻辑；",
      // "日常迭代需求：基于flux-tag-upload+useProgress实现了模拟上传、录入进度的素材补打标签面板；参照文档配置化的重构了数据中心-巨量引擎数据看板；展示素材批量上传实时进度+强化空提示，优化素材中心批量上传的使用体验；基于EventBus+wujie，实现了简单的主/子应用之间的路由跳转。",
      // 尝试引入Nx解决大仓缺少的按需构建子仓库+依赖可视化；
      "工程化驱动架构升级：采用Wujie微前端框架，由原有历史项目作为基座应用负责登录鉴权与Layout设计，子应用按页面维度渐进式完成由Vue2到Vue3的升级，同时处理了开发过程中应对Wujie保活+预渲染模式带来的如子应用销毁控制、跨应用通信问题等；",
      "持续贡献组内O2流量前端组件库，以TDesign替换此前基于Elementui封装的混乱的依赖组件库，封装批量精准搜索组件和与或级联选择器等业务组件，特定场景可基于配置快速迭代；周期配合设计走查从而提升视觉、交互一致性、降低异地协作沟通成本；",
      "探索基于express+openai搭建简单的node服务，包括mcp tools自主调用能力+维护业务枚举+prompt调整，实现了基于需求tapd链接/markdown文档转json配置的能力，为组内下半年O2规划快速搭建广告数据看板提供了更多元的配置生成方案",
    ],
    techStack: ["Vue2.7/3.4", "TypeScript", "Nodejs/Express", "TDesign", "Wujie微前端", "Monorepo","PNPM+Nx" ],
  },
  {
    time: "2024.07 - 2024.11",
    company: "快手（北京海淀) |  企业应用部 - 财务研发组",
    job: "前端开发实习生",
    commpanyLogoUrl: kuaishouLogo,
    discription: "",
    workContent: [
      "独立负责快手财务部门多个ToB系统包括企业权限中台，财务核销平台等后台管理系统；协助完成快手金融主页、企业员工用车报告的页面开发；协助开发Kim内置应用快手差旅应用，简化了快手员工差旅、酒店账单预定、管理、报销流程；独立从0到1搭建了供应商发票协同系统，完善了与供应商之间补充发票的流程链路；独立从无到有的搭建了铁豆项目（移动端H5），实现了差旅报销金额到虚拟货币铁豆的兑换、购买商品的流程；接触并熟悉了企业级项目从需求评审、业务开发、提测、自测和上线的整个流程；",
    ],
    workTechContent: [
      "基于sheetjs/XLSX+file-saver等库，利用让主线程将二进制数据直接转移给子线程计算的方式优化了原有的海量数据需求下的excel报表导出功能，大大减少了导出所需等待的时间；",
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
        <div className="job">{job}</div>
        <div className="company">{company}</div>
        <div className="time">{time}</div>
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
            <div className="content-text">{highlightText(content)}</div>
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
            <div className="content-text">{highlightText(content)}</div>
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
