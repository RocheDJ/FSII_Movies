import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import img from "../images/user.png";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";

const styles = {
  card: { maxWidth: 450, height: 720 },
  media: { height: 350 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  blue: {
    backgroundColor: "rgb(0, 0, 255)",
  },
  buttonOuterLayout: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const LogoutPage = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card sx={styles.card}>
          <CardHeader
            title={
              <Typography variant="h4" component="p">
                Dave's Movie / TV TMDB Client{" "}
              </Typography>
            }
          />
          <CardMedia sx={styles.media} image={img} />
          <CardContent>
            <Typography variant="h5" component="p">
              Are you sure you want to leave
            </Typography>
          </CardContent>
          <CardContent></CardContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <CardActions>
                  <Button
                    size="large"
                    variant="outlined"
                    color="secondary"
                    onClick={props.handleLogout}
                    style={styles.buttonOuterLayout}
                  >
                    Logout
                  </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LogoutPage;
