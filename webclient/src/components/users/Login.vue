<template>

<div class="container">
  <div class="columns is-centered ">
    <div class="column  is-half  message is-danger">
      <div class="message-header">
          <p>Login</p>
      </div>
      
        <form class="message-body" v-on:submit="login">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">User ID</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <b-input 
                    type="text" 
                    name="UserID" 
                    v-model="user.UserID"
                    placeholder="User ID" required/>
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Password</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control is-expanded">
                  <b-input 
                    type="password" 
                    name="Password" 
                    v-model="user.Password"
                    placeholder="Password" required/>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="error" v-html="error"></div>
            <button type="submit" class="button is-info">Login</button>  
          </div>
        </form>
    
    </div>
  </div>
</div>

  
</template>

<script>
import authService from "@/services/authService";
export default {
  data() {
    return {
      user: {
        UserID: "",
        Password: ""
      },

      error: null
    };
  },
  methods: {
    async login(e) {
      try {
        
          await authService
            .register({
              UserID: this.user.UserID.toUpperCase(),
              Password: this.user.Password
            })
            .then(function(response) {
              toast();
            });
         
       

       
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    toast() {
      this.$toast.open({
        duration: 3200,
        message: `<span class="icon"><s-penis/><i class="fas fa-tachometer-alt fa-lg"></i></span>
Something's not good, also I'm on bottom`,
        position: "is-bottom",
        type: "is-success",
        queue: false
      });
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.container {
  margin-top: 10px;
}
</style>
