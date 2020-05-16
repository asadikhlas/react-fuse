import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IconBack } from './icons/IconBack';
import { IconNext } from './icons/IconNext';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        background: '#204891 0% 0% no-repeat padding-box',
        border: '1px solid #204891',
        borderRadius: '11px',
        opacity: '1',
        // overflow: 'hidden',

        '& h4': {
            textAlign: 'center',
            width: '68%',
            fontSize: '14px',
            fontWeight: 'bold',
            letterSpacing: '0',
            color: '#204891',
            opacity: '1',
            lineHeight: '40px',
            background: '#E9E9E9 0% 0% no-repeat padding-box',
        },
        '& button': {
            width: '16%',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: '40px',
            '& svg': {
                width: '12px',
                fill: '#fff',
            }
        },
    },
    buttonLeft: {
        // borderRadius: '12px 0 0 12px',
    },
    buttonRight: {
        // borderRadius: '0 12px 12px 0',
    },
}));
const CardNav = (props) => {
    const classes = useStyles(props);
    return (
        <div className={clsx(classes.root, props.level)}>
            <button className={classes.buttonLeft} onClick={props.onClickLeft}><IconBack /></button>
            <Typography variant='h4'>{props.label}</Typography>
            <button className={classes.buttonRight} onClick={props.onClickRight}><IconNext /></button>
        </div>
    );
}

CardNav.defaultProps = {
    label: '',
    onClickLeft: () => null,
    onClickRight: () => null,
}

export { CardNav };