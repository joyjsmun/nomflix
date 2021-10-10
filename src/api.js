import axios from 'axios';

//e11764caf2aa106737a0d02f13e03708

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'e11764caf2aa106737a0d02f13e03708',
    languages: 'en-US',
  },
});

export const movieApi = {
  nowPlaying: () => api.get('movie/now_palying'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    api.get(`search/movie/`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/populart'),
  airingToday: () => api.get('tv/airing_today'),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: term =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export default api;
