import React from 'react';

import { IconTriangle } from 'components/icons/IconTriangle';
import { IconCircle } from 'components/icons/IconCircle';
import { IconSquare } from 'components/icons/IconSquare';

export const getSitesColumns = (sites) => {
    let offset = Math.ceil(sites.length / 2);
    let items =[];
    for(var index = 0; index < offset; index++ ) {
        items.push({
            left: sites[index] || false,
            right: sites[offset + index] || false,
        });
    }
    return items;
}

export const getIcon = (icon, iconSize) => {
    switch(icon) {
        case 'triangle': return (<IconTriangle width={iconSize} height={iconSize} />);
        case 'square': return (<IconSquare width={iconSize} height={iconSize} />);
        case 'circle': return (<IconCircle width={iconSize} height={iconSize} />);
        default: return null;
    }
}
export const getIconColor = (icon) => {
    switch(icon) {
        case 'triangle': return 'red';
        case 'square': return 'yellow';
        case 'circle': return 'green';
        default: return null;
    }
}