

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# movie-app
# 🎬 Movie App

This is a responsive React-based Movie App built as a project checkpoint. The application allows users to view a collection of their favorite movies or TV shows, filter them by title or rating, and add new movies through a form.

## 📌 Features

### ✅ Initial Features
- Display a list of predefined movies with:
  - Title
  - Description
  - Poster image
  - Rating
- Filter movies by title and rating
- Add new movies using a dynamic form

### 🆕 New Features (Routing Update)
In this latest update (on a separate `add-routing` branch), we added **React Router** to support navigating between pages:

- **Movie Details Page**:
  - Each movie card is now clickable.
  - When clicked, it navigates to a **separate page** showing:
    - Full description
    - Embedded trailer (YouTube)
    - A back button to return to the home page

- **Clean Routing Structure**:
  - `/` → Home page with filter, movie list, and add movie form
  - `/movie/:id` → Detail page for the selected movie

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/houdasoso/movie-app.git
cd movie-app
