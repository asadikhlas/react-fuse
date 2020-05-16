import React from 'react';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import FuseAnimate from '@fuse/core/FuseAnimate';

import MainReport 	from './widgets/MainReport';
import Top10Criteria 	from './widgets/Top10Criteria';
import MostViolations 	from './widgets/MostViolations';

import SearchTopPage	from 'components/SearchTopPage';

function ViolationsReportApp(props)
{
    return (
        <div className="w-full">
            <SearchTopPage />
            <FuseAnimate animation="transition.slideUpIn" delay={200}>
                <div className="flex flex-col md:flex-row sm:p-16 container">
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="flex flex-col sm:flex sm:flex-row pb-32">
                            <MainReport />
                        </div>
                        <div className="flex flex-col sm:flex sm:flex-row pb-32">
                            <Top10Criteria />
                        </div>
                        <div className="flex flex-col sm:flex sm:flex-row pb-32">
                            <MostViolations />
                        </div>
                    </div>
                </div>
            </FuseAnimate>
        </div>
    );
}

export default withReducer('projectDashboardApp', reducer)(ViolationsReportApp);
