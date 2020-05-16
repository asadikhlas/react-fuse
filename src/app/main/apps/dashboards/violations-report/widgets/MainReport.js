import React from 'react';
import clsx from 'clsx';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import colors from 'components/colors';
import DisabilityType from './DisabilityType';
import Violations from './Violations';
const useStyles = makeStyles(theme => ({
    tab: {
		minWidth: 0,
	},
	cell: {
		fontSize: '12px'
	},
	li: {
		textAlign: 'left',
		fontSize: '14px',
		letterSpacing: '0.7px',
		color: '#151515',
	},
	'& .column-border-left': {
		position: 'relative',

		'&:after': {
			right: 0,
			top: '50%',
			width: '1px',
			height: '60%',
			position: 'absolute',
			background: '#707070',
			transform: 'translateY(-50%)',
		}
	},
	tableCellNoBorder: {
		border:'none'
	},
	tableCell: {
		padding: '2px 10px',
		textAlign: 'left',
		fontSize: '16px',
		fontWeight: '400',
		letterSpacing: '0px',
		color: '#151515',
		opacity: 1,
		borderColor: 'rgba(0,0,0,.6)',
	},
	tableCellHead: {
		padding: '2px 10px 10px',
		textAlign: 'left',
		fontWeight: 'bold',
		fontSize: '16px',
		letterSpacing: '0px',
		color: '#000000',
		border: 'none',
	},
	noteVilation: {
		textAlign: 'right',
		fontSize: '12px',
		fontWeight: 'bold',
		letterSpacing: '0px',
		opacity: 1,
		'&.yellow': {
            color: colors.yellow,
        },
        '&.green': {
            color: colors.green,
        },
        '&.red': {
            color: colors.red,
        },
	},
	note: {
		textAlign: 'left',
		fontSize: '26px',
		fontWeight: 'bold',
		letterSpacing: '0px',
		opacity: 1,
		'&.yellow': {
            color: colors.yellow,
        },
        '&.green': {
            color: colors.green,
        },
        '&.red': {
            color: colors.red,
        },
	},
	subtitle: {
		fontSize: '14px',
		fontWeight: '700',
		letterSpacing: '0px',
		color: '#151515',
		opacity: 1,
	},
	itemList: {
		textAlign: 'left',
		fontSize: '14px',
		fontWeight: '700',
		letterSpacing: '0px',
		color: '#151515',
		opacity: 1,

		'& .name': {
		},

		'& .note': {
			alignSelf: 'flex-end'
		},

		'& .icon': {
			marginRight: '15px',
			width: '15px',
			height: '15px',
		},

		'& .yellow': {
            '& .note': {
				color: colors.yellow,
			}
        },
        '& .green': {
            '& .note': {
				color: colors.green,
			}
        },
        '& .red': {
            '& .note': {
				color: colors.red,
			}
        },
	}

}));
const data = [
    {
        id: 1,
        value: 'http://architectsorange.com',
        checked: false,
        type: 'motor',
        violations: 'high',
        criteria: 'WCAG 1.2.1',
        explanation: 'Elements must have sufficient color contrast'
    },
    {
        id: 2,
        value: 'http://architectsorange.com',
        checked: false,
        type: 'cognitive',
        violations: 'medium',
        criteria: 'WCAG 1.2.2',
        explanation: 'Id attribute value must be unique'
    },
    {
        id: 3,
        value: 'http://architectsorange.com',
        checked: false,
        type: 'hearing',
        violations: 'high',
        criteria: 'WCAG 1.3.4',
        explanation: 'Id attribute value must be unique'
    },
    {
        id: 4,
        value: 'http://architectsorange.com',
        checked: false,
        type: 'visual',
        violations: 'medium',
        criteria: 'WCAG 1.4.1',
        explanation: 'Images must have alternate text'
    },
    {
        id: 5,
        value: 'http://architectsorange.com',
        checked: false,
        type: 'cognitive',
        violations: 'low',
        criteria: 'WCAG 1.4.12',
        explanation: 'Certain ARIA roles must contain particular children'
    },
];
function MainReport(props) {
	const classes = useStyles(props);
	const [sites, setSites] = React.useState(data);
	const handleSiteChange = (ev, index, item) => {
		setSites(sites.map(site => site.id === item.id? {...item, checked:index} : site));
	}
	return (
		<CardWidget title="Main Report">
			<div className="p-16 pl-32 pr-32 flex flex-row flex-wrap items-end  w-full">
				<div className="py-4 text-16 flex flex-col items-center w-full">
					<div className="flex flex-row w-full">
                        <Table aria-label="simple table">
                            <TableHead>
								<TableRow>
									<TableCell width='65' className={classes.tableCellHead}></TableCell>
									<TableCell className={classes.tableCellHead}>Website</TableCell>
									<TableCell className={classes.tableCellHead}>Disability Type</TableCell>
									<TableCell className={classes.tableCellHead}>Violations</TableCell>
									<TableCell className={classes.tableCellHead}>Criteria</TableCell>
									<TableCell className={classes.tableCellHead}>Short Explanation</TableCell>
								</TableRow>
                            </TableHead>
                            <TableBody>
                                {sites.map((item, index) => <TableRow key={item.id}>
                                    <TableCell width='65' className={clsx(classes.tableCell, classes.tableCellNoBorder)}>
                                        <Checkbox id={"site-" + item.id} checked={item.checked} onChange={(ev, index) => handleSiteChange(ev, index, item)} />
                                    </TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
                                        <label htmlFor={'site-' + item.id}>
                                            {item.value}
                                        </label>
                                    </TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										<DisabilityType type={item.type} />
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										<Violations type={item.violations} />
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										{item.criteria}
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										{item.explanation}
									</TableCell>
        
                                </TableRow>)}
                            </TableBody>
                        </Table>
					</div>

				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(MainReport);

