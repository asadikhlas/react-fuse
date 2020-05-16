import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
	root: {
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut
    })
  }
}));

const LogoAlly = (props) => {
  const classes = useStyles();
  return (<svg className={clsx({root: classes.root}, props.className )}
    width={props.size}
    height={props.size}
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
      <defs>
        <clipPath id="clip-path">
          <rect style={{fill:'none'}} width={50} height={50} />
        </clipPath>
      </defs>
    <g style={{clipPath: 'url(#clip-path)'}}>
      <path style={{fill:'#e3211f'}} d="M25,50A25,25,0,1,0,0,25,25,25,0,0,0,25,50" />
      <path style={{fill:'#fff'}} d="M36.89,33.57a.87.87,0,0,0-.63-.23H32.54l0,.14v-20a.84.84,0,0,0-.85-.84H28.49a1.61,1.61,0,0,0-.88.25l-3.74,3a.81.81,0,0,0-.21,1.2l1,1.25c1-.89,1.67-.56,1.78-.72s.71-1.09,1-1,.18.7.18.7c.2-.24.54-.37.72-.23.34.28-.42,1.85-.4,3a21.73,21.73,0,0,0,.68,5.05,7.49,7.49,0,0,0,.71,1.23,5.6,5.6,0,0,1,1.55,2,4.45,4.45,0,0,1-.07,3c-.22.49-.55.19-.83-.7-.2-.62-.81-.68-1.39-.9.09.92-.52,6.21-.66,7.44a.81.81,0,0,0,.45.13h7.87a.87.87,0,0,0,.63-.23.76.76,0,0,0,.24-.57v-2.4a.76.76,0,0,0-.24-.57" />
      <path style={{fill:'#fff'}} d="M25.35,33.34h-4c-.19-1.66-.28-3.28-.29-4.25-.84,0-1.57,1.13-1.76.29,0-1.15,1.37-2.07,1.88-2.38a17.88,17.88,0,0,1,.68-3.15V13.52a.84.84,0,0,0-.84-.85H17.87a1.61,1.61,0,0,0-.88.25l-3.74,3a.81.81,0,0,0-.21,1.2l1.52,2a.77.77,0,0,0,.67.35.8.8,0,0,0,.53-.18l1.17-.94V36.48a.84.84,0,0,0,.84.84h7.59A.87.87,0,0,0,26,37.1a.75.75,0,0,0,.24-.57v-2.4a.76.76,0,0,0-.24-.56.87.87,0,0,0-.63-.23" />
    </g>
  </svg>);
}

LogoAlly.defaultProps = {
  size: 50
}

export default LogoAlly;