<template>
   <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="dropdown navigation">
     <div class="container">
        <a class="navbar-item">
          <router-link :to="{name: 'root'}">
            <img src="../assets/logo.png" alt="Bulma Logo" width="50" height="50">
         </router-link>
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
         <a class="navbar-link">
            Settings
         </a>

         <div class="navbar-dropdown ">
            <a class="navbar-item router-link-active">
               <router-link :to="{name: 'UserRegistration'}">Users</router-link>
            </a>
            <a class="navbar-item ">
            Classes
            </a>
            <a class="navbar-item">
            Fee
            </a>
            <div class="navbar-item">
               Database
            </div>
         </div>
      </div>
      <div class="navbar-end">
        <a class="navbar-item is-pulled-right">
          <router-link :to="{name: 'UserLogin'}"> Login </router-link>
        </a>
      </div>
     </div>
   </nav>
</template>

<script>
export default {};
</script>
<style scoped>
</style>


