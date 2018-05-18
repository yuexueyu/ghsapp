import Api from '@/services/API'

export default {
   register (credentials){
      return Api().post('users/register',credentials)
   }
}