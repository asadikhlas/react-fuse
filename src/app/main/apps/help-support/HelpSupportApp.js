import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { CardWidget } from 'components/CardWidget';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    maxWidth: '700px',
    paddingLeft: '20px',
    paddingRight: '20px',
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
      backgroundColor: '#11AE56',
      '&:hover': {
          backgroundColor: '#00c853',
      }
  },
  buttonUpgrade: {
      backgroundColor: "#448aff",
      '&:hover': {
          backgroundColor: "#2962ff",
      }
  },
  buttonDowngrade: {
      backgroundColor: "#ff5252",
      '&:hover': {
          backgroundColor: "#d50000",
      }
  },
  formTextarea: {
    border: '0 solid rgba(0, 0, 0, 0.42)',
    borderWidth: '0',
    borderRadius: 0,
    borderBottomWidth: '1px',
    '& textarea': {
      padding: '16px',
      background: 'transparent',

    }
  },
  select: {
    // background: '#fff',
    width: '100%',
		'& svg' : {
			color: 'rgba(0,0,0,.87)',
		},
		'& fieldset': {
      border: '0 solid rgba(0, 0, 0, 0.42)',
      borderRadius: 0,
      borderWidth: '0px!important',
      borderBottomWidth: '1px!important',
		},
    color: 'rgba(0,0,0,.87)',
    '& option': {
      background: '#fff!important',
      color: 'rgba(0,0,0,.87)!important',
    },
    '&:focus' : {
      background: 'transparent',
    }
  },
  formSubtitle: {
    fontSize: '19px',
    textAlign: 'center',
  }
  
}));
const HelpSupportApp = (props) => {
  const [inquiryType, setInquiryType] = React.useState('');
  const [priority, setPriority] = React.useState('');
  const classes = useStyles();
  return (
    <div className={clsx("container relative p-16 sm:p-24 flex flex-row justify-center items-center")}>
      <div className={clsx(classes.container,"contact-section page-form")}>
        {/* <div className="flex flex-col mb-24">
          <h1 style={{ fontSize: 30, textAlign:"center", }}>We are here to help you</h1>
          <p style={{ fontSize: 18, textAlign:'center'}}>Please fill out this form and we will get back to you immediately</p>
        </div> */}
        <CardWidget title="We are here to help you">
          <div className="p-20">
            <p className={clsx("mb-16", classes.formSubtitle)}>Please fill out this form and we will get back to you immediately</p>
            <FormControl className={classes.formControl}>
              <TextField InputLabelProps={{ shrink: true, style:{ transform: 'translate(14px, -6px) scale(0.75)' } }} label="Subject" />
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel shrink htmlFor="category-label-placeholder">Inquiry Type</InputLabel>
              <Select
                className={classes.select}
                value={inquiryType}
                onChange={(event) => setInquiryType(event.target.value)}
                id="inquiryType"
                name="inquiryType"
                displayEmpty
              >
                <MenuItem value="" disabled>Select Inquiry Type</MenuItem>
                <MenuItem value="question">Question</MenuItem>
                <MenuItem value="incident">Incident</MenuItem>
                <MenuItem value="problem">Problem</MenuItem>
                <MenuItem value="feature-request">Feature Request</MenuItem>
                <MenuItem value="refund">other</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} variant="outlined">
              <InputLabel shrink htmlFor="category-label-placeholder">Priority</InputLabel>
              <Select
                className={classes.select}
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
                id="priority"
                name="priority"
                displayEmpty
              >
                <MenuItem value="" disabled>Select Priority</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Urgent">Urgent</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={clsx(classes.formControl, classes.formTextarea)} variant="outlined">
              <InputLabel shrink htmlFor="description">Description</InputLabel>
              <TextareaAutosize id="description" aria-label="Description" rowsMin={3}  />
            </FormControl>
            <FormControl className={clsx(classes.formControl, classes.formTextarea)} variant="outlined">
              <InputLabel shrink htmlFor="description">File</InputLabel>
              <div className="py-16">
                <input type="file" id="myFile" name="filename"/>
              </div>
            </FormControl>

            <div className="flex flex-row justify-between mt-32">
              <Button variant="contained" color="primary" className={classes.buttonNewSite}>
                  Send
              </Button>
              <Button variant="contained" color="primary" className={classes.buttonDowngrade}>
                  Cancel
              </Button>
            </div>
          </div>
        </CardWidget>
      </div>
    </div>
  );
}


export default HelpSupportApp;
