import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({movieDetail}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{movieDetail.Title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Actors : {movieDetail.Actors}
          </DialogContentText>
          <br/>
          <DialogContentText id="alert-dialog-slide-description">
            Awards : {movieDetail.Awards}
          </DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            Plot : {movieDetail.Plot}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
