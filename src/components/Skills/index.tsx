import React from 'react';
import './index.scss';
type SkillsProps = Array<string>;
const mock: SkillsProps = [
  '掌握HTML,CSS,JS/TS，基础扎实；了解React内部实现，能熟练使用React生态工具链开发;',
  '具备扎实的工程化能力，对主流构建工具，包管理器有一定认知，比较与实践；对常见模块化规范，有前端工作流配置经验;',
  '熟悉常用Git命令，能熟练进行团队协作开发;',
  '了解Taro、Tauri、ReactNative等跨端方案，有一定开发经验;',
  '英文能力CET6 ，能熟练阅读英文技术文档，关注国内外论坛了解前端新技术变化方向；'
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
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;;;;;;;;;