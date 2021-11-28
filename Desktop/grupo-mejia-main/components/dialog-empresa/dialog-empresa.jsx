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
    padding: " 0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
    fontSize: "16px",
    fontStyle: "italic",
    color: "#5a5a5a",
  },
}))(MuiDialogContent);

const DialogEmpresa = (props) => {
  const { onClose, open, data } = props;

  const handleClose = () => {
    onClose(false);
  };

  return (
    <Dialog
      aria-labelledby="simple-dialog-title"
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogTitle id="simple-dialog-title">{data.title}</DialogTitle>
      <DialogContent>
        <img src={data.image} width="45%" />
        <p>{data.text}</p>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEmpresa;
