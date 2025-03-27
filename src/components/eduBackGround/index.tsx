import React from "react";
import "./index.scss";

interface SchoolInfo {
  period: string;
  university: string;
  college: string;
  major: string;
  details: {
    [key: string]: string;
  };
  honors: string;
}

const schoolInfo: SchoolInfo = {
  period: "2022.09-2026.06",
  university: "南京邮电大学（双一流）",
  college: "通信与信息工程学院",
  major: "电子信息工程",
  details: {
    "学分绩点": "3.86",
    "综测排名": "3/269 （1.11%）",
    "英语能力": "CET6（485） 、 CET4（580）"
  },
  honors: "校长嘉奖令、三好学生、校一等奖学金、烽火通信奖学金等"
};

const Education = () => {
  return (
    <div className="con">
      <div className="basic-info">
        教育背景
        <div className="title">Education Background</div>
      </div>
      <div className="school-period">
        <div className="period">{schoolInfo.period}</div>
        <div className="university">{schoolInfo.university}</div>
        <div className="college-major">
          {schoolInfo.college} | {schoolInfo.major}
        </div>
      </div>
      <div className="school-info">
        {Object.entries(schoolInfo.details).map(([key, value], index) => (
          <div key={index} className="info-item">
            <span className="info-key" style={{ fontWeight: "bold", fontSize: "18px" }}>{key}：</span>
            <span className="info-value" style={{ fontSize: "18px" }}>{value}</span>
          </div>
        ))}
        <div className="info-item">
          <span className="info-key" style={{ fontWeight: "bold", fontSize: "18px" }}>主要荣誉：</span>
          <span className="info-value" style={{ fontSize: "18px" }}>{schoolInfo.honors}</span>
        </div>
      </div>
    </div>
  );
};

export default Education;
