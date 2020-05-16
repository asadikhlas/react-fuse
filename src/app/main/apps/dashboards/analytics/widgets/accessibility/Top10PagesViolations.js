import React from 'react';
import Typography from '@material-ui/core/Typography';
import { getSitesColumns, getIcon, getIconColor } from 'components/helpers';

const iconSize = 14;
const sites = [...Array(10).keys()].map(id => ({
	id: id+1,
	value: 'http://www.site.com.br/',
	icon: (id+1) % 3 === 0? 'circle' : ((id+1) % 3 === 1? 'square' : 'triangle'),
}));
const Top10Criteria = (props) => {
    const columns = getSitesColumns(sites);
    return (<React.Fragment>
        <Typography className="card-title">Top 10 Pages With Violations</Typography>
        <div className="columns flex flex-row">
            <div className="column left">
                <ul>
                {columns.map((item, index) => <li className={item.left && getIconColor(item.left.icon)} key={index}>
                        {item.left && <React.Fragment>    
                            <span>{item.left.id}.</span>
                            {getIcon(item.left.icon, iconSize)}
                            {item.left.value}
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
                            {item.right.value}
                        </React.Fragment>}
                    </li>)}
                </ul>
            </div>
        </div>
    </React.Fragment>);
}

export default Top10Criteria;