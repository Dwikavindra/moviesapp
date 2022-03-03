const API_KEY = "65ec2c07fb70b3028ab6e232fd7fdec9";
const baseUrl = "https://api.themoviedb.org/3";

export default {
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchMystery: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchSciFi: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  fetchWestern: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  fetchAnimation: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchAdventure: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
  fetchCrime: `${baseUrl}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchDocumentary: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
