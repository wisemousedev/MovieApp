"use strict";

const numberPfFilms = +prompt("How many movies you have watched?", "");

const personalMovieDB = {
    count: numberPfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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

if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
    console.log("You have watched too few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("You're a classic moviegoer");
} else if (personalMovieDB.count >= 30){
    console.log("You're a real movie buff");
} else {
    console.log('Some error happend :(');
}

console.log(personalMovieDB);