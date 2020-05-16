// import axios from 'axios';

export const LOAD_SITES = 'LOAD_SITES';
export const GET_ACTIVE_SITE = 'GET_ACTIVE_SITE';
export const SET_ACTIVE_SITE = 'SET_ACTIVE_SITE';

export function loadSites() {
	// const request = axios.get('/api/analytics-dashboard-app/widgets');

	// return dispatch =>
	// 	request.then(response =>
	// 		dispatch({
	// 			type: LOAD_SITES,
	// 			payload: response.data
	// 		})
	// 	);
    return  {
        type: LOAD_SITES,
        payload: [
            {
                id: 'site_1',
                title: 'Site 1',
            },
            {
                id: 'site_2',
                title: 'Site 2',
            },
            {
                id: 'site_3',
                title: 'Site 3',
            },
        ],
    };
}

export function setActiveSite(site) {
    return  {
        type: SET_ACTIVE_SITE,
        active: site,
    };
}
