import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';

import withReducer from 'app/store/withReducer';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from 'components/store/actions';
import reducer from 'components/store/reducers';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to right, ${theme.palette.primary.light} 0%, ${theme.palette.primary.light} 0%)`
	},
	formWrapper: {
		width: '100%',
	},
	label: {
		color: '#fff',
		marginBottom: '8px',
		fontWeight: 'bold',
        fontSize: '1.7rem',
	},
	select: {
		background: '#fff',
	},

	formControl: {
		width: '100%',
		'& svg' : {
			color: 'rgba(0,0,0,.87)',
		},
		'& fieldset': {
			'border': 'transparent',
		},
		'& select' : {
			color: 'rgba(0,0,0,.87)',
			'& option': {
				background: '#fff!important',
				color: 'rgba(0,0,0,.87)!important',
			},
			'&:focus' : {
				background: 'transparent',
			}
		}
	},	
}));

function SearchTopPage(props) {
	const dispatch = useDispatch();
	const mainThemeDark = useSelector(({ fuse }) => fuse.settings.mainThemeDark);
	const sites = useSelector(({ sites }) => sites.sites);
	const active = useSelector(({ sites }) => sites.active);
	const classes = useStyles(props);

	useEffect(() => {
		// eslint-disable-next-line
		if (sites.length === 0) {
			dispatch(Actions.loadSites());
		}
	}, [dispatch]);
	const handleChange = event => {
		var value = event.target.value;
		let selected = value && sites.find(site => site.id === value)
		if (selected) dispatch(Actions.setActiveSite(selected));
	}
	return (
		<ThemeProvider theme={mainThemeDark}>
			<div className={classes.root}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<div className={classes.formWrapper}>
						<Typography className={classes.label} htmlFor="site-select">Choose your site to see informations about</Typography>
						<FormControl variant="outlined" className={classes.formControl}>
							<Select
							native
							displayEmpty
							className={classes.select}
							value={active ? active.id : ''}
							onChange={handleChange}
							inputProps={{
								name: 'site',
								id: 'site-select',
							}}
							>
								<option aria-label="None" value="">All</option>
								{sites.map( site => <option key={site.id} value={site.id}>{site.title}</option>)}
							</Select>
						</FormControl>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default withReducer('sites', reducer)(SearchTopPage);
