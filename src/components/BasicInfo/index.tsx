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
        <div className="title">BASIC INFO</div>
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
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Github：</span>
          https://github.com/Shabi-x
        </div>
        <div className="info-item-long">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            其余经历：
          </span>
          青柚工作室主席团，计软院科协主席团、讲师；数次获得社会优秀工作奖奖学金；大学生英语能力竞赛国三；
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
