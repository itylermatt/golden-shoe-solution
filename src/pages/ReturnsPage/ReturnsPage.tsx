import React, {useEffect, useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);

function InteractiveList(props) {

    const classes = useStyles();
    const [purchases, setPurchases] = useState<any>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        axios.get('http://localhost:3001/purchases').then(response => {
            setPurchases(response.data.purchases);
        }).catch(e => console.log(e));
    }, []);

    return (
        <div className={classes.root}>
            <Modal openModal={openModal} toggleModal={setOpenModal}/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className={classes.title}>
                        Purchases
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={false}>
                            {purchases.map((purchase, index) => {
                                return (
                                    <div key={index}>
                                        <IconButton onClick={() => setOpenModal(true)}
                                                    style={{width: '100vw', borderRadius: 0}}>
                                            <ListItem style={{width: '100vw'}}>
                                                <ListItemText
                                                    primary={purchase.item}
                                                    secondary={null}
                                                />
                                                <ListItemSecondaryAction>
                                                    <Typography> {purchase.date} </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        </IconButton>
                                    </div>
                                );
                            })}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(InteractiveList);
