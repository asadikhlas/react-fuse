import React from 'react';
const ScanSiteItem = (props) => {
    return (<div className="item">
    <div className="site">
      <a href={props.link}>{props.title}</a>
      <span>{props.proccessIndex}/{props.proccessTotal}</span>
    </div>

    <div className="address">
      <span>{props.address}</span>
    </div>

    <div className="init-time">
      <div className="left">
        <font>Initiated</font>
        <span>{props.initDate}</span>
      </div>

      <div className="right">
        <font>Last Analysis</font>
        <span>{props.lastAnalysisDate}</span>
      </div>
    </div>

    <div className="process-cont">
      <div className="process-bar">
        <div style={{width: props.processCount + '%'}}></div>
      </div>
      <span>{props.processCount}%</span>
    </div>

  </div>)
}
export default ScanSiteItem