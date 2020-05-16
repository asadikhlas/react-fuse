import React from 'react';
import colors from 'components/colors';
const IconCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 13.496 13.496">
            <circle cx="6.748" cy="6.748" r="6.748" fill={props.fill} />
        </svg>
    );
}
IconCircle.defaultProps = {
    width: '14px',
    height: '14px',
    fill: colors.green,
}
export { IconCircle };