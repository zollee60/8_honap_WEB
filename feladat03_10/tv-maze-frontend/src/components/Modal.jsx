import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
/* import { useState } from "react"; */
import Button from "@material-ui/core/Button";
import TheatersIcon from "@material-ui/icons/Theaters";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    borderRadius: "3px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center",
  },
  Backdrop: {
    backgroundColor: "rgba(60, 77, 49, .5)",
  },
}));

export default function TransitionModal(props) {
  const classes = useStyles();
  /*  const [open, setOpen] = useState(props.open); */

  /*   const handleOpen = () => {
    setOpen(true);
  }; */

  const buttonClicked = (page) => {
    window.open(page, "_blank");
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      {props.data[props.id] && (
        <Modal
          disableEnforceFocus
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={props.open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            className: classes.Backdrop,
          }}>
          <Fade in={props.open}>
            <div className={classes.paper}>
              {props.data[props.id].show.image ? (
                <img
                  src={`${props.data[props.id].show.image.medium}`}
                  alt="cover art"
                  style={{ width: "90%", margin: "auto" }}
                />
              ) : (
                <img
                  src={"https://s3.amazonaws.com/FringeBucket/image_placeholder.png"}
                  alt="cover art"
                  style={{ width: "90%", margin: "auto" }}
                />
              )}
              <h2 id="transition-modal-title">
                {props.data[props.id] ? `${props.data[props.id].show.name}` : "no title"}
              </h2>
              <h4 id="transition-modal-description">
                Type:{" "}
                {props.data[props.id] ? `${props.data[props.id].show.type}` : "no type"}
              </h4>
              <h4>
                {props.data[props.id]
                  ? `Rating: ${props.data[props.id].show.rating.average}`
                  : "no rating"}
              </h4>
              <h4>
                {props.data[props.id]
                  ? `Language: ${props.data[props.id].show.language}`
                  : "no language"}
              </h4>
              <h4>
                {props.data[props.id]
                  ? `Genre: ${props.data[props.id].show.genres[0]}`
                  : "no genre"}
              </h4>
              <h5>
                {props.data[props.id]
                  ? `Premiered: ${props.data[props.id].show.premiered}`
                  : "no premier date"}
              </h5>
              <Button
                startIcon={<TheatersIcon />}
                variant="outlined"
                onClick={() => buttonClicked(`${props.data[props.id].show.url}`)}>
                More
              </Button>
            </div>
          </Fade>
        </Modal>
      )}
    </div>
  );
}
