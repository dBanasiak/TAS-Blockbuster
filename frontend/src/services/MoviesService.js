import Api from '@/services/Api'

export default {
  getAllMovies () {
    return Api().get('movies')
  }
}
