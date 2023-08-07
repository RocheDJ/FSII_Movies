
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



## Authentication.
#### Login Screen
![][image10]

#### Logout at any stage by clicking this icon
![][image11]

#### Confirm logout by clicking the logout button here

![][image12]


### Protected routes 

All routes are protected as the user must login to the site.



#### Protected functionality. (if relevant)

[ Briefly state any app functionality that requires authentication, e.g. only authenticated users can tag a movie as a 'favourite'.]

#### Supabase (if relevant)

Not used

## Deployment .

### The application itself has been deployed to

https://djr-fsii-assignment.netlify.app/.

Username: demo ; Password: demo

At the moment the validation middle ware has not been deployed.

## Persistence.



## Additional Information.



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