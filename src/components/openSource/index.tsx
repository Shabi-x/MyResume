import "./index.scss";

type SkillsProps = Array<string>;
const mock: SkillsProps = [
  "参与字节跳动VisActor可视化开源大赛，通过阅读VChart/VTable源码，贡献VTable场景树模块、VChart-theme，VChart-plugins 源码解析文档共10篇；",
  "活跃于前端开源社区，为Semi-Design，TDesign等开源组件库解决issue，贡献pr数达10+；",
];
const OpenSource = () => {
  return (
    <div className="con">
      <div className="basic-info">
        开源经历
        <div className="title">Open Source Experience</div>
      </div>
      <div className="openSource">
        {mock.map((item, index) => (
          <div key={index} className="discription-line">
            <div className="circle">{index + 1}</div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSource;
