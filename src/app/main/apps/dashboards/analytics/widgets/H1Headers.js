import React from 'react';
import clsx from 'clsx';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const useStyles = makeStyles(theme => ({
    root: {

	},
	navLegend: {
		textAlign: 'left',
		fontSize: '14px',
		lineHeight: '19px',
		letterSpacing: '0px',
		color: '#151515',
		fontWeight: '400',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: '10px',

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
			backgroundColor: '#F9D370',
		}
	},
	navLegendH2: {
		'&:before': {
			backgroundColor: '#7FBDEC',
		}
	},

}));

function H1Headers(props) {
	const classes = useStyles(props);
	// const [dataset, setDataset] = React.useState('today');
	const [value, setValue] = React.useState(0);
	const handleChange = (ev, index) => setValue(index);
	const widget = data;

	return (
		<CardWidget title="All H1 Headers Per Page">
			<div className={clsx(classes.root, "flex flex-row flex-wrap items-end  w-full")}>
				<div className="text-16 flex flex-col items-center  w-full">
					<div className="flex flex-col w-full justify-end p-16">
						<div className="flex flex-col w-full mb-4 justify-between pl-32">
							<div className="flex flex-col">
								<div className="flex flex-row items-center w-full navbar-card">									<Tabs
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
							<div className="flex flex-row mt-12">
								<span className={clsx(classes.navLegend,classes.navLegendH1)}>Has H1 Header</span>
								<span className={clsx(classes.navLegend,classes.navLegendH2)}>No H1 Header</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-full relative">
						<div className="border-graph pl-48 pb-16 flex-col w-full">
							<div className="w-full">
								<Bar
									data={{
										labels: widget.mainChart.labels,
										datasets: widget.mainChart.datasets
									}}
									options={widget.options}
								/>
							</div>
							<hr className="mt-8 mb-8" />
							<div className="w-full">
								<Bar
									data={{
										labels: widget.secondChart.labels,
										datasets: widget.secondChart.datasets
									}}
									options={widget.options}
								/>
							</div>
						</div>
						<h4 className='card-side-title'>Number of pages</h4>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(H1Headers);
const data = {
	secondChart: {
		labels   : ['Jan', 'Feb', 'Jun', 'Mar', 'Jul', 'Apr', 'Aug', 'May', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				type: 'bar',
				label: 'More than one H1 per page',
				data: [11, 10, 8, 11, 8, 10, 17],
				backgroundColor: '#7FBDEC',
				hoverBackgroundColor: '#7FBDEC',
				categoryPercentage: 1
			}
		],
	},
	mainChart: {
		labels   : ['Jan', 'Feb', 'Jun', 'Mar', 'Jul', 'Apr', 'Aug', 'May', 'Sep', 'Oct', 'Nov', 'Dec'],
		datasets: [
			{
				type: 'bar',
				label: 'Has H1 Header',
				data: [42, 28, 43, 34, 20, 25, 22],
				backgroundColor: '#FFD66C',
				hoverBackgroundColor: '#FFD66C',
				categoryPercentage: 1
			},
			{
				type: 'bar',
				label: 'No H1 Header',
				data: [11, 10, 8, 11, 8, 10, 17],
				backgroundColor: '#7FBDEC',
				hoverBackgroundColor: '#7FBDEC',
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
					display: true,
					gridLines: {
						color: 'rgba(0,0,0,0.6)',
						zeroLineColor: 'rgba(0,0,0,0.6)',
						display: true,
						drawOnChartArea: false,
						drawBorder: true,
					},
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