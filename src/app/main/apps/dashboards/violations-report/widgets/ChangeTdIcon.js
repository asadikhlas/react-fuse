import React from 'react';
import { IconUp } from 'components/icons/IconUp';
import { IconDown } from 'components/icons/IconDown';

export default function ChangeTdIcon(props) {
    if (props.type === 'up') {
        return <IconUp fill='#E3211F' width='20px' height='17px' />;
    }
    else if (props.type === 'down') {
        return <IconDown fill='#FFD700' width='20px' height='17px' />;
    }
}