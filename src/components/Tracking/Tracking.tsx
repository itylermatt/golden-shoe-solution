import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './Tracking.css';
import Stepper from '../../components/Stepper/Stepper';
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(3),
                width: '100%',
                height: '80vh',
            },
        },
    }),
);

export default function SimplePaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <div>
                    <h2>ORDER NUMBER: 326783234</h2>
                </div>
                <br/><br/>
                <div className={'progressHeading'}>
                    <div><h1>IN TRANSIT</h1></div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <Stepper/>
                </div>
                <br/><br/><br/><br/><br/>
                <div className={'customerServiceButton'}>
                    <Button variant={'contained'} color={'primary'}>Customer Service</Button>
                </div>
            </Paper>
        </div>
    );
}
