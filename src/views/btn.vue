<template>
  <div>
    <template v-for="(name, idx) in navList">
      <router-link :to="`/${name}`" v-bind:key="idx">{{name}}</router-link> |
    </template>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routename } from "@/router/btn";
export default {
  name: "btn",
  data() {
    return {
      navList: routename
    };
  }
};
</script>
