import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import GoldTable from "components/GoldTable";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DashboardView = (props) => {
  const { onHandleGetData,loading,onHandleLoading } = props;
  const [hccid, setHccid] = useState("");
  const [listRank,setListRank]= useState();
  const [data, setData] = useState();
  const [open, setOpen] = React.useState(false);
  const [fullname,setFullname]= useState("");
  const handleClickOpen = (event) => {
    event.preventDefault();
    onHandleGetData(hccid,fullname).then(res=>{
      setData(res)
      setOpen(true);
    });
   
  };
  const handleLoading = ()=>{
    onHandleLoading().then(res=>{
 
      setListRank(res)
    })
  }
  useEffect(() => {
    setInterval(
      handleLoading,60000)
  })
 
  const handleClose = () => {
    setOpen(false);
  };
  // handleLoading()
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
              <div style={{height: '100%'}}>
          
      
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form  onSubmit={handleClickOpen}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="HCCID"
              label="HCCID"
              name="HCCID"
              value={hccid}
              onChange={(e) => {
                setHccid(e.target.value);
              }}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fullname"
              label="Fullname"
              id="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />
 <CircularProgress  variant="determinate"  />
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              color="secondary" 
              onClick={handleClickOpen}
              disabled={loading}
            > 
              Get Prize
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              // PaperComponent={PaperComponent}
            >
              <DialogTitle
                style={{ cursor: "move" }}
                id="draggable-dialog-title"
              >
                Subscribe
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Bạn đã trúng {data?.data?.name}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Cancel
                </Button>
               
              </DialogActions>
            </Dialog>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* GoldTable */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper>
              <GoldTable listRank={listRank} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
// function PaperComponent(props) {
//   return (
//     <Draggable
//       handle="#draggable-dialog-title"
//       cancel={'[class*="MuiDialogContent-root"]'}
//     >
//       <Paper {...props} />
//     </Draggable>
//   );
// }
export default DashboardView;
