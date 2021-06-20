"use strict";


 
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    //functions
    start: function() {
        personalMovieDB.count = +prompt('How many movies you have watched?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies you have watched?", "");
        }
    },
    saveMyMovies: function() {
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
    },
    identifyViewerType: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
            console.log("You have watched too few movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("You're a classic moviegoer");
        } else if (personalMovieDB.count >= 30){
            console.log("You're a real movie buff");
        } else {
            console.log('Some error happend :(');
        }
    },
    showMoviesDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() { 
        for (let i = 1; i < 2; i++) {
           /* let genre =  prompt(`What is your favorite genre at number ${i}?`);

            if (genre === '' || genre == null) {
                console.log('You have entered incorrect data')
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }*/

            /* Aternative way */
            let genres =  prompt(`Enter you favorite genres, using comma`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('You have entered incorrect data');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }

        }   

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre ${i + 1} - is ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.saveMyMovies();

personalMovieDB.identifyViewerType();

personalMovieDB.showMoviesDB(personalMovieDB.private);

personalMovieDB.writeYourGenres();