import React from 'react';
import clsx from 'clsx';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';
import { Line } from 'react-chartjs-2';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles(theme => ({
    root: {

	},

	navLegend: {
		textAlign: 'left',
		fontSize: '14px',
		lineHeight: '19px',
		marginRight: '10px',
		letterSpacing: '0px',
		color: '#151515',
		fontWeight: '400',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'&:before': {
			display:'block',
			content:'""',
			width: '10px',
			height: '10px',
			marginRight: '5px',
			backgroundColor: '#ccc',
			borderRadius: '100%',
		}
	},
	navLegendH1: {
		'&:before': {
			backgroundColor: '#29F8EA',
		}
	},
	navLegendH2: {
		'&:before': {
			backgroundColor: '#D04412',
		}
	},
	navLegendH3: {
		'&:before': {
			backgroundColor: '#918320',
		}
	},
	navLegendH4: {
		'&:before': {
			backgroundColor: '#2A9389',
		}
	},
	navLegendH5: {
		'&:before': {
			backgroundColor: '#2A4F93',
		}
	},

}));

function AllHeaders(props) {
	const classes = useStyles(props);
	// const [dataset, setDataset] = React.useState('today');
	const [value, setValue] = React.useState(0);
	const handleChange = (ev, index) => setValue(index);

	return (
		<CardWidget title="All Headers Per Page">
			<div className={clsx(classes.root, "flex flex-row flex-wrap items-end  w-full")}>
				<div className="text-16 flex flex-col items-center  w-full">
					<div className="flex flex-col w-full justify-end p-16">
						<div className="flex flex-col w-full mb-4 justify-between pl-32">
							<div className="flex flex-col">
								<div className="flex flex-row items-center w-full navbar-card">
									<Tabs
										value={value}
										className='navbar-card-tabs'
										indicatorColor="primary"
										textColor="primary"
										onChange={handleChange}
									>
										<Tab disableRipple className='tab navbar-card-all' label="All" />
										<Tab disableRipple className='tab' label="H1 Only" />
										<Tab disableRipple className='tab' label="H2 Only" />
										<Tab disableRipple className='tab' label="H3 Only" />
										<Tab disableRipple className='tab' label="H4 Only" />
										<Tab disableRipple className='tab' label="H5 Only" />
									</Tabs>
								</div>
							</div>
							<div className="flex mt-12 flex-row flex-wrap justify-start">
								<span className={clsx(classes.navLegend,classes.navLegendH1)}>H1</span>
								<span className={clsx(classes.navLegend,classes.navLegendH2)}>H2</span>
								<span className={clsx(classes.navLegend,classes.navLegendH3)}>H3</span>
								<span className={clsx(classes.navLegend,classes.navLegendH4)}>H4</span>
								<span className={clsx(classes.navLegend,classes.navLegendH5)}>H5</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full relative">
						<div className="relative pl-24 pb-16">
							<Line
								data={{
									labels: data.labels,
									datasets: data.datasets.map((obj, index) => {
										return {
											...obj,
											borderColor: obj.color,
											backgroundColor: obj.color,
											pointBackgroundColor: 'transparent',
											pointBorderColor: 'transparent',
											// pointBackgroundColor: obj.color,
											// pointHoverBackgroundColor: obj.color,
										};
									})
								}}
								options={data.options}
							/>
						</div>
						<h4 className='card-side-title'>Number of pages</h4>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(AllHeaders);
const data = {
	chartType: 'line',
	datasets : [
		{
			label: 'H1',
			data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
			fill : false,
			color: '#29F8EA',
		},
		{
			label: 'H2',
			data : [500, 700, 2000, 2100, 2150, 3200, 2900, 2700, 2500, 2200, 2250, 2350],
			fill : false,
			color: '#D04412'
		},
		{
			label: 'H3',
			data : [1000, 900, 1500, 1900, 2300, 2350, 1800, 1900, 2200, 2400, 2550, 2100],
			fill : false,
			color: '#918320'
		},
		{
			label: 'H4',
			data : [1500, 1200, 1700, 1850, 1850, 2000, 2100, 2110, 2200, 3000, 2800, 2900],
			fill : false,
			color: '#2A9389'
		},
		{
			label: 'H5',
			data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
			fill : false,
			color: '#2A4F93'
		},
	],
	labels   : ['Jan', 'Feb', 'Jun', 'Mar', 'Jul', 'Apr', 'Aug', 'May', 'Sep', 'Oct', 'Nov', 'Dec'],
	options : {
		spanGaps : true,
		borderColor: 'rgba(0,0,0,.6)',
		legend : {
			display: false
		},
		maintainAspectRatio: true,
		elements           : {
			point: {
				radius          : 10, //5
				borderWidth     : 0,
				hoverRadius     : 6,
				// hoverBorderWidth: 1,
				pointBorderColor: '#fff',
				// pointHoverBorderColor: '#fff'
			},
			line : {
				tension: 0
			}
		},
		layout : {
			padding: {
				top   : 24,
				left  : 16,
				right : 16,
				bottom: 16
			}
		},
		scales : {
			xAxes: [
				{
					gridLines: {
						zeroLineColor: 'rgba(0,0,0,0.6)',
						color: 'rgba(0,0,0,0.6)',
						display: true,
						drawOnChartArea: false,
						drawBorder: true,
					},
					ticks    : {
						fontColor: 'rgba(0,0,0,0.54)'
					}
				}
			],
			yAxes: [
				{
					stacked: true,
					type: 'linear',
					display: true,
					position: 'left',
					gridLines: {
						color: 'rgba(0,0,0,0.6)',
						zeroLineColor: 'rgba(0,0,0,0.6)',
						display: true,
						drawOnChartArea: false,
						drawBorder: true,
					},
					labels: {
						show: false
					}
				}
			]
		}
	}
};