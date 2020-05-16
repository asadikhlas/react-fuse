import FuseAnimate from '@fuse/core/FuseAnimate';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';

import Audios 			from './widgets/Audios';
import Videos 			from './widgets/Videos';
import Images 			from './widgets/Images';
import Priority 		from './widgets/Priority';
import H1Headers 		from './widgets/H1Headers';
import AllHeaders 		from './widgets/AllHeaders';
import Accessibility 	from './widgets/Accessibility';
import FilesOnWebsite 	from './widgets/FilesOnWebsite';

import SearchTopPage	from 'components/SearchTopPage';
import siteReducer		from 'components/store/reducers'
function AnalyticsDashboardApp() {
	const dispatch = useDispatch();
	const widgets = useSelector(({ analyticsDashboardApp }) => analyticsDashboardApp.widgets.data);
	// const site = useSelector(({ sites }) => sites.active);
	useEffect(() => {
		dispatch(Actions.getWidgets());
	}, [dispatch]);

	if (!widgets) {
		return null;
	}
	return (
		<div className="w-full">
			<SearchTopPage />
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col md:flex-row sm:p-8 container">
					<div className="flex flex-1 flex-col min-w-0">
						<div className="widget-wrapper flex flex-col sm:flex sm:flex-row pb-32">
							<div className="widget flex w-full sm:w-3/4 p-8">
								<Accessibility />
							</div>
							<div className="widget flex w-full sm:w-1/4 p-8">
								<Audios />
							</div>
						</div>
						<div className="widget-wrapper flex flex-col sm:flex sm:flex-row pb-32">
							<div className="widget flex w-full sm:w-1/2 p-8">
								<Priority />
							</div>
							<div className="widget flex w-full sm:w-1/2 p-8">
								<Images />
							</div>
						</div>
						<div className="widget-wrapper flex flex-col sm:flex sm:flex-row pb-32">
							<div className="widget flex w-full sm:w-1/2 p-8">
								<AllHeaders />
							</div>
							<div className="widget flex w-full sm:w-1/2 p-8">
								<H1Headers />
							</div>
						</div>
						<div className="widget-wrapper flex flex-col sm:flex sm:flex-row pb-32">
							<div className="widget flex w-full sm:w-1/2 p-8">
								<FilesOnWebsite/>
							</div>
							<div className="widget flex w-full sm:w-1/2 p-8">
								<Videos/>
							</div>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}
export default withReducer('sites', siteReducer)(
	withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp)
);
