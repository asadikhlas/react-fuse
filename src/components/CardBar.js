import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import colors from 'components/colors';
const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        borderRadius: '1px',
        opacity: 1,
        display: 'flex',

        '&.green div': {
            background: colors.green,
        },
        '&.yellow div': {
            background: colors.yellow,
        },
        '&.red div': {
            background: colors.red,
        },
        '& div': {
            alignSelf: 'flex-end',
            width: '100%',
        },
    }
}));
const CardBar = (props) => {
    const classes = useStyles(props);
    return (
        <div className={clsx(classes.root, props.level)} style={{
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            width: props.width
        }}>
            <div style={{ height: props.height }}></div>
        </div>
    );
}

CardBar.defaultProps = {
    level: 'green',
    height: '0%',
    width: '8px',
    marginLeft: 0,
    marginRight: 0,
}

export { CardBar };