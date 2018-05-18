<template>
  <div class="column">
  
    <div class="message is-info">
      <div class="message-header">
        <p class="title is-6">User Registration</p>
      </div>
      <div class="message-body">
        <section>
          <b-field label="User ID">
              <b-input 
                type="text" 
                name="UserID" 
                v-model="UserID"
                placeholder="User ID" />
          </b-field>

          <b-field label="User Name">
            <b-input 
              type="text" 
              name="UserName" 
              v-model="UserName"
              placeholder="User Name" />
          </b-field>
          <b-field label="Password">
            <b-input 
              type="password" 
              name="Password" 
              v-model="Password"
              placeholder="Password"/>
           </b-field>

          <b-field label="Role">
              <b-select
                  placeholder="Role"
                  expanded
                  v-model="Role">
                  <option value="Admin">Administrator</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Clerk">Clerk</option>

              </b-select>
          </b-field>

          <b-field label="Status">
              <b-select
                  placeholder="Status"
                  expanded
                  v-model="IsActive"
                  >
                  <option value="0">Active</option>
                  <option value="1">Inactive</option>
              </b-select>
          </b-field>

            <b-field>
              <div class="error" v-html="error"></div>
           </b-field>
            <b-field>
              <a class="button is-info" @click="register">Register</a>
          </b-field>
        </section>
          
        
 
      </div>
    </div>

  </div>
</template>

<script>
import authService from "@/services/authService";
export default {
  data() {
    return {
      UserID: "",
      UserName: "",
      Password: "",
      Role: "",
      IsActive: 0,
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await authService.register({
          UserID: this.UserID.toUpperCase(),
          UserName: this.UserName.toUpperCase(),
          Password: this.Password,
          Role: this.Role.toUpperCase(),
          IsActive: this.IsActive
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error{
  color:red;
}
</style>
