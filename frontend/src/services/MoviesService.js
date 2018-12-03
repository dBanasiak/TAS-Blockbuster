import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('movies', {
      params: {
        search: search
      }
    })
  },
  show (movieId) {
    return Api().get(`movies/${movieId}`)
  },
  post (movie) {
    return Api().post('movies', movie)
  },
  put (movie) {
    return Api().put(`movies/${movie.id}`, movie)
  }
}