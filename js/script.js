"use strict";

const numberPfFilms = +prompt("How many movies you have watched?", "");

const personalMovieDB = {
    count: numberPfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const   a = prompt('One of the last movies you have watched?', ''),
        b = prompt('How will you score it?', ''),
        c = prompt('One of the last movies you have watched?', ''),
        d = prompt('How will you score it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);