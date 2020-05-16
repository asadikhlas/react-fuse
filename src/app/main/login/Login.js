import FuseAnimate from '@fuse/core/FuseAnimate';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import React from 'react';
// import { Link } from 'react-router-dom';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import LogoAlly from 'components/LogoAlly';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
			theme.palette.primary.dark,
			0.5
		)} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Login() {
	const classes = useStyles();
	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate animation={{ translateX: [0, '100%'] }}>
					<Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
						<CardContent className="flex flex-col items-center justify-center p-32 md:p-48">
							<div className="flex flex-col items-center justify-center w-full pb-32 md:pb-48">
								<LogoAlly size={60} />
							</div>
							<FirebaseLoginTab />
{/* 
							<div className="flex flex-col items-center justify-center pt-32">
								<span className="font-medium">Don't have an account?</span>
								<Link className="font-medium" to="/register">
									Create an account
								</Link>
								<Link className="font-medium mt-8" to="/">
									Back to Dashboard
								</Link>
							</div> */}
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default Login;
