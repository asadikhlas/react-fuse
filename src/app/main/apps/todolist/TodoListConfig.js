import React from 'react';
import { authRoles } from 'app/auth';

const TodoListConfig = {
    auth: authRoles.user,
    routes: [
        {
            path: '/apps/todolist',
            component: React.lazy(() => import('./TodoListApp'))
        }
    ]
};

export default TodoListConfig;