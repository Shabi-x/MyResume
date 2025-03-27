import React from "react";
import "./index.scss";
import kuaishouLogo from "../../logo/kuaishou.png";
// 定义实习经历类型
interface InternShipType {
  time: string;
  company: string;
  job: string;
  commpanyLogoUrl: string;
  discription: string;
  workContent: string[];
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
}
const mock: InternShipType[] = [
  {
    time: "2023全国大学生电子设计竞赛",
    company: "基于C2000系列DSP的高精度LCR表",
    job: "（四天三夜）",
    commpanyLogoUrl: kuaishouLogo,
    discription:
      "本系统是由DDS模块、低噪声放大器、自主平衡电路放大器、仪表放大器、C2000 DSP开发板、电源板等几部分组成的LCR表。",
    workContent: [
      "主要技术路线：DDS模块产生频率为100kHz的正弦波作为测量频率，经低噪声放大器放大，接入自主平衡电路，将流经被测元件的电流转化为电压，由仪表放大器精确测量出这一电压以及被测元件两端的电压的值抬升后交由c2000进行计算。",
      "负责工作：负责C2000的外设驱动以及算法编写——控制DDS信号源出波作为测量激励源；采用针对小信号的鉴频算法——IQ自平衡相干算法+等效采样，完美实现题目要求指标的同时尽可能压缩硬件消耗，系统简洁实用。",
      "所获成果：2023全国大学生电子设计竞赛国家级一等奖、C题全国第一",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Antd",
      "Antd Mobile",
      "Vite",
      "Workspace",
    ],
  },
  {
    time: "2024全国大学生电子设计竞赛模拟系统设计专题邀请赛",
    company: "自动音量控制D类功放",
    job: "（两天一夜） ",
    commpanyLogoUrl: kuaishouLogo,
    discription:
      "本系统是具有自动音量控制功能的D类音频功率放大器，可以对100HZ-30KHZ频率范围、40mVrms-2Vrms的音频信号进行放大和功率输出。",
    workContent: [
      "主要技术路线：以MSPM0G3507mcu为核心，通过对功率放大器进行精确的控制，实现自动增益、输出功率程控。整个系统除了MCU外只使用了一块外置功放芯片",
      "负责工作：负责MSPM0的外设驱动以及算法编写——充分利用片上模拟外设—片上比较器外加衰减器实现ADC前端自增益；片上比较器将信号转方波进行等精度测频；前馈数字AGC算法，实现可控衡功率输出。",
      '所获成果：2024全国大学生电子设计竞赛模拟系统设计专题邀请赛国家级一等奖'
    ],
    techStack: [
      "React",
      "TypeScript",
      "Antd",
      "Antd Mobile",
      "Vite",
      "Workspace",
    ],
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
}) => {
  return (
    <div>
      <div className="item-header">
        <div className="time">{time}</div>
        <div className="company">{company}</div>
        <div className="job">{job}</div>
        {/* <img src={commpanyLogoUrl} className="company-logo" /> */}
      </div>
      <div className="discription">
        <div className="detail">
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>简介：</span>
          {discription}
        </div>
        {workContent.map((content, index) => (
          <div key={index} className="discription-line">
            <div className="circle">{index + 1}</div>
            {content}
          </div>
        ))}
      </div>
      {/* <div className="techStack">
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>技术栈：</span>
        {techStack.map((stack, index) => {
          return (
            <div key={index} className="stack">
              {stack}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

const InternShip: React.FC = () => {
  return (
    <div className="con">
      <div className="basic-info">
        比赛经历
        <div className="title">Competition Experience</div>
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
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};

export default InternShip;
