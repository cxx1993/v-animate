<template>
  <div id="app">
    <div id="nav">
      <template v-for="(name, idx) in navList">
        <router-link :to="`/${name}`" v-bind:key="idx">{{name}}</router-link> |
      </template>
      
      <!-- <router-link to="/wave">wave</router-link> |
      <router-link to="/list">列表</router-link> |
      <router-link to="/glow">发光</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import { routename } from '@/router'
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
