import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'&.user': {
			'& .username, & .email': {
				'&.hide' : {
					maxHeight: '0px'
				},
				transition: theme.transitions.create('opacity', {
					duration: theme.transitions.duration.shortest,
					easing: theme.transitions.easing.easeInOut
				})
			}
		}
	}
}));

function UserNavbarHeader(props) {
	const user = useSelector(({ auth }) => auth.user);
	const classes = useStyles();

	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const navbar = useSelector(({ fuse }) => fuse.navbar);
	const { folded } = config.navbar;
	const foldedAndOpened = folded && navbar.foldedOpen;

	return (
		<AppBar
			position="static"
			elevation={0}
			classes={{ root: classes.root }}
			className={clsx("user","relative","flex","flex-col","items-center","justify-center", 
				(!folded || foldedAndOpened) && ["pt-24","pb-24"],"z-0")}
		>
			<Typography className={clsx("username",
			"text-16",
			"whitespace-no-wrap",
			!(!folded || foldedAndOpened) && "hide" )} color="inherit">
				{user.data.displayName}
			</Typography>
			<Typography className={clsx("email",
			"text-13",
			"mt-8",
			"whitespace-no-wrap",
			!(!folded || foldedAndOpened) && "hide",
			)} color="inherit">
				{user.data.email}
			</Typography>
		</AppBar>
	);
}

export default UserNavbarHeader;
