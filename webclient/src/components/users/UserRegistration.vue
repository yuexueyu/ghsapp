<template>
<div class="container">
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title is-4">
        Users
      </p>
      <p class="subtitle is-7">
        You can manage all users of this application here...
      </p>

        <div class="columns">
          <div class="column is-one-quarter">
              <div class="card">

                <div class="card-content">
                  <div class="content">
                      <aside class="menu">
                        <p class="menu-label">Users Menu</p>
                        <ul class="menu-list">
                          <a href="#" class="is-active">Registration</a>
                          <a href="#">All Users</a>
                        </ul>
                      </aside>

                  </div>
                </div>
              </div>





          </div>
          <div class="column ">
            <div class="message is-info">
              <div class="message-header">
                <p class="title is-6">User Registration</p>
              </div>
              <div class="message-body">
                <section>
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
                            v-model="UserID"
                            placeholder="User ID" required/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">User Name</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <b-input 
                            type="text" 
                            name="UserName" 
                            v-model="UserName"
                            placeholder="User Name" required />
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
                            v-model="Password"
                            placeholder="Password" required/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Role</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <b-select
                            placeholder="Role"
                            expanded
                            v-model="Role">
                              <option value="Admin">Administrator</option>
                              <option value="Accountant">Accountant</option>
                              <option value="Clerk">Clerk</option>
                        </b-select>
                        </p>
                      </div>
                    </div>
                  </div>         
                                  
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Status</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <b-select
                              placeholder="Status"
                              expanded
                              v-model="IsActive">
                              <option value="0">Active</option>
                              <option value="1">Inactive</option>
                            </b-select>
                        </p>
                      </div>
                    </div>
                  </div>   
                </section>
                <footer>
                    <div class="error" v-html="error"></div>
                    <a class="button is-info" @click="register">Register</a>  
                </footer>


              </div>
            </div>
          </div><!-- column 1 -->
          
      </div>
      
    </div>
  </section>


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
        error:null
        await authService.register({
                  UserID: this.UserID.toUpperCase(),
                  UserName: this.UserName.toUpperCase(),
                  Password: this.Password,
                  Role: this.Role.toUpperCase(),
                  IsActive: this.IsActive
              }).then(function(response){
                toast()
              })
        
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
        queue: false,
      });
    }
  }
};
</script>

<style scoped>
.error{
  color:red;
}
.container{
  margin-top:10px;
}
</style>
