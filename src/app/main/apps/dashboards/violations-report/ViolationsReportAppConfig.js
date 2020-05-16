import React from 'react';
import { authRoles } from 'app/auth';
const ViolationsReportAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.user,
	routes: [
		{
			path: '/apps/dashboards/violations-report',
			component: React.lazy(() => import('./ViolationsReportApp'))
		}
	]
};

export default ViolationsReportAppConfig;
