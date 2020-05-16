import React from 'react';
import { authRoles } from 'app/auth';

const AboutUsConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: '/apps/aboutus',
            component: React.lazy(() => import('./AboutUsApp'))
        }
    ]
};

export default AboutUsConfig;