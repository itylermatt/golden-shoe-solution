import React from 'react';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {IconButton} from "@material-ui/core";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    specialOffer: {
        width: '100%',
    }
}));

export default function CustomizedAlert() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton className={classes.specialOffer}>
                <Alert severity="error">Upto 30% off Valentine's Special! HURRY WHILE STOCKS LAST</Alert>
            </IconButton>
        </div>
    );
}

// @todo: change this to just an Alert Element Name