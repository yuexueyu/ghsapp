import Api from '@/services/API'

export default {
   register (credentials){
      return Api().post('users/register',credentials)
   },
   login (credentials){
      return Api().post('users/login',credentials)
   }
}