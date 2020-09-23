# Movie Watchlist

## Features

- The user can record movies that have been watched.
  - The user can record the following details.
    - The name of the movie.
    - The date movie is watched, defaulting to today.
    - The rating as per the user.
  - The movie details are saved in the browser using localStorage to maintain persistence.
- The user can view the list of movies to watch data (descending).
  - The user can view the name of the movie, watch data, rating of the movie, runtime of the movie in addition to the details obtained from the Open Movie Database API (http://www.omdbapi.com/):
    - A poster for the movie.
    - The genre/s the movie is in.
- The user can see some statistics on their watched movies.
  - The average rating the user has given to the movies that have been watched.
  - The total runtime of movies the user has watched in the past month (i.e. the month before).
  - The total number of movies in the watchlist.
  - The most common genre of movies the user loves watching.

## Solution Formulation

Steps I have thought of and executed for getting the above features. To ensure the app doesn't request API each time the page is opened, an API request is made when the user searches for a movie via its name, and the movie data is stored in a global state using Context API which checks local storage during the initialization.

1. Create a dashboard where the user can see the list of movies and other statistics.
1. Create an Add movie component, where the OMDB API is called each time the user search for a movie name.
   - The API provides a single movie title that matches the name entered by the user.
   - Once, the movie is selected, the user can provide the date watched and rating for the movie and add the movie to the watchlist.
1. I have created separate folders for each component to make it easy to read and maintain. Any additional CSS or future improvements with styled-components can directly be implemented to the component in its folder without any confusion.
1. Identify different cases like JSON returning values as 'N/A' as well as preventing users to add the same name multiple times. In this scenario, I haven't considered the addition of the same movie with different watch dates.
1. The names for the components and functions are carefully selected.

## Libraries/ Tools used

- The major tools I used are React's Hooks and Context API for this project.
- I have used reactstrap and bootstrap that was already available in the React template provided to have a simple/plain design easier for the eye.

## Setup

### Windows

#### Prerequisites

**Docker Desktop for Windows** or **NodeJS**

#### Instruction

1. If you are using Docker Desktop for Windows, rename `docker-compose.override.yml.example` to `docker-compose.override.yml` and change the settings to suit your environment
2. With administrative privileges, run `.\bin\start.cmd` on Command Prompt or Powershell

### Unix-Based Operating Systems

#### Prerequisites

**Docker** (**Docker Desktop for Mac** on macOS) or **NodeJS**

#### Instruction

Follow the instruction from **one of the following** depending on which software you have installed.

##### Docker

1. Rename `docker-compose.override.yml.example` to `docker-compose.override.yml` and change the settings to suit your environment
2. Run `./bin/docker` on console

##### Yarn

1. Run `./bin/yarn`

##### NPM

1. Run `./bin/npm`

## Decisions and tradeoffs

1. I have used React Hooks instead of Classes as I feel it is easier to use especially when writing small projects and components as well as it is easier to maintain the side effects.
1. For this project, I decided to use Context API instead of Redux since all the components I made are functional and. The use of useReducer and use context makes it simpler and easier to pass the values in the components as required.
1. Using the OMDB API to search a movie by Title instead of By Search. By title provides a single movie name that returns the JSON with required data to complete this project while Search returned an array of movies with limited key properties.

## Somethings I might want to add in the future to make it a bigger project

If it was a bigger real project, additional features I would have worked initially are:

1. Create a user login to personalize each user.
1. Provide recommendation of movies according to the rating and genre the user have watched.
1. Suggest a list of free sites where the user can watch their favorite movies.
1. Create a separate list of watched movies and watch list movies.

Regards,
Suvash Budhathoki
