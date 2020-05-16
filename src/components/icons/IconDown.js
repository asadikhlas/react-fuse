import React from 'react';
import colors from 'components/colors';
const IconDown = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 8.944 4.525">
              <g transform="translate(-831.213 -638.193)">
                <g>
                  <path d="M840.157,638.563a.531.531,0,0,1-.159.352l-3.433,3.521a.872.872,0,0,1-.563.282h-.634a.945.945,0,0,1-.581-.282l-3.416-3.521a.581.581,0,0,1-.158-.352.361.361,0,0,1,.369-.37H832.8a.88.88,0,0,1,.388.07,1.3,1.3,0,0,1,.317.247l2.183,2.253,2.183-2.253a1.277,1.277,0,0,1,.317-.247.88.88,0,0,1,.388-.07h1.214a.362.362,0,0,1,.37.37Z" fill={props.fill} />
                </g>
              </g>
            </svg>);
}
IconDown.defaultProps = {
  width: "8.944",
  height: "4.525",
  fill: colors.gold,
}
export { IconDown };