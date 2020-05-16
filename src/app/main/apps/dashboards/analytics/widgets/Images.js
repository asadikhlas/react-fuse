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

function Images(props) {
	const classes = useStyles(props);
	return (
		<CardWidget title="All Images">
			<div className={clsx(classes.root, "p-16 flex flex-row flex-wrap items-end w-full")}>
				<div className="py-4 text-16 flex flex-col items-center w-full">
					<div className="flex flex-row w-full mb-16 justify-end">
						<CardNav width label="This week" />
					</div>
					<div className="flex flex-row w-full">
						<div className="flex flex-row content-end sm:w-1/2 pr-16 column-border-left">
							<CardCircle value='1.2k' subtitle='Images' />
						</div> 	
						<div className="flex flex-col sm:w-1/2 column-border-left">
							<div className="flex flex-row mb-8">
								<div className="w:1/2 px-4">
									<CardCircle circle={true} value='25' size='small' title='Number of Images' />
								</div>
								<div className="w:1/2 px-4">
									<CardCircle circle={true} value='29' size='small' title='Number of images with alt tag' />
								</div>
							</div>
							<div className="flex flex-row">
								<div className="w:1/2 px-4">
									<CardCircle circle={true} value='07' size='small' title='Number of Pages with images' />
								</div>
								<div className="w:1/2 px-4"> 
									<CardCircle circle={true} value='16' size='small' title='Number of images without alt tag' />
								</div>
							</div>
						</div>
                    </div>
				</div>
			</div>
		</CardWidget>
	);
}

export default React.memo(Images);

