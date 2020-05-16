import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '0',
        height: '47px',
        transform: 'translateY(1px)',
        left: '0',
        background: '#fff',
        padding: '10px 25px',
        borderBottomColor:'transparent !important',
        borderRadius: '20px 20px 0px 0px',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '0px',
        color: '#151515',
        opacity: 1,
    }
}));
const CardTitle = (props) => {
    const classes = useStyles(props);
    return (
        <Typography {...props} className={clsx('border-1', classes.root)}>{props.children}</Typography>
    );
}

CardTitle.defaultProps = {
    color:"textSecondary",
}

export { CardTitle };