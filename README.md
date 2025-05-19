🎬 React Movie App :: 🎬 Best Movies
A responsive React-based web application that allows users to view, filter, and add their favorite movies or TV shows. This app demonstrates practical usage of React components, React Hooks like useState, and Bootstrap for styling and responsiveness.

🚀 Features

Filter movies by title or rating

Add new movies using a dynamic form

Responsive design with Bootstrap 5

Component-based architecture for clean and scalable code

🧱 Project Structure & Components
📁 App.js
The root component of the app

Manages the global state of movies and filters

Contains logic for:

Filtering the list of movies

Adding a new movie

Renders child components: Filter, AddMovie, and MovieList

🎞️ MovieCard.js
Reusable card component for displaying a single movie

Props:

movie: contains title, description, posterURL, rating

Uses Bootstrap’s card classes to style the UI

Ensures responsive image and text layout

🎬 MovieList.js
Displays a list of movies as a responsive Bootstrap grid

Props:

movies: an array of movie objects

Maps over the movies array and renders a MovieCard for each movie

Uses Bootstrap’s grid system (row + col) for responsiveness

🔎 Filter.js
Provides input fields to filter movies by title or rating

Props:

setFilter: function to update the filter criteria in App.js

Contains:

A text input for title search

A number input for rating filter

Updates the filter state on each change to re-render filtered movies

➕ AddMovie.js
Contains a toggleable form to add a new movie

Props:

handleAddMovie: function passed from App.js to update the movie list

Uses useState to manage both:

Visibility of the form (showForm)

Form inputs for the new movie

On submission:

Sends the movie data to App.js

Resets the form

Hides the form again

 Styling and Responsiveness
Bootstrap 5 is used throughout the app for consistent styling

Layout and components are responsive using Bootstrap’s grid (container, row, col-md, etc.)

Custom styles are added in App.css for spacing, card sizing, and mobile responsiveness


🧠 Skills Demonstrated
React fundamentals (components, props, state)

Conditional rendering (useState)

React Bootstrap integration

Form handling in React

Filtering logic with .filter() and .includes()
