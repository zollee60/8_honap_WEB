import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
/* import CardMedia from "@material-ui/core/CardMedia"; */
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import TheatersIcon from "@material-ui/icons/Theaters";
import TransitionModal from "./Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
});

export function GridList(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  let propsData = props.data;

  const buttonClicked = (page) => {
    window.open(page, "_blank");
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      className="cardWrapper"
      style={{
        display: "flex",
        /* flexDirection: "column", */
        flexWrap: "wrap",
        justifyContent: "space-around",
        /* alignItems: "center", */
        /* alignContent: "flex-start", */
      }}>
      {props.data &&
        props.data.map((data, index) => {
          return (
            <Card key={index} id={index} className={classes.root}>
              <CardActionArea
                id={index}
                key={index}
                onClick={(e) => {
                  setId(e.currentTarget.id);
                  console.log(id);
                  handleOpen();
                }}
                style={{
                  height: "90%",
                }}>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}>
                  <img
                    src={
                      data.show.image
                        ? `${data.show.image.medium}`
                        : "https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
                    }
                    alt="cover art"
                    style={{ width: "90%", margin: "auto" }}
                  />
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.show.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {data.show.summary
                      ? data.show.summary.replaceAll(/( |<([^>]+)>)/gi, " ")
                      : "No summary"}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                className={classes.root}
                variant="outlined"
                startIcon={<TheatersIcon />}
                onClick={() => buttonClicked(`${data.show.url}`)}>
                More
              </Button>
            </Card>
          );
        })}
      {propsData && (
        <TransitionModal open={open} setOpen={setOpen} data={propsData} id={id} />
      )}
    </div>
  );
}
