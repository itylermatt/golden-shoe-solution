import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            display: 'flex',
            flexDirection: 'column'
        },
    }),
);

export default function TransitionsModal(props: { openModal: boolean, toggleModal: (string) => void }) {
    const classes = useStyles();
    const [reason, setReason] = React.useState<string>('');

    const handleClose = () => {
        props.toggleModal(false);
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openModal}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Reason for return</h2>
                        <div><input type="radio"/> Shoe Size</div>
                        <div><input type="radio"/> shoe style</div>
                        <div><input type="radio"/> Color</div>
                        <div><input type="radio"/> Other</div>
                        <input placeholder={'reason for other'} type="textArea"
                               onChange={e => setReason(e.target.value)} value={reason}/>
                        <button onClick={handleClose}>Submit</button>
                        <button onClick={handleClose}>Cancel</button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
