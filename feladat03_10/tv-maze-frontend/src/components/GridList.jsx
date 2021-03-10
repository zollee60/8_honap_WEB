import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
/* import CardMedia from "@material-ui/core/CardMedia"; */
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import TheatersIcon from "@material-ui/icons/Theaters";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 150,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
});

export function GridList(props) {
  const classes = useStyles();
  const buttonClicked = (page) => {
    window.open(page, "_blank");
  };

  return (
    <div
      className="cardWrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
      {props.data &&
        props.data.map((data, index) => {
          return (
            <Card key={index} className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <img
                    src={
                      data.show.image
                        ? `${data.show.image.medium}`
                        : "https://s3.amazonaws.com/FringeBucket/image_placeholder.png"
                    }
                    alt=""
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

                <Button
                  className={classes.root}
                  variant="outlined"
                  startIcon={<TheatersIcon />}
                  onClick={() => buttonClicked(`${data.show.url}`)}>
                  More
                </Button>
              </CardActionArea>
            </Card>
          );
        })}
    </div>
  );
}
