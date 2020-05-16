import React from 'react';
import clsx from 'clsx';
import { CardCircle } from 'components/CardCircle';
import { CardNav } from 'components/CardNav';
import { CardWidget } from 'components/CardWidget';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {

	}
}));

function Videos(props) {
	const classes = useStyles(props);
	return (
		<CardWidget title="All Videos">
			<div className={clsx(classes.root, "p-16 flex flex-row flex-wrap items-end w-full")}>
				<div className="py-4 text-16 flex flex-col items-center w-full">
					<div className="flex flex-row w-full mb-16 justify-end">
						<CardNav width label="This week" />
					</div>
					<div className="flex flex-row w-full pt-48 pb-48">
						<div className="flex flex-row justify-center content-end sm:w-1/2 pr-16 column-border-left">
							<CardCircle value='1.2k' subtitle='Videos' />
						</div> 	
						<div className="flex flex-row flex-wrap justify-between sm:w-1/2 column-border-left pt-32 pb-32">
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='25' size='small' title='Number of<br />Videos' />
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='07' size='small' title='Video with<br />Image' />
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='08' size='small' title='Youtube<br />Video' />
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='29' size='small' title='Vemos' />
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='16' size='small' title='Self hosted' />
								<CardCircle className="mb-8 sm:w-1/3" circle={true} 
									value='03' size='small' title='Elsewhere' />
						</div>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(Videos);

