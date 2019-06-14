<template>
  <div>
    <hover/>
    <click/>
  </div>
</template>

<script>

import "@/assets/css/group/bubble.scss";
import hover from '@/components/bubble/hover.vue'
import click from '@/components/bubble/click.vue'

export default {
  name: "bubble",
  components:{
    hover, click
  }
};
</script>
