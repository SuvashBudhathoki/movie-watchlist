# Movie Watchlist

## Features

- The user is able to record movies that has been watched.
  - The user is able to record following details.
    - The name of the movie.
    - The date movie is watched, defaulting to today.
    - The rating as per the user.
  - The movies detais are saved in the browser using localStorage to maintain persistence.
- The user is able to view the list of movies in order of watch data (descending).
  - The user is able to view the name of the movie, watch data, rating of the movie, runtime of movie in addition to the details obtained from the Open Movie Database API (http://www.omdbapi.com/):
    - A poster for the movie.
    - Yhe genre/s the movie is in.
- The user is able to see some statistics on their watched movies.
  - The average rating the user have given to the movies that has been watched.
  - The total runtime of movies the user have watched in the past month (i.e. the month before)

## Solution Formulation

Steps I have thought of and executed for getting the above feauters. To ensure the app doesn't make request to API each time the page is opened, the movie data is stored in global state using Context Api which checks local storage during the initialization.

1. Prepare a dashboard where the user can see the list of movies and other statistics.
1. Create a Add movie component, where the OMDB API is called each time the user search for a movie name.
   - The api provides a single movie title that matches the name entered by user.
   - Once, the movie is selected, the user can provide the date watched and rating for the movie and add the movie to the watchlist.
1. I have created a separate folders for each component to make it easy to read and maintain. Any additonal css or future improvements with styled components can directly be implemented to the component in it's own folder without any confusion.
1. Identify different cases like JSON returning values as 'N/A' as well as preventing user to add the same name multiple times. In this scenario, I haven't considered addition of same movie with different watch dates.
1. The names for the components and functions are carefully selected.

## Libraries/ Tools used

- The major tools I used are React's Hooks and Context Api for this project.
- I have used reactstrap and bootstrap that was already available in the React template provided to have a simple/plain design easier for eye.

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

1. I have used React Hooks instead of Classes as I personally feel it is easier to use especially when writing small projects and components as well as it is easier to maintain the side effects.
1. For this project, I decided to use Context API instead of Redux since all the components I made are functional and . The use of useReducer and useContext makes it simpler and easier to pass the values in the components as required.
1. Using the OMDB API to search movie by Title instead of By Search. By title provides a single movie name which returns the JSON with required data to complete this project while by Search returned an array of movies with limited key properties.

## Somethings I might want to add in the future to make it a bigger project

If it was a bigger real project, additional features I would have worked initially are:

1. Create a user login to personalize each user.
1. Provide recommendation of movies according to the rating and genre the user have watched.
1. Suggest a list of free sites where the user can watch their favourite movies.
1. Create a separate list of watched movies and watch list movies.
