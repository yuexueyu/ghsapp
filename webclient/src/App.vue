<template>
  <div id="app">
    <page-header></page-header>
    <div class="container cl">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import PageHeader from '@/components/header'
export default {
  name: 'App',
  components:{
    PageHeader
  }
}
</script>

<style scopped>
.cl{
  margin-top:65px;
}

</style>
