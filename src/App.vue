<template>
  <div id="app">
    <div class="nav">
      <template v-for="(name, idx) in navList">
        <router-link :to="`/${name}`" v-bind:key="idx">{{name}}</router-link> |
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { routename } from '@/router/index'
export default {
  data(){
    return {
      navList: routename
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
