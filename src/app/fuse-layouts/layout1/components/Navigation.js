import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import FuseNavVerticalCollapse from '@fuse/core/FuseNavigation/vertical/FuseNavVerticalCollapse';
import FuseNavVerticalGroup from '@fuse/core/FuseNavigation/vertical/FuseNavVerticalGroup';
import FuseNavVerticalItem from '@fuse/core/FuseNavigation/vertical/FuseNavVerticalItem';
import FuseNavVerticalLink from '@fuse/core/FuseNavigation/vertical/FuseNavVerticalLink';
import FuseNavItem, { registerComponent } from '@fuse/core/FuseNavigation/FuseNavItem';

/*
Register Fuse Navigation Components
 */
registerComponent('vertical-group', FuseNavVerticalGroup);
registerComponent('vertical-collapse', FuseNavVerticalCollapse);
registerComponent('vertical-item', FuseNavVerticalItem);
registerComponent('vertical-link', FuseNavVerticalLink);
registerComponent('vertical-divider', () => <Divider className="my-16" />);

const useStyles = makeStyles(theme => ({
	navigation: {
		'& .list-item': {
			'&:hover': {
				backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0,0,0,.04)'
			},
			'&:focus:not(.active)': {
				backgroundColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0,0,0,.05)'
			}
		}
	},
	verticalNavigation: {
		'&.active-square-list': {
			'& .list-item, & .active.list-item': {
				width: '100%',
				borderRadius: '0'
			}
		},
		'&.dense': {
			'& .list-item': {
				paddingTop: 0,
				paddingBottom: 0,
				height: 32
			}
		}
	},
	'@global': {
		'.popper-navigation-list': {
			'& .list-item': {
				padding: '8px 12px 8px 12px',
				height: 40,
				minHeight: 40,
				'& .list-item-text': {
					padding: '0 0 0 8px'
				}
			},
			'&.dense': {
				'& .list-item': {
					minHeight: 32,
					height: 32,
					'& .list-item-text': {
						padding: '0 0 0 8px'
					}
				}
			}
		}
	}
}));

function Navigation(props) {
	const { active, dense } = props;
    const navigation = useSelector(({ fuse }) => fuse.navigation);
    let className = clsx('navigation', props.className);
    const classes = useStyles(props);
    if (navigation.length > 0) {
		return (
            <List
                className={clsx(
                    'navigation whitespace-no-wrap',
                    classes.navigation,
                    classes.verticalNavigation,
                    `active-${active}-list`,
                    dense && 'dense',
                    className
                )}
            >
                {navigation.map(_item => (
                    <FuseNavItem key={_item.id} type={`vertical-${_item.type}`} item={_item} nestedLevel={0} />
                ))}
            </List>
        );
	} else {
		return null;
	}
}

Navigation.defaultProps = {
	layout: 'vertical'
};

export default React.memo(Navigation);