require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const homeRouter = require("./routes/home");
const moviesRouter = require("./routes/movies");
const moviesApiRouter = require("./routes/api/allMoviesApi");
const singleMovieApiRouter = require("./routes/api/singleMovieApi");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Cofigure axios to only request the movie db
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// Routes
app.use("/movies", moviesRouter);
app.use("/api/all-movies", moviesApiRouter);
app.use("/api/single-movie", singleMovieApiRouter);
app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
