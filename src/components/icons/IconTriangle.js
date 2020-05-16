import React from 'react';
import colors from 'components/colors';
const IconTriangle = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 14.017 14.005">
        <g transform="translate(-889.754 -1046.035)">
            <path d="M896.763,1060.04h-5.341a1.861,1.861,0,0,1-1.442-2.78l2.67-5.149,2.671-5.149a1.585,1.585,0,0,1,2.884,0l2.67,5.149,2.671,5.149a1.861,1.861,0,0,1-1.442,2.78Z" fill={props.fill} />
        </g>
    </svg>);
}
IconTriangle.defaultProps = {
    width: '14px',
    height: '14px',
    fill: colors.red,
}
export { IconTriangle };