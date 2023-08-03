import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
const Youtube = ({ embedId, caption }) => {
  return (
    <>
      <Card sx={{ maxWidth: 745 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {caption}
          </Typography>
        </CardContent>
        <CardContent>
          <CardMedia
            sx={{ height: 440 }}
            component="iframe"
            image={`https://www.youtube.com/embed/${embedId}`}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Youtube;
