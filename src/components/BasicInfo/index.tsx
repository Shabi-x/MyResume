import React from "react";
import "./index.scss";

const BasicInfo = () => {
  return (
    <div className="person">
      <div className="person-info">
        <div className="name">梁少峻</div>
      </div>
      <div className="basic-info-title">
        基本信息
        <div className="title">Basic Information</div>
      </div>
      <div className="information">
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            教育背景：
          </span>
          南京邮电大学 本科 2022.09~2026.06
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            联系方式：
          </span>
          15896498034
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            在读专业：
          </span>
          软件工程
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            个人邮箱：
          </span>
          b22042219@njupt.edu.cn
        </div>
        <a href="https://github.com/Shabi-x" className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Github：</span>
          <span className="link">https://github.com/Shabi-x</span>
        </a>
        <a href="https://shabix.fun" className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            个人主页：
          </span>
          <span className="link">https://me.shabix.fun</span>
        </a>
        <div className="info-item-long" style={{fontWeight: "300"}}>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            其余经历：
          </span>
          青柚工作室主席团，计软院科协主席团、讲师；大学生英语能力竞赛国三；多次参与青柚技术分享会，进行编程领域知识分享；
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
