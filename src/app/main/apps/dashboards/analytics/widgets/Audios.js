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

function Audios(props) {
	const classes = useStyles(props);
	return (
		<CardWidget title="All Audios">
			<div className={clsx(classes.root, "p-16 flex flex-row flex-wrap items-end w-full")}>
				<div className="py-4 text-16 flex flex-col items-center w-full">
					<div className="flex flex-row w-full mb-32 justify-end">
						<CardNav width label="This week" />
					</div>
					<div className="flex flex-row w-full">
						<div className="flex flex-row content-end sm:w-2/3 pr-16 column-border-left">
							<CardCircle value='54' subtitle='Audios' />
						</div> 	
						<div className="flex flex-col sm:w-1/3 justify-between pl-16 column-border-left">
							<div className="mb-32">
								<CardCircle value='25' size='medium' title='Number of Audio Files' />
							</div>
							<div>
								<CardCircle value='29' size='medium' title='Number of pages with Audio Files' />
							</div>
						</div>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(Audios);

