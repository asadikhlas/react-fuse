import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { IconUp } from 'components/icons/IconUp';
import { IconEqual } from 'components/icons/IconEqual';
import { IconDown } from 'components/icons/IconDown';
import { IconCircle } from 'components/icons/IconCircle';
import { IconSquare } from 'components/icons/IconSquare';
import { IconTriangle } from 'components/icons/IconTriangle';
import { Bar } from 'react-chartjs-2';
import { CardNav } from 'components/CardNav';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';
import colors from 'components/colors';

const useStyles = makeStyles(theme => ({
	percentNote: {
		textAlign: 'left',
		fontWeight: 'bold',
		fontSize: '14px',
		letterSpacing: '0px',
		color: '#000000',
		opacity: '1',
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

		'&.yellow': {
            '& .icon': {
            	backgroundColor: colors.yellow,
			},
            '& .note': {
            	color: colors.yellow,
			}
        },
        '&.green': {
            '& .icon': {
            	backgroundColor: colors.green,
			},
            '& .note': {
            	color: colors.green,
			}
        },
        '&.red': {
            '& .icon': {
            	backgroundColor: colors.red,
			},
            '& .note': {
            	color: colors.red,
			}
        },
	},
	badge: {
		display: 'flex',
		border: '1px solid #E0E0E0',
		opacity: 1,
		borderRadius: '3px',
		position: 'relative',
		width: '32%',
		padding: '5px',
		
		'& h5': {
			position: 'absolute',
			bottom: '100%',
			left: '-1px',
			fontSize: '8px',
			borderRadius: '3px 3px 0 0',
			border: '1px solid #E0E0E0',
			borderBottom: '1px solid #fff',
			padding: '2px 5px',
		},
		'& p': {
			fontSize: '15px',
			
		},
		'& span': {
			fontSize: '14px',
			paddingRight: '10px',
			position: 'relative',

			'& i': {
				position: 'absolute',
				top: '0',
				right: '0',
			},
		},
		'&.green span': {
			color: colors.green,
		},
		'&.yellow span': {
			color: colors.yellow,
		},
		'&.red span': {
			color: colors.red,
		},
	},
	navWrapper: {
		maxWidth: '150px',
	},
}));
function Priority(props) {
	const classes = useStyles(props);
	return (
		<CardWidget title="Priority: Accessibility">
			<div className="p-16 pl-32 pr-32 flex flex-row flex-wrap items-end  w-full">
				<div className="py-4 text-16 flex flex-col items-center  w-full">
					<div className="flex flex-row w-full mb-16 justify-end">
						<div className={clsx(classes.navWrapper, "flex flex-col sm:w-1/3")}>
							<CardNav width label="This week" />
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-row justify-between mb-16 mt-16">
							<div className={clsx(classes.badge, 'green')}>
								{/* <h5>Violation</h5> */}
								<div className="flex flex-row justify-between w-full items-center">
									<div className="flex flex-row">
										<div className="mr-8 flex items-center">
											<IconCircle width={13} height={13} />
										</div>
										<p>Low Priority</p>
									</div>
									<span>25</span>
									{/* <i><IconDown /></i> */}
								</div>
							</div>
							<div className={clsx(classes.badge, 'yellow')}>
								{/* <h5>Violation</h5> */}
								<div className="flex flex-row justify-between w-full items-center">
									<div className="flex flex-row">
										<div className="mr-8 flex items-center">
											<IconSquare width={13} height={13} />
										</div>
										<p>Medium Priority</p>
									</div>
									<span>25</span>
									{/* <i><IconEqual /></i> */}
								</div>
							</div>
							<div className={clsx(classes.badge, 'red')}>
								{/* <h5>Violation</h5> */}
								<div className="flex flex-row justify-between w-full items-center">
									<div className="flex flex-row">
										<div className="mr-8 flex items-center">
											<IconTriangle width={13} height={13} />
										</div>
										<p>High Priority</p>
									</div>
									<span>25</span>
									{/* <i><IconUp /></i> */}
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-between mb-4">
							<div className={clsx(classes.itemList, "flex justify-between flex-row  mb-4 pb-16")}>
								<Typography className={classes.subtitle}>Average Violations Per Page</Typography>
								<div className='yellow flex flex-row justify-between items-start'>
									<div className={clsx(classes.note, 'yellow flex flex-col justify-end mr-4')}>
										90
									</div>
									<IconDown width='11px' height='6px' />
									<span className={clsx(classes.percentNote, 'ml-4')}>-20%</span>
								</div>
							</div>
							<div className={clsx(classes.itemList, "flex justify-between flex-row  mb-16 pb-16")}>
								<div className="flex justify-between flex-row w-full" style={{ height: '200px'}}>
									{/* <CardBar width={cardBarWidth} level='green' height='60%' />
									<CardBar width={cardBarWidth} level='yellow' height='80%' />
									<CardBar width={cardBarWidth} level='red' height='50%' />
									<CardBar width={cardBarWidth} level='red' height='65%' />
									<CardBar width={cardBarWidth} level='green' height='70%' />
									<CardBar width={cardBarWidth} level='red' height='80%' />
									<CardBar width={cardBarWidth} level='yellow' height='80%' />
									<CardBar width={cardBarWidth} level='yellow' height='80%' />
									<CardBar width={cardBarWidth} level='yellow' height='80%' /> */}
									<Bar
										height={200}
										data={{
											labels: data.chart.labels,
											datasets: data.chart.datasets,
											/*.map((obj, index) => {
												return {
													...obj,
													// backgroundColor:
													// hoverBackgroundColor:
													// pointBackgroundColor: obj.color,
													// pointHoverBackgroundColor: obj.color,
												};
											})*/
										}}
										options={data.options}
									/>
								</div>
							</div>
							<div className="flex flex-row justify-start mb-16 mt-16 w-full">
								<div className="flex flex-row mr-16 items-center">
									<IconCircle width='16' height='16' />
									<p className="ml-8">Low</p>
								</div>
								<div className="flex flex-row mr-16 items-center">
									<IconSquare width='16' height='16' />
									<p className="ml-8">Medium</p>
								</div>
								<div className="flex flex-row items-center">
									<IconTriangle width='16' height='16' />
									<p className="ml-8">High</p>
								</div>
							</div>
						</div>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(Priority);


const data = {
	chart: {
		labels   : ['Jan', 'Feb', 'Jun', 'Mar', 'Jul', 'Apr', 'Aug', 'May', 'Sep'], //, 'Oct', 'Nov', 'Dec'
		datasets: [
			{
				type: 'bar',
				label: 'Average Violations Per Page',
				data: [11, 10, 8, 11, 8, 10, 17, 20 , 9],
				backgroundColor: [
					colors.green,
					colors.yellow,
					colors.red,
					colors.red,
					colors.green,
					colors.red,
					colors.yellow,
					colors.yellow,
					colors.yellow,
				],
				// hoverBackgroundColor: '#7FBDEC',
				categoryPercentage: 1
			}
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		tooltips: {
			mode: 'label'
		},
		scales: {
			xAxes: [
				{
					stacked: true,
					display: false,
					gridLines: {
						display: true,
						drawOnChartArea: false,
						drawBorder: false,
						color: 'rgba(0,0,0,0.6)',
						zeroLineColor: 'rgba(0,0,0,0.6)',
					},
				}
			],
			yAxes: [
				{
					stacked: true,
					type: 'linear',
					display: false,
					position: 'left',
					gridLines: {
						display: true,
						drawOnChartArea: false,
						drawBorder: false,
						color: 'rgba(0,0,0,0.6)',
						zeroLineColor: 'rgba(0,0,0,0.6)',
					},
					labels: {
						show: false
					}
				}
			]
		}
	}
};