//see https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
import React from "react";
import "./login.css";
import { loginUser } from "../../api/login-api";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import img from "../../images/user.png";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import AccountCircle from "@mui/icons-material/AccountCircle";
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
};

export default function Login({ setToken }) {
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
                Please Log In
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
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="input-with-icon-adornment">
                  Username
                </InputLabel>
                <FilledInput
                  id="-username"
                  onChange={(e) => setUserName(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <CardActions>
                <Button
                  size="small"
                 
                  variant="outlined"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
      </Grid>

  );
}
