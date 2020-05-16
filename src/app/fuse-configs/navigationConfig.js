import {authRoles} from 'app/auth';

const navigationConfig = [
	{
		id: 'dashboards',
		title : 'Dashboards',
		type : 'collapse',
		auth: authRoles.user,
		icon : 'dashboard',
		children : [
			{
				id   : 'analytics-dashboard',
				title : 'Analytics',
				type : 'item',
				auth: authRoles.user,
				url : '/apps/dashboards/analytics'
			},
			{
				id   : 'project-dashboard',
				title : 'Violations Report',
				type : 'item',
				auth: authRoles.user,
				url : '/apps/dashboards/violations-report'
			}
		]
	},
	{
		id   : 'scan-now',
		title : 'Scan Now',
		type : 'item',
		auth: authRoles.user,
		icon : 'add_to_queue',
		url : '/apps/scan-now'
	},
	{
		id: 'chat',
		title : 'Chat',
		type : 'item',
		icon : 'chat',
		auth: authRoles.user,
		url : '/apps/chat',
	},
	{
		id: 'scrumboard',
		title : 'Scrumboard',
		type : 'item',
		auth: authRoles.user,
		icon : 'help',
		url : '/apps/scrumboard',
	},
	{
		id: 'settings',
		title : 'Settings',
		auth: authRoles.user,
		icon : 'settings',
		type : 'collapse',
		children: [
			{
				id   : 'settings-info',
				title : 'Subscription / Update',
				type : 'item',
				auth: authRoles.user,
				url : '/apps/settings/info',
			},
			{
				id   : 'settings-billing-info',
				title : 'Payment Method',
				type : 'item',
				auth: authRoles.user,
				url : '/apps/settings/billing-info'
			}
		]
	},
	{
		id   : 'help-support',
		title : 'Help & Support',
		type : 'item',
		auth: authRoles.user,
		icon : 'help',
		url : '/apps/help-support',
	},
	{
		id: 'logout',
		title: 'Logout',
		type: 'item',
		auth: authRoles.user,
		url: '/logout',
		icon: 'exit_to_app'
	}
];

export default navigationConfig;