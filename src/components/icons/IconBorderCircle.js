import React from 'react';
const IconBorderCircle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} viewBox="0 0 58.917 59.204">
            <g transform="translate(-690.954 -591.009)">
                <g>
                    <path d="M720.412,650.213a29.458,29.458,0,1,1,29.459-29.459A29.491,29.491,0,0,1,720.412,650.213Zm0-55.555a26.1,26.1,0,1,0,26.1,26.1A26.126,26.126,0,0,0,720.412,594.658Z" fill={props.fill} />
                </g>
                <g>
                    <g>
                        <path d="M720.408,594.945a26.1,26.1,0,0,1,24.326,17.142c.851,2.367,4.656,1.346,3.8-1.046a30.162,30.162,0,0,0-28.122-20.032c-2.534-.021-2.536,3.915,0,3.936Z" fill={props.fillActive} />
                    </g>
                </g>
            </g>
        </svg>

    );
}
IconBorderCircle.defaultProps = {
    width: '58.917',
    height: 'auto',
    fill: "#c6c6c6",
    fillActive: "#0093d4",
}
export { IconBorderCircle };