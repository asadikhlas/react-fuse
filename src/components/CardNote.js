import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import colors from 'components/colors';
const useStyles = makeStyles((theme, options) => ({
    root: {
        border: '2px solid #707070',
        height: (theme.size || 68) + 'px',
        width: (theme.size || 68) + 'px',
        textAlign: 'center',
        borderRadius: '100%',
        position: 'relative',

        '& > p': {
            fontSize: '32px',
            fontWeight: 'bold',
        },

        '& > *': {
            lineHeight: ((theme.size || 68) - 4) + 'px',
        },

        '&.yellow': {
            borderColor: colors.yellow,
            color: colors.yellow,
        },
        '&.green': {
            borderColor: colors.green,
            color: colors.green,
        },
        '&.red': {
            borderColor: colors.red,
            color: colors.red,
        },
    },
}));
const CardNote = (props) => {
    const classes = useStyles(props, {props});
    return (<div className={clsx('border-3', classes.root, props.className)}>
        <Typography>{props.children}</Typography>
    </div>
    );
}

CardNote.defaultProps = {
    size: '68'
}

export { CardNote };