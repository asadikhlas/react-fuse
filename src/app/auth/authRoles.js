/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	user: ['admin', 'staff', 'user'],
	owner: ['owner', 'user'],
	editor: ['editor', 'user'],
	viewer: ['viewer', 'user'],

	/**
	 * Owner,
	 * editor,
	 * viewer
	 */
	onlyGuest: []
};

export default authRoles;
