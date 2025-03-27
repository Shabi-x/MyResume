import React from "react";
import "./index.scss";

const BasicInfo = () => {
  return (
    <div className="person">
      <div className="person-info">
        <div className="name">徐立铭</div>
        <div className="avatar" />
      </div>

      <div className="basic-info-title">
        基本信息
        <div className="title">BASIC INFO</div>
      </div>
      <div className="information">
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            本科院校：
          </span>
          南京邮电大学
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            在读专业：
          </span>
          电子信息工程
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            政治面貌：
          </span>
          中共预备党员
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            籍
            <span
              style={{ fontWeight: "bold", fontSize: "18px", opacity: "0" }}
            >
              籍贯
            </span>
            贯：
          </span>
          江苏无锡
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            民
            <span
              style={{ fontWeight: "bold", fontSize: "18px", opacity: "0" }}
            >
              民族
            </span>
            族：
          </span>
          汉
        </div>
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            联系方式：
          </span>
          13616164276
        </div>
  
        <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            个人邮箱：
          </span>
          xlimg@proton.me
        </div>

        <div className="info-item-long">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            其余经历：
          </span>
          通院科协电子部高干、讲师
        </div>
        <div className="info-item-long">
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>获得荣誉：</div>
          2023全国大学生电子设计竞赛全国一等奖、C题全国第一<br></br>
          2024全国大学生电子设计竞赛模拟系统设计专题邀请赛全国一等奖<br></br>
          2024全国大学生嵌入式系统设计竞赛国家三等奖
        </div>
        {/* <div className="info-item">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            求职意向：
          </span>
          FPGA工程师/嵌入式软件/硬件工程师
        </div> */}
      </div>
    </div>
  );
};

export default BasicInfo;
