import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getSitesColumns, getIcon, getIconColor } from 'components/helpers';

const iconSize = 14;
var sites = [{
        id: 1,
        icon: 'triangle',
        title: 'WCAG 1.2.1',
    },{
        id: 2,
        icon: 'square',
        title: 'WCAG 1.2.2',
    },{
        id: 3,
        icon: 'circle',
        title: 'WCAG 1.3.4',
    },{
        id: 4,
        icon: 'triangle',
        title: 'WCAG 1.4.1',
    },{
        id: 5,
        icon: 'square',
        title: 'WCAG 1.4.12',
    },{
        id: 6,
        icon: 'circle',
        title: 'WCAG 1.2.1',
    },{
        id: 7,
        icon: 'triangle',
        title: 'WCAG 1.2.2',
    },{
        id: 8,
        icon: 'square',
        title: 'WCAG 1.3.4',
    },{
        id: 9,
        icon: 'circle',
        title: 'WCAG 1.4.1',
    },{
        id: 10,
        icon: 'triangle',
        title: 'WCAG 1.4.12',
    }];
const Top10Criteria = (props) => {
    const columns = getSitesColumns(sites);
    return (<React.Fragment>
        <Typography className="card-title">Top 10 Criteria</Typography>
        <div className="columns flex flex-row">
            <div className="column left">
                <ul>
                {columns.map((item, index) => <li className={item.left && getIconColor(item.left.icon)} key={index}>
                        {item.left && <React.Fragment>    
                            <span>{item.left.id}.</span>
                            {getIcon(item.left.icon, iconSize)}
                            {item.left.title}
                        </React.Fragment>}
                    </li>)}
                </ul>
            </div>
            <div className="column right">
                <ul>
                {columns.map((item, index) => <li className={item.right && getIconColor(item.right.icon)} key={index}>
                        {item.right && <React.Fragment>    
                            <span>{item.right.id}.</span>
                            {getIcon(item.right.icon, iconSize)}
                            {item.right.title}
                        </React.Fragment>}
                    </li>)}
                </ul>
            </div>
        </div>
        <div className="columns flex flex-row">
            <div className="column left">
                <ul>
                    <li className={getIconColor('triangle')}>
                        <span>1.</span>
                        {getIcon('triangle', iconSize)}
                        WCAG 1.2.1
                    </li>
                    <li className={getIconColor('square')}>
                        <span>2.</span>
                        {getIcon('square', iconSize)}
                        WCAG 1.2.2
                    </li>
                    <li className={getIconColor('circle')}>
                        <span>3.</span>
                        {getIcon('circle', iconSize)}
                        WCAG 1.3.4
                    </li>
                    <li className={getIconColor('triangle')}>
                        <span>4.</span>
                        {getIcon('triangle', iconSize)}
                        WCAG 1.4.1
                    </li>
                    <li className={getIconColor('square')}>
                        <span>5.</span>
                        {getIcon('square', iconSize)}
                        WCAG 1.4.12
                    </li>
                </ul>
            </div>
            <div className="column right">
                <ul>
                    <li className={getIconColor('circle')}>
                        <span>6.</span>
                        {getIcon('circle', iconSize)}
                        WCAG 1.2.1
                    </li>
                    <li className={getIconColor('triangle')}>
                        <span>7.</span>
                        {getIcon('triangle', iconSize)}
                        WCAG 1.2.2
                    </li>
                    <li className={getIconColor('square')}>
                        <span>8.</span>
                        {getIcon('square', iconSize)}
                        WCAG 1.3.4
                    </li>
                    <li className={getIconColor('circle')}>
                        <span>9.</span>
                        {getIcon('circle', iconSize)}
                        WCAG 1.4.1
                    </li>
                    <li className={getIconColor('triangle')}>
                        <span>10.</span>
                        {getIcon('triangle', iconSize)}
                        WCAG 1.4.12
                    </li>
                </ul>
            </div>
        </div>
    </React.Fragment>)
};

export default Top10Criteria;