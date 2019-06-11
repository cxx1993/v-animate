<template>
  <div class="mb35">
    <button class="wave-btn-primary" v-wave-btn>primary</button>
    <button class="wave-btn-success" v-wave-btn>success</button>
    <button class="wave-btn-warning" v-wave-btn>warning</button>
    <button class="wave-btn-danger" v-wave-btn>danger</button>
    <button class="wave-btn-info" v-wave-btn>info</button>
  </div>
</template>

<script>
// btn
const addMoveAttr = el => {
  el.setAttribute("click-animating-without-extra-node", true);
  setTimeout(() => {
    el.setAttribute("click-animating-without-extra-node", false);
  }, 400);
};

export default {
  name: "wave-button",
  directives: {
    "wave-btn": {
      inserted: function(el) {
        el.addEventListener("click", addMoveAttr.bind(this, el));
      },
      unbind: function(el) {
        el.removeEventListener("click", addMoveAttr.bind(this, el));
      }
    },
  }  
}
</script>

<style lang="scss" scoped>
button{
  margin-right:20px;
}
</style>
