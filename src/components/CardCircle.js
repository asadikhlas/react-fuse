import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { IconBorderCircle } from 'components/icons/IconBorderCircle';
const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '1px',
        opacity: 1,
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color: '#204891',
        fontSize: '31px',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

        '&.big': {
            '& .border': {
                width: '100%',
            },
            '& .circle': {
                fontSize: '31px',
            },
        },
        '&.medium': {
            '& .border': {
                width: '90%',
                
            },
            '& .circle': {
                fontSize: '20px',
            },
        },
        '&.small': {
            '& .border': {
                width: '75%',
            },
            '& .circle': {
                fontSize: '20px',
            }
        },
    },
    circle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '100%',
        maxWidth: '100%',
        '& .border': {
            width: '100%',
            opacity: '1',
            display: 'flex',
            position: 'relative',
            borderWidth: 0,
            alignItems:'center',
            justifyContent: 'center',
            '& svg': {
                maxWidth: '272px',
            }
        },
        '&.no-circle': {
            '& .border': {
                '& svg': {
                    opacity: '0',
                }
            }
        },
    },
    value: {
        letterSpacing: '2px',
    },
    subtitle: {
        fontSize: '14px',
        letterSpacing: '0',
    },
    title: {
        fontSize: '14px',
        color: '#151515',
        letterSpacing: '0',
    },
    text: {
        top: '50%',
        left: '0',
        position: 'absolute',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
}));
const CardCircle = (props) => {
    const classes = useStyles(props);
    return (
        <div className={clsx(classes.root, props.size, props.className, props.invertedBorder && 'inverted-border')}>
            <div className={clsx(classes.circle, 'circle', !props.circle && 'no-circle')} style={{
                height: props.height,
                width: props.width,
            }}>
                <div className="border">
                    <IconBorderCircle
                    width={'100%'}
                    fill={props.invertedBorder ? props.borderColor : '#c6c6c6'}
                    fillActive={props.invertedBorder ? '#c6c6c6' : props.borderColor}
                    />
                    <div className={classes.text}>
                        {props.value && <span className={classes.value} dangerouslySetInnerHTML={{ __html: props.value}} />}
                        {props.subtitle && <span className={classes.subtitle} dangerouslySetInnerHTML={{ __html: props.subtitle}} />}
                    </div>
                </div>
            </div>
            {props.title && <span className={classes.title} dangerouslySetInnerHTML={{ __html: props.title}} />}
        </div>
    );
}

CardCircle.defaultProps = {
    size: 'big',
    value: false,
    title: false,
    circle: true,
    height: false,
    width: false,
    subtitle: false,
    className: '',
    invertedBorder: false,
    borderColor: '#204891', //C60DF3
}

export { CardCircle };