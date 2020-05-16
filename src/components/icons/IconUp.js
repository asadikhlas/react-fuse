import React from 'react';
import colors from 'components/colors';
const IconUp = (props) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 7.749 3.919">
    <g transform="translate(-402.233 -1707.359)">
      <path d="M409.89,1711.187a.309.309,0,0,1-.228.091h-1.053a.761.761,0,0,1-.336-.061A1.108,1.108,0,0,1,408,1711l-1.892-1.953L404.216,1711a1.107,1.107,0,0,1-.274.213.761.761,0,0,1-.336.061h-1.053a.313.313,0,0,1-.32-.32.507.507,0,0,1,.137-.305l2.96-3.051a.812.812,0,0,1,.5-.243h.549a.752.752,0,0,1,.488.243l2.974,3.051a.458.458,0,0,1,.138.305A.311.311,0,0,1,409.89,1711.187Z" fill={props.fill} />
    </g>
  </svg>
  
  );
}
IconUp.defaultProps = {
    width: '7.749',
    height: '3.919',
    fill: colors.red,
}
export { IconUp };