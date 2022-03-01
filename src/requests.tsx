const API_KEY = "65ec2c07fb70b3028ab6e232fd7fdec9";
const baseUrl = "https://api.themoviedb.org/3";

export default {
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};
