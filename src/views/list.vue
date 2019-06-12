<template>
  <div>
    <div class="mb35">
      <span class="btn" @click="add">add</span>
    </div>
    <transition-group
      tag="ul"
      name="list"
    >
      <li v-for="(item, idx) in list" :key="item">
        <p>
          item{{idx}}: {{item}}
          <span class="btn" @click="del(idx)">del</span>
        </p>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      list: Array(10)
        .fill(" ")
        .map(() => {
          return Math.round(Math.random() * 1000);
        })
    };
  },
  methods: {
    add() {
      const v = Math.round(Math.random() * 1000);
      const _idx = Math.round(Math.random() * this.list.length - 1);
      this.list.splice(_idx, 0, v);
    },
    del(idx) {
      this.list.splice(idx, 1);
    },
  }
};
</script>

<style lang="scss" scoped>
ul {
  text-align: left;
  // width: 400px;
  margin: 0 auto;
  display: inline-block;
  li {
    // height: 100%; // 这个要明确值
    max-height: 6000px;
    // position: relative;
    transition: 0.1s all;
    overflow: hidden;
    border-bottom: 1px solid #efefef;
    background: rgba(255, 129, 0, 0.28);
    p{
      padding: 15px 10px;
    }
    span {
      float: right;
    }
  }
}
.btn {
  color: white;
  background: rgba($danger-color, 0.4);
  padding: 3px 10px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 5px;
}
.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  max-height: 0;
  transform:translateX(-100px); 
  // animation: fadeLeft .5s;
}
@keyframes fadeLeft {
  0% {
    opacity: 1;
    height: 100%;
    max-height: 6000px;
    // height: 47px;
  }
  100% {
    opacity: 0;
    max-height: 0;
    transform:translateX(-200px) ; // scaleY(0.7)
  }
}
</style>


<!-- 
<template>
  <div>
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-complete-item">{{ item }}</span>
      </transition-group>
    </div>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
};
</script>
 
 <style lang="scss">
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
  -->