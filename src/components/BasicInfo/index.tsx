import React from 'react';
import './index.scss';

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
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>教育背景：</span>
          南京邮电大学 本科 2026年毕业
        </div>
        <div className="info-item">
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>联系方式：</span>
          15896498034
        </div>
        <div className="info-item">
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>在读专业：</span>
          软件工程
        </div>
        <div className="info-item">
          <span style={{ fontWeight: 'bold', fontSize: '18px' }}>个人邮箱：</span>
          b22042219@njupt.edu.cn
        </div>

      </div>
    </div >
  );
};

export default BasicInfo;