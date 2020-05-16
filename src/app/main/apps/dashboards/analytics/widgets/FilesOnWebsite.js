import React from 'react';
import clsx from 'clsx';
import { CardNav } from 'components/CardNav';
import { CardCircle } from 'components/CardCircle';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';
import { Bar } from 'react-chartjs-2';
const useStyles = makeStyles(theme => ({
    root: {

	},
	cardMedBorder: {

    },
    hrVertical: {
        display: 'block',
        height: '80%',
        width: '2px',
        background: '#707070',
    },
	navLegend: {
		textAlign: 'left',
		fontSize: '14px',
		lineHeight: '19px',
		letterSpacing: '0px',
		color: '#151515',
		fontWeight: '400',
		width: '100%',
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
			backgroundColor: '#F9D370',
		}
	},
	navLegendH2: {
		'&:before': {
			backgroundColor: '#7FBDEC',
		}
	},

}));

function FilesOnWebsite(props) {
	const classes = useStyles(props);
	const widget = data;
	return (
		<CardWidget title="Number files on the website">
			<div className={clsx(classes.root, "flex flex-row flex-wrap items-end  w-full")}>
				<div className="text-16 flex flex-col items-center  w-full">
					<div className="flex flex-col w-full justify-end p-16">
						<div className="flex flex-row w-full mb-16 justify-end">
                            <CardNav width label="This week" />
						</div>
					</div>
					<div className="flex flex-col w-full relative">
						<div className="border-graph pl-48 pb-16 flex-col w-full">
                            <div className="flex flex-row w-full mb-8">
								<div className="flex flex-row w:1/5">
                                	<CardCircle className={clsx(classes.cardMedBorder, "mr-8")} value='88' size='medium' subtitle='Files' />
								</div>
								<div className="flex flex-row w:4/5 justifyBetween">
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='25' size='small' title='DOCS' />
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='07' size='small' title='PPT' />
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='08' size='small' title='PDF' />
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='29' size='small' title='AUDIOS' />
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='16' size='small' title='VIDEOS' />
									<CardCircle width={((1/7) * 100) + '%'} circle={false} value='06' size='small' title='FLASH' />
								</div>
                            </div>
							<hr className="mt-24 mb-24" />
							<div className="w-full">
								<Bar
									height={300}
									data={{
										labels: widget.chart.labels,
										datasets: widget.chart.datasets
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

export default React.memo(FilesOnWebsite);
const data = {
	chart: {
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
						display: true,
						drawOnChartArea: false,
						drawBorder: true,
						color: 'rgba(0,0,0,0.6)',
						zeroLineColor: 'rgba(0,0,0,0.6)',
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
						display: true,
						drawOnChartArea: false,
						drawBorder: true,
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