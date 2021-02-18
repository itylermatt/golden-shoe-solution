import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }),
);

export default function SimpleAccordion(props: {category: string, subCategories: Array<any>}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{props.category}</Typography>
                </AccordionSummary>
                {props.subCategories.map((subCat, index) => {
                    return(
                        <AccordionDetails key={index}>
                            <IconButton>
                                <Typography>
                                    {subCat.name}
                                </Typography>
                            </IconButton>
                        </AccordionDetails>
                    );
                })}
            </Accordion>
        </div>
    );
}
