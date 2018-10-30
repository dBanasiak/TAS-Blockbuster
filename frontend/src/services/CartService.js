import Api from '@/services/Api'

export default {
  getCart () {
    return Api().get('cart')
  }
}
