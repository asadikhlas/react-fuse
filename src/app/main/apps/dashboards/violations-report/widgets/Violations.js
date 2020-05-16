import React from 'react';
import { IconTriangle } from 'components/icons/IconTriangle';
import { IconSquare } from 'components/icons/IconSquare';
import { IconCircle } from 'components/icons/IconCircle';
const Violations = (props) => {
    let icon, title;
    if (props.type === 'high') {
        icon = <IconTriangle />;
        title = 'High';
    }
    else if (props.type === 'medium') {
        icon = <IconSquare />;
        title = 'Medium';
    }
    else if (props.type === 'low') {
        icon = <IconCircle />;
        title = 'Low';
    }
    return (<div className="flex flex-row content-between items-center widget-main-report-violations">
        {icon}
        <span className="ml-16 td-title">{title}</span>
    </div>);
}

export default Violations;