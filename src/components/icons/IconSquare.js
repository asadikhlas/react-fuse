import React from 'react';
const IconSquare = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox={"0 0 " + parseInt(props.width) + " " + parseInt(props.height)}>
            <rect width={props.width} height={props.height} rx={2} fill={props.fill} />
        </svg>
    
    );
}
IconSquare.defaultProps = {
    width: '14px',
    height: '14px',
    fill: 'gold',
}
export { IconSquare };