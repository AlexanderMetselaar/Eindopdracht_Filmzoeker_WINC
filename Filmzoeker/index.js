const movieSelection = document.getElementById("list_of_movies");

const addMoviesToDom = (films) => {
    movieSelection.innerHTML = '';
    films.map((film) => {
        const item = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        img.setAttribute('class', 'imageContainer');
        img.src = film.Poster;
        item.appendChild(a);
        a.appendChild(img);
        a.setAttribute('href', 'https://www.imdb.com/title/' + film.imdbID);
        a.setAttribute('target', '_blank');
        movieSelection.appendChild(item);
    });

    return movieSelection;
};

addMoviesToDom(movies);

const handleOnChangeEvent = (e) => {
    switch (e.target.value) {
        case 'new-movies':
            filterLatestMovies(movies);
            break;
        case 'avenger-movies':
            filterMovies('Avengers', movies);
            break;
        case 'xmen-movies':
            filterMovies('X-Men', movies);
            break;
        case 'princess-movies':
            filterMovies('Princess', movies);
            break;
        case 'batman-movies':
            filterMovies('Batman', movies);
            break;
        default:
    }
};

const filterButtons = document
    .querySelectorAll('input[name="movies-filter"]')
    .forEach((button) => {
        button.addEventListener('change', handleOnChangeEvent);
    });

const filterMovies = (wordInMovieTitle, films) => {
    const filteredMovies = films.filter((film) =>
        film.Title.toLowerCase().includes(wordInMovieTitle.toLowerCase())
    );
    addMoviesToDom(filteredMovies);
};

const filterLatestMovies = (films) => {
    const newMovies = films.filter((film) => {
        return film.Year >= '2014';
    });
    addMoviesToDom(newMovies);
};

const searchMovie = document.getElementById('search');
searchMovie.addEventListener('search', (e) => {
    filterMovies(e.target.value, movies);
});