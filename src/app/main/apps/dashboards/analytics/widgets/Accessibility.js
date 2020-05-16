import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { IconCognitiveHead } from 'components/icons/IconCognitiveHead';
import { IconMotorHead } from 'components/icons/IconMotorHead';
import { IconHearingHead } from 'components/icons/IconHearingHead';
import { IconVisualHead } from 'components/icons/IconVisualHead';
import { IconTriangle } from 'components/icons/IconTriangle';
import { IconCircle } from 'components/icons/IconCircle';
import { IconSquare } from 'components/icons/IconSquare';
import { IconUp } from 'components/icons/IconUp';
import { IconDown } from 'components/icons/IconDown';
import { CardBar } from 'components/CardBar';
import { CardNote } from 'components/CardNote';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import colors from 'components/colors';

import Top10Criteria from './accessibility/Top10Criteria';
import Top10PagesViolations from './accessibility/Top10PagesViolations';

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
	tableCell: {
		padding: '2px 0',

		'& span': {
			padding: 0,

			'& svg': {
				width: '18px',
				height: '18px',
				marginRight: '8px',
			}

		},
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
function Accessibility(props) {
	const classes = useStyles(props);
	const [tab, setTab] = React.useState(0);
	const handleChange = (ev, index) => {
		setTab(index)
	}
	return (
		<CardWidget title="Accessibility">
			<div className="p-16 pl-32 pr-32 flex flex-row flex-wrap items-end  w-full">
				<div className="py-4 text-16 flex flex-col items-center  w-full">
					<div className="flex flex-row items-center w-full mb-16 navbar-card">
						<Tabs
							value={tab}
							className='navbar-card-tabs'
							indicatorColor="primary"
							textColor="primary"
							onChange={handleChange}
						>
							<Tab disableRipple className='tab navbar-card-all' label="All" />
							<Tab disableRipple className='tab' label="Cognitive" />
							<Tab disableRipple className='tab' label="Hearing" />
							<Tab disableRipple className='tab' label="Motor" />
							<Tab disableRipple className='tab' label="Visual" />
						</Tabs>
					</div>
					<div className="flex flex-row w-full">
						<div className="flex flex-col sm:w-1/2 pr-32 column-border-left">
							<div className="flex flex-row justify-between mb-8">
								<div className="text-32 hidden sm:flex">
									{tab === 0 && <IconMotorHead fill='rgb(32, 72, 145)' width={83.36} height="63.77" />}
									{tab === 1 && <IconCognitiveHead fill='#000' width={83.36} height="63.77" />}
									{tab === 2 && <IconHearingHead fill='#000' width={83.36} height="63.77" />}
									{tab === 3 && <IconMotorHead fill='#000' width={83.36} height="63.77" />}
									{tab === 4 && <IconVisualHead fill='#000' width={83.36} height="63.77" />}
								</div>
								<div className="flex flex-row justify-between">
									<CardNote className='yellow'>C</CardNote>
									<IconUp width='15.24' height='7.71' fill={colors.yellow}/>
								</div>
							</div>
							<div className="flex flex-row justify-between mb-8">
								<Typography className={classes.subtitle}>Number of Violations</Typography>

								<div className="flex flex-row align-start justify-between">
									<span className={clsx(classes.noteVilation, "yellow")}>761</span>
									<IconUp width='7' height='4' fill={colors.yellow}/>
								</div>
							</div>
							<hr className="mb-8" />
							<div className="flex flex-col justify-between mb-4">
								<Typography className={clsx(classes.subtitle, 'mb-8')}>Violations per Priority</Typography>
								<div className={clsx(classes.itemList, "flex justify-between flex-row  mb-8")}>
									<div className="flex align-start flex-row">
										<span className="mr-8"><IconCircle /></span>
										<span className="name">Low</span>
									</div>
									<div className="flex align-start flex-row green">
										<span className="note mr-4">25</span>
										<IconUp width='7' height='4' fill={colors.green}/>
									</div>
								</div>
								<div className={clsx(classes.itemList, "flex justify-between flex-row  mb-8")}>
									<div className="flex align-start flex-row">
										<span className="mr-8"><IconSquare /></span>
										<span className="name">Medium</span>
									</div>
									<div className="flex align-start flex-row yellow">
										<span className="note mr-4">500</span>
										<IconUp width='7' height='4' fill={colors.yellow}/>
									</div>
								</div>
								<div className={clsx(classes.itemList, "flex justify-between flex-row  mb-8")}>
									<div className="flex align-start flex-row">
										<span className="mr-8"><IconTriangle /></span>
										<span className="name">High</span>
									</div>
									<div className="flex align-start flex-row red">
										<span className="note mr-4">236</span>
										<IconUp width='7' height='4' fill={colors.red}/>
									</div>
								</div>
							</div>
							<hr className="mb-8" />
							<div className="flex flex-col justify-between mb-4">
								<Typography className={classes.subtitle}>Average Violations per Page</Typography>
								<div className={clsx("flex justify-between flex-row  mb-4 pb-4")}>
									<div className={clsx("flex justify-between flex-row self-end")}>
										<div className={clsx(classes.note, 'yellow flex flex-col justify-end')}>
											90
										</div>
										<div className='flex flex-col justify-center align-center ml-16'>
											<IconDown fill={colors.yellow} width='13px' height='6px' />
										</div>
									</div>
									<div className="flex justify-between flex-row" style={{ height: '80px'}}>
										<CardBar marginRight='10px' level='green' height='60%' />
										<CardBar marginRight='10px' level='yellow' height='80%' />
										<CardBar marginRight='10px' level='red' height='50%' />
										<CardBar marginRight='10px' level='red' height='65%' />
										<CardBar marginRight='10px' level='green' height='70%' />
										<CardBar level='yellow' height='80%' />
									</div>
								</div>
							</div>
							<hr className="mb-8" />
						</div>
						<div className="flex flex-col sm:w-1/2 pl-32">
							<div className="flex flex-col">
								<Top10Criteria />
								<Top10PagesViolations />
							</div>
						</div>
					</div>

				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(Accessibility);

