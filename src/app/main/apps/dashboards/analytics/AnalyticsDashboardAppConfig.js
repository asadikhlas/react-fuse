import React from 'react';
import { authRoles } from 'app/auth';

const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.user, // ['admin']
	routes: [
		{
			path: '/apps/dashboards/analytics',
			component: React.lazy(() => import('./AnalyticsDashboardApp'))
		}
	]
};

export default AnalyticsDashboardAppConfig;
