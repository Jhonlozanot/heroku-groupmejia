import React, { forwardRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    margin: 1,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" align="center">
        {children}
      </Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(() => ({
  root: {
    padding: " 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    fontSize: "16px",
  },
}))(MuiDialogContent);

const DialogResult = (props) => {
  const { onClose, open, result } = props;

  const handleClose = () => {
    onClose(false);
  };
  // hola
  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogTitle id="simple-dialog-title">{result}</DialogTitle>
      <DialogContent>
        <img src="static/png/logo.png" alt="" width="100%" />
      </DialogContent>
    </Dialog>
  );
};

export default DialogResult;
