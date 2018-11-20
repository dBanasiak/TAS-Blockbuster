import Api from '@/services/Api'

export default {
  getAllMovies () {
    return Api().get('movies')
  },
  index(search) {
    return Api().get('movies', {
      params: {
        search: search
      }
    })
  },
  show (movieId) {
    return Api().get(`movies/${movieId}`)
  },
  addMovie (movie) {
    return Api().post('movies', movie)
  }
}
