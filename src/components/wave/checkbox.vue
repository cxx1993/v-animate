<template>
  <div class="checkbox mb35">
    <span v-wave-check class="wave-checkbox">
      <input type="checkbox">
    </span>
    <span v-wave-check class="wave-checkbox checkbox-checked">
      <input type="checkbox" checked>
    </span>
    <span v-wave-check class="wave-checkbox disabled">
      <input type="checkbox" disabled>
    </span>
    <span v-wave-check class="wave-checkbox checkbox-checked disabled">
      <input type="checkbox" checked disabled>
    </span>
  </div>
</template>

<script>

// checkbox
const toggleCheckStatus = el => {
  const _classname = el.getAttribute("class");
  const checkClass = " checkbox-checked";
  const _input = el.childNodes[0];
  let newClassname; //eslint-disable-line
  if(!_input.getAttribute("disabled")){
    if (_classname.includes(checkClass)) {
      newClassname = _classname.replace(checkClass, "");
      _input.removeAttribute("checked");
    } else {
      newClassname = `${_classname} ${checkClass}`;
      _input.setAttribute("checked", true);
    }
    el.setAttribute("class", newClassname); // 修改span的class
  }
  
};

export default {
  name: 'wave-checkbox',
  directives: {
    "wave-check": {
      inserted: function(el) {
        el.addEventListener("click", toggleCheckStatus.bind(this, el));
      },
      unbind: function(el) {
        el.removeEventListener("click", toggleCheckStatus.bind(this, el));
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox span{
  margin-right: 20px;
}
</style>
