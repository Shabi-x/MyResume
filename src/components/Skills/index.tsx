import React from "react";
import "./index.scss";

interface Achievement {
  title: string;
  time: string;
}

const achievements: Achievement[] = [
  {
    title: "全国大学生电子设计竞赛<strong>全国一等奖</strong>、C题<strong>全国第一</strong>",
    time: "2023.09"
  },
  {
    title: "全国大学生电子设计竞赛模拟系统设计专题邀请赛<strong>全国一等奖</strong>（<strong>全国仅13队</strong>获此荣誉）",
    time: "2024.09"
  },
  {
    title: "全国大学生嵌入式系统与设计竞赛FPGA创新赛道<strong>全国一等奖</strong>",
    time: "2024.12"
  },
  {
    title: "全国大学生嵌入式系统与设计竞赛芯片应用赛道全国三等奖",
    time: "2024.08"
  }
];

const Skills = () => {
  return (
    <div className="con">
      <div className="basic-info">
        获奖情况
        <div className="title">Achievements</div>
      </div>
      <ul className="skills">
        {achievements.map((item, index) => (
          <li key={index} className="skill">
            ➢ <span dangerouslySetInnerHTML={{ __html: item.title }} /> <span className="time">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
