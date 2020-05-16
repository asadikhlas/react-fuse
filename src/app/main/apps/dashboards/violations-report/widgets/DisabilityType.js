import React from 'react';
import {IconCognitive} from 'components/icons/IconCognitive';
import {IconMotor} from 'components/icons/IconMotor';
import {IconVisual} from 'components/icons/IconVisual';
import {IconHearing} from 'components/icons/IconHearing';
const DisabilityType = (props) => {
    let icon, title;
    if (props.type === 'cognitive') {
        icon = <IconCognitive width='27px' height='30px' fill="#151515" />
        title = 'Cognitive';
    } 
    else if (props.type === 'motor') {
        icon = <IconMotor width='32px' height='36px' fill="#151515" />
        title = 'Motor';
    } 
    else if (props.type === 'visual') {
        icon = <IconVisual width='34px' height='21px' fill="#151515" />
        title = 'Visual';
    } 
    else if (props.type === 'hearing') {
        icon = <IconHearing width='37px' height='27px' fill="#151515" />
        title = 'Hearing';
    } 
    return (<div className="flex flex-row content-between items-center widget-main-report-disabilitytype">
        <span className="mr-16">{icon}</span>
        <span className="td-title">{title}</span>
    </div>);
}
export default DisabilityType;