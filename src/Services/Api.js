import axios from 'axios';

const API_KEY = '5ea308b20d813353ebbdab34253fd8a1';
const URL = 'https://api.themoviedb.org/';

// -------- список самых популярных фильмов на сегодня -----//
export async function getTrending() {
  return await axios.get(`${URL}/3/trending/movie/day?api_key=${API_KEY}`);
}

//--------  поиск кинофильма по ключевому слову на странице фильмов -------//
export async function getSearch(query) {
  return await axios.get(
    `${URL}3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
}

//--------- запрос полной информации о фильме для страницы кинофильма ------//
export async function getMovieDetails(id) {
  return await axios.get(`${URL}/3/movie/${id}?api_key=${API_KEY}`);
}

//--------- запрос информации о актёрском составе для страницы кинофильма -----//
export async function getMovieCredits(id) {
  return await axios.get(
    `${URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

//---------- запрос обзоров для страницы кинофильма ---------//
export async function getMovieReviews(id) {
  return await axios.get(
    `${URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
