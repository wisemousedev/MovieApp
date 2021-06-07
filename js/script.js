"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies you have watched?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies you have watched?", "");
    }
}

start();
 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function saveMyMovies() {
    for (let i = 0; i < 2; i++){
        const   a = prompt('One of the last movies you have watched?', ''),
            b = prompt('How will you score it?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }     
    }
}


saveMyMovies();



function identifyViewerType() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
        console.log("You have watched too few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("You're a classic moviegoer");
    } else if (personalMovieDB.count >= 30){
        console.log("You're a real movie buff");
    } else {
        console.log('Some error happend :(');
    }
}

identifyViewerType();

function showMoviesDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMoviesDB(personalMovieDB.private);

function writeYourGenres() { 
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`What is your favorite genre at number ${i}?`);
    }   
}
writeYourGenres();