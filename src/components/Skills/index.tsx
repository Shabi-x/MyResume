import './index.scss';
type SkillsProps = Array<string>;
const mock: SkillsProps = [
  '掌握HTML,CSS,JS/TS/NodeJS，基础扎实；了解React内部实现，能熟练使用React/Vue生态工具链开发；',
  '具备扎实的工程化能力，对主流构建工具，包管理器有关注、优劣比较以及项目依赖版本升级实践；',
  '有规范前端工作流、配置例如ESLint、Prettier、Commitlint、Husky的经验;',
  '熟悉常用Git命令，具备丰富的团队协作开发经历，有分支管理，版本回退的经验；',
  '对基础的Web-Vitals等前端性能指标有一定的认识和了解；',
  '了解Taro、Tauri、ReactNative等跨端方案，有一定开发经验；',
  '英文能力CET6，能熟练阅读英文技术文档，关注前端开源社区、论坛，保持对前端新技术的热爱；'
];
const Skills = () => {
  return (
    <div className="con">
      <div className="basic-info">
        相关技能
        <div className="title" >Skills</div>
      </div>
      <ul className="skills">
        {mock.map((item, index) => (
          <li key={index} className="skill">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;