const state = {
  movies: []
}

const mutations = {
  FETCH_MOVIES(state, movies) {
    state.movies = movies
  }
}

const actions = {
  fetchMovies({ commit }) {
    return new Promise((resolve, reject) => {
      Vue.http.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          commit("FETCH_MOVIES", response.body);
          resolve();
        })
        .catch((error) => {
          console.log(error);
        })
    })
  }
}