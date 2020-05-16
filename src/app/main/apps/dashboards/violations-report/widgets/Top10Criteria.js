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
import { IconTriangle } from 'components/icons/IconTriangle';
import { IconSquare } from 'components/icons/IconSquare';
import { IconCircle } from 'components/icons/IconCircle';
import ChangeTdIcon from './ChangeTdIcon';

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
	tableCellCenter: {
		textAlign: 'center'
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
        value: '4500',
        checked: false,
        criteria: 'WCAG 1.2.1',
        explanation: 'Elements must have sufficient color contrast',
		change: 'down',
		disability: 'Cognitive, hearing, Visual',
		average: '40.9',
		priority:'medium',
    },
    {
        id: 2,
        value: '4400',
        checked: false,
        criteria: 'WCAG 1.2.2',
        explanation: 'Id attribute value must be unique',
		change: 'up',
		disability: 'Cognitive, hearing, Visual',
		average: '35.5',
		priority:'high',
    },
];
function Top10Criteria(props) {
	const classes = useStyles(props);
	const [sites, setSites] = React.useState(data);
	const handleSiteChange = (ev, index, item) => {
		setSites(sites.map(site => site.id === item.id? {...item, checked:index} : site));
	}
	function getPriorityIcon(value) {
		if (value === 'high') {
			return <IconTriangle />;
		}
		else if (value === 'medium') {
			return <IconSquare />;
		}
		else if (value === 'low') {
			return <IconCircle />;
		}
	} 
	return (
		<CardWidget title="Top 10 Criteria">
			<div className="p-16 pl-32 pr-32 flex flex-row flex-wrap items-end  w-full">
				<div className="py-4 text-16 flex flex-col items-center w-full">
					<div className="flex flex-row w-full">
                        <Table aria-label="simple table">
                            <TableHead>
								<TableRow>
									<TableCell width='65' className={classes.tableCellHead}></TableCell>
									<TableCell className={classes.tableCellHead}>Instances</TableCell>
									<TableCell className={classes.tableCellHead}>Criteria</TableCell>
									<TableCell className={classes.tableCellHead}>Explanation</TableCell>
									<TableCell className={clsx(classes.tableCellHead, classes.tableCellCenter)}>Change</TableCell>
									<TableCell className={classes.tableCellHead}>Disability</TableCell>
									<TableCell className={classes.tableCellHead}>Average per page</TableCell>
									<TableCell className={clsx(classes.tableCellHead, classes.tableCellCenter)}>Priority</TableCell>
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
										{item.criteria}
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										{item.explanation}
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										<div className='flex justify-center'>
											<ChangeTdIcon type={item.change} />
										</div>
									</TableCell>
									<TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										{item.disability}
									</TableCell>
									<TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										{item.average}
									</TableCell>
                                    <TableCell className={clsx(classes.tableCell, index === sites.length -1 && classes.tableCellNoBorder)}>
										<div className="w-full flex justify-center">
											{getPriorityIcon(item.priority)}
										</div> 
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

export default React.memo(Top10Criteria);

