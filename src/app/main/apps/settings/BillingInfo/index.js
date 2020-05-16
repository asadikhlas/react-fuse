import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import SearchTopPage from 'components/SearchTopPage';
import { CardWidget } from 'components/CardWidget';
import clsx from 'clsx';

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


const BillingInfo = (props) => {
    const [paymentMethod, setPaymentMethod] = React.useState(false);
    const classes = useStyles();
    return (<div className="w-full">
        <SearchTopPage />
        <div className="container relative p-16 sm:p-24 flex flex-column justify-center items-center">
            <div className={clsx(classes.container, "page-form")}>
                <CardWidget title="Payment Method">
                    <form className={clsx(classes.root, 'p-20')} noValidate autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <RadioGroup className="flex flex-col ml-0" aria-label="payment-method" name="payment-method" value={paymentMethod} onChange={(event, value) => setPaymentMethod(value)}>
                                <FormControlLabel className="ml-0" value="credit-debit-card" control={<Radio name="payment-method" />} label="Credit/Debit Card" />
                                <FormControlLabel className="ml-0" value="ach-wire" control={<Radio name="payment-method" />} label="ACH/Wire" />
                                <FormControlLabel className="ml-0" value="Check" control={<Radio name="payment-method" />} label="Check" />
                                <FormControlLabel className="ml-0" value="Other" control={<Radio name="payment-method" />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink htmlFor="description">Date</InputLabel>
                            <div className="pt-16">
                                <Typography variant="h5">01/06/2020</Typography>
                            </div>
                        </FormControl>
                        <div className="flex flex-row">
                            <Button variant="contained" color="primary" className={classes.buttonNewSite}>
                                Save
                            </Button>
                        </div>
                    </form>
                    {/* <TableUsers /> */}
                </CardWidget>
            </div>
        </div>
    </div>
    )

}

export default BillingInfo;