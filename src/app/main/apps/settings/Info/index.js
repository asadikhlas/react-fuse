import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardWidget } from 'components/CardWidget';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import SearchTopPage	from 'components/SearchTopPage';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        maxWidth: '700px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    root: {
        '& > *': {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          boxSizing: 'border-box',
        },
        boxSizing: 'border-box',
        width: '100%',
        padding: '20px',
    },
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: '100%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    buttonNewSite: {
        marginRight: '12px',
        // #69f0ae #00c853
        backgroundColor: '#11AE56',
        '&:hover': {
            backgroundColor: '#00c853',
        }
    },
    buttonUpgrade: {
        marginRight: '12px',
        // #448aff #2962ff
        backgroundColor: "#448aff",
        '&:hover': {
            backgroundColor: "#2962ff",
        }
    },
    buttonDowngrade: {
        marginRight: '12px',

        // #ff5252 #d50000
        backgroundColor: "#ff5252",
        '&:hover': {
            backgroundColor: "#d50000",
        }
    },
}));


const Info = (props) => {
    const [phone, setPhone] = React.useState(false);
    const [browsers, setBrowsers] = React.useState({});
    const browserChange = (event,checked) => {
        let newValue = {
            ...browsers,
        }
        newValue[event.target.name] = checked;
        setBrowsers(newValue)
    }
    const classes = useStyles();
    return (<div className="w-full">
        <SearchTopPage />
        <div className="container relative p-16 sm:p-24 flex flex-column justify-center items-center">
        <div className={clsx("page-form", classes.container)}>
                <CardWidget title="Subscription/Update">
                    <form className={classes.root} noValidate autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <TextField label="Project/Site" />
                        </FormControl>
                        <div className="flex flex-col">
                            <p><strong>Browser</strong></p>
                            <div className="flex flex-row justify-between mt-8">
                                <FormControl className={classes.formControl} style={{marginBottom:0, marginTop:0}}>
                                    <FormControlLabel
                                        style={{marginBottom:0, marginTop:0}}
                                        control={<Checkbox type="checkbox" 
                                        style={{ paddingBottom: 0, paddingTop: 0 }}
                                        name="chrome"
                                        checked={browsers['chrome'] === true} onChange={browserChange} />}
                                        label='Chrome'
                                        />
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom:0, marginTop:0}}>
                                    <FormControlLabel
                                        style={{marginBottom:0, marginTop:0}}
                                        control={<Checkbox type="checkbox" 
                                        style={{ paddingBottom: 0, paddingTop: 0 }}
                                        name="mozilla"
                                        checked={browsers['mozilla'] === true} onChange={browserChange} />}
                                        label='Mozilla'
                                        />
                                </FormControl>
                                <FormControl className={classes.formControl} style={{marginBottom:0, marginTop:0}}>
                                    <FormControlLabel
                                        style={{marginBottom:0, marginTop:0}}
                                        control={<Checkbox type="checkbox" 
                                        style={{ paddingBottom: 0, paddingTop: 0 }}
                                        name="safari"
                                        checked={browsers['safari'] === true} onChange={browserChange} />}
                                        label='Safari'
                                        />
                                </FormControl>
                            </div>
                        </div>
                        <FormControl className={classes.formControl}>
                            <TextField label="Number of Page" />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField label="Resolution Used"  />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            {/* <TextField label="Phone Support"  /> */}
                            <FormLabel component="legend">Phone Support</FormLabel>
                            <RadioGroup className="flex flex-row" aria-label="phonesupport" name="phonesupport" value={phone} onChange={(event, value) => setPhone(value)}>
                                <FormControlLabel className="mr-16" value="yes" control={<Radio name="phonesupport" />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio name="phonesupport" />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        <div className="flex flex-row">
                            <Button variant="contained" color="primary" className={classes.buttonNewSite}>
                                New Site
                            </Button>
                            <Button variant="contained" color="primary" className={classes.buttonUpgrade}>
                                Upgrade
                            </Button>
                            <Button variant="contained" color="primary" className={classes.buttonDowngrade}>
                                Downgrade
                            </Button>
                        </div>
                    </form>
                </CardWidget>
            </div>
        </div>
    </div>
    )
}

export default Info;