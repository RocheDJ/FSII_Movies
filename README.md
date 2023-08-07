
# Full Stack Development 2 - Assignment.

__Name:__ David Roche

## Features.

As well as refining some of the features from the class the following new and extended features were added. 

+ Select between movie or TV shows.
+ Revised site headier depending on wither Movie or tv selected.
+ Revised filter options depending on wither Movie or tv selected.
+ Order of the shown movie /TV card selectable via filter.
+ TV and movie details page shows available video content for selected movie or TV show.
+ Revised TV/ Movie card.

## Feature Design.


#### Select between movie or TV shows..

> Allows the user via the filter dialogue to choose between TV or Movie. and stores the option in session information.

![][image1]

#### Revised site headier depending on wither Movie or tv selected.

> Changes the colour and the contents of the site header depending on wether TV or Movie are selected.
>> Tv Selected
![][image2]


>> Movie Selected
![][image3]

#### Revised filter options depending on wither Movie or tv selected.
> Changes the genre list depending on tv or movie selection.  
>> Tv Selected
![][image4]
>> Movie Selected
![][image5]

#### Order of the shown movie /TV card selectable via filter..
> Changes the displayed order of TV or Movie cards shown  
>> Movie selected, sorted by release date.
![][image6]
>> TV selected, sorted by first Air Date
![][image7]


#### TV and movie details page shows available video content for selected movie or TV show.
> User can view movie trailers and clips from the details page
![][image8] 
>> User can filter available videos using the drop down list
![][image9] 


## Storybook.
Revised TV and movies card layout and control icons for add to faverites, info and add to watchlist.
> Storybook TV card
![][image13]


## Authentication.
#### Login Screen
![][image10]

#### Logout at any stage by clicking this icon
![][image11]

#### Confirm logout by clicking the logout button here

![][image12]


### Protected routes 

All routes are protected as the user must login to the site.


#### Protected functionality.

One logged ino the app all options are available.
Login is by means of a token stored in sessionStorage. Reference `./src/components/app/useToken.js`

```` 
import { useState } from "react";

export default function useToken() { 
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState();

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
````



#### Supabase 

Not used

## Deployment .

### The application itself has been deployed to

https://djr-fsii-assignment.netlify.app/.

Username: demo ; Password: demo

At the moment the validation middle ware has not been deployed.

## Persistence.

No persistance used in this application.


## Additional Information.

### As well as google search and class notes the following  additional resources were used.

[Digital Ocean - Login](https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications)

[medium.com-JWT aut](https://medium.com/@gsandamali30/jwt-based-user-authentication-using-reactjs-node-express-and-mysql-41b5bedde11f)

[Create React App - Deployment](https://create-react-app.dev/docs/deployment/)

[Smart Dev - Adding Video](https://smartdevpreneur.com/four-examples-of-material-ui-cardmedia/#CardMedia_IFrame_Examples)

[MUI - Getting started](https://mui.com/material-ui/getting-started/example-projects/)

[MUI - Side Drawer](https://mui.com/material-ui/react-drawer/)

### Middle ware 

#### A middleware app was constructed to allow for user logon and registration.
This app is a follows and runs in node express.
Note server app for demo only as cors too open.

````
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

let key = fs.readFileSync("--------------/privkey.pem", "utf-8");
let cert = fs.readFileSync("-------------/fullchain.pem", "utf-8");

const db = mysql.createConnection({
  user: "react",
  host: "localhost",
  password: "react",
  database: "loginsystem",
});



const options = {
  key: key,
  cert: cert,
};

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(
  cors(),
  express.json(),
  bodyParser.urlencoded({ extended: true })
);

app.post("/register",cors(), (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.execute(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      }

      if (result.affectedRows == 1) {
        res.send(result);
      } else ({ message: "Error in registering" });
    }
  );
});

app.post("/login",cors(), (req, res) => {
  const webReq = req;
  
  const username = req.body.username;
  const password = req.body.password;
  try{
	  console.log("login request " + username); 
	    db.execute(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        result.message = "log in ok";
        res.send({
          token: "Token 1234123",
          id: result.id,
          user: username,
        });
      } else {
        res.send(result);
      }
    }
  );
  }catch(e){
	console.log(e);
  }
  

});

https.createServer(options, app).listen(3001, function (req, res) {
   console.log("Server started at port 3001"); //and here
});

```` 


[image1]: ./images/image_1.png
[image2]: ./images/home_tv_1.png
[image3]: ./images/home_mo_1.png
[image4]: ./images/tv_g.png
[image5]: ./images/movie_g.png
[image6]: ./images/Mo_release_d.png
[image7]: ./images/tv_air_date.png
[image8]: ./images/movei_trailers.png
[image9]: ./images/video_select.png
[image10]: ./images/login.png
[image11]: ./images/logout_icon.png
[image12]: ./images/logout.png
[image13]: ./images/sbTVcard.png