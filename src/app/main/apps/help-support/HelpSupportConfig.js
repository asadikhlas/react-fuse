import React from 'react';


const HelpSupportConfig = {
    routes: [
        {
            path     : '/apps/help-support',
            component: React.lazy(() => import('./HelpSupportApp'))
        }
    ]
};


export default HelpSupportConfig;