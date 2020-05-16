import React from 'react';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import { CardTitle } from 'components/CardTitle';
import { makeStyles } from '@material-ui/core/styles';
import colors from 'components/colors';
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',

        '&.with-title' : {
            paddingTop: '47px',
        },
        '& [class*="border-"]': {
            borderColor: 'rgba(0,0,0,.6)',
        }
    },
    card: {
        overflow: 'visible',
        borderRadius: '0',
        height: '100%',

        '& .card-title': {
            textAlign: 'left',
            fontSize: '14px',
            lineHeight: '22px',
            fontWeight: 500,
            letterSpacing: '0px',
            color: '#000000',
            opacity: 1,
        },
        '& hr' : {
            backgroundColor: 'rgba(0, 0, 0, 0.20)',
        },
        '& .columns' : {
            paddingBottom: '15px',
            marginBottom: '15px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.20)',

            '& .column': {
                width: '50%',

                '& + .column': {
                    borderLeft: '1px solid rgba(0, 0, 0, 0.20)',
                    paddingLeft: '15px',
                },

                '& ul': {
                    '& li': {
                        textAlign: 'left',
                        fontSize: '14px',
                        lineHeight:'22px',
                        letterSpacing: '0.28px',
                        color: '#151515',
                        opacity: '1',
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',

                        '& svg': {
                            marginRight: '10px',
                        },
                        '& span': {
                            fontWeight: 'bold',
                            marginRight: '10px',
                        },
                        '&.green': {
                            color: colors.green,
                            '& svg *': {
                                fill: colors.green,
                            },
                        },
                        '&.red': {
                            color: colors.red,
                            '& svg *': {
                                fill: colors.red,
                            },
                        },
                        '&.yellow': {
                            color: colors.yellow,
                            '& svg *': {
                                fill: colors.yellow,
                            },
                        }
                    }
                }
            }
        }
    }
}));

const CardWidget = (props) => {
    const classes = useStyles(props);
    
    return (<div className={clsx("w-full", classes.root, (props.title && 'with-title'))}>
        {props.title && <CardTitle>{props.title}</CardTitle>}
        <Card className={clsx("w-full shadow-none border-1", classes.card, props.className)}>
            {props.children}
        </Card>
    </div>);
}

export { CardWidget };