<template>
  <div class="wave">
    <c-button/>
    <c-checkbox/>
    <c-radio/>
  </div>
</template>

<script>
import "@/assets/css/group/wave.scss";
import cButton from '@/components/wave/button.vue'
import cCheckbox from '@/components/wave/checkbox.vue'
import cRadio from '@/components/wave/radio.vue'



export default {
  name: "wave",
  components: {
    cButton, cCheckbox, cRadio
  }
};
</script>