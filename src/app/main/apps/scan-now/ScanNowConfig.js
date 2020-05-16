import React from 'react';
import { authRoles } from 'app/auth';

const ScanNowConfig = {
    auth: authRoles.user,
    routes: [
        {
            path     : '/apps/scan-now',
            component: React.lazy(() => import('./ScanNowApp'))
        }
    ]
};

export default ScanNowConfig;