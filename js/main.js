// 

/* const isChecked = true,
    isClose = true;

    console.log(isChecked && isClose) */


   // ============================================
               
   let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Сколько фильмов вы уже посмотрели?')
 
const personalMovieDB = {
    'count' : numberOfFilms,
    'movies' : {},
    'actors' : {},
    'genres' : [],
    'privat' :  false
    
}
     



let movies = {}

const moviesFilm = prompt('Один из последних просмотренных фильмов?'),
    moviesCount = prompt('На сколько оцените его?');

personalMovieDB.movies[moviesFilm] = moviesCount
 
console.log(personalMovieDB)