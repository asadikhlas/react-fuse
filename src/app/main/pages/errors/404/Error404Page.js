import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import LogoAlly from 'components/LogoAlly';
import { Link } from 'react-router-dom';

function Error404Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<LogoAlly className="mb-16" size={128} />
			<div className="max-w-512 text-center">
				<FuseAnimate animation="transition.expandIn" delay={100}>
					<Typography variant="h1" color="inherit" className="font-medium mb-16">
						404
					</Typography>
				</FuseAnimate>

				<FuseAnimate delay={500}>
					<Typography variant="h5" color="textSecondary" className="mb-16">
						Sorry but we could not find the page you are looking for
					</Typography>
				</FuseAnimate>

				<Link className="font-medium" to="/">
					Go back to dashboard
				</Link>
			</div>
		</div>
	);
}

export default Error404Page;
