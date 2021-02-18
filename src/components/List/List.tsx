import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

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

function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function InteractiveList() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" className={classes.title}>
                        Purchases
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <div>
                                    <ListItem>
                                        <ListItemText
                                            primary="Single-line item"
                                            secondary={secondary ? 'Secondary text' : null}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete">
                                                <Typography> 2 days ago </Typography>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </div>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}