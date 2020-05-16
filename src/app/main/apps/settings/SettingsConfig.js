import React from 'react';
import { authRoles } from 'app/auth';
import { Redirect } from 'react-router-dom';

const SettingsConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: '/apps/settings',
            exact: true,
            component: () => <Redirect to="/apps/settings/info" />
        },
        {
            path     : '/apps/settings/info',
            component: React.lazy(() => import('./Info/index'))
        },
        {
            path     : '/apps/settings/billing-info',
            component: React.lazy(() => import('./BillingInfo'))
        },
        {
            path     : '/apps/settings/affiliate',
            component: React.lazy(() => import('./Affiliate'))
        },
    ]
};

export default SettingsConfig;