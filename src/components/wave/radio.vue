<template>
  <div class="radio">
    <span v-wave-radio class="wave-radio radio-checked">
      <input name="c" type="radio" checked>
    </span>
    <span v-wave-radio class="wave-radio">
      <input name="c" type="radio">
    </span>
    <span v-wave-radio class="wave-radio">
      <input name="c" type="radio">
    </span>
    <span v-wave-radio class="wave-radio">
      <input name="c" type="radio">
    </span>
    <span v-wave-radio class="wave-radio">
      <input name="c" type="radio">
    </span>
    <span v-wave-radio class="wave-radio disabled">
      <input name="d" type="radio" disabled>
    </span>
    <span v-wave-radio class="wave-radio radio-checked disabled">
      <input name="d" type="radio" checked disabled>
    </span>
  </div>
</template>

<script>
const toggleRadioCheck = el => {
  const _classname = el.getAttribute("class");
  const radioClass = " radio-checked";
  const _input = el.childNodes[0];
  const name = _input.getAttribute("name");
  let newClassname; //eslint-disable-line
  if (!_input.getAttribute("disabled")) {
    Array.from(document.querySelectorAll(`input[type=radio][name=${name}]`)).map(node => {
      node.removeAttribute("checked");
      node.parentNode.setAttribute(
        "class",
        _classname.replace(radioClass, "")
      );
    });
    _input.setAttribute("checked", false);
    el.setAttribute("class", `${_classname} ${radioClass}`);
  }
};

export default {
  name: "wave-radio",
  directives: {
    "wave-radio": {
      inserted: function(el) {
        el.addEventListener("click", toggleRadioCheck.bind(this, el));
      },
      unbind: function(el) {
        el.removeEventListener("click", toggleRadioCheck.bind(this, el));
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.radio span {
  margin-right: 20px;
}
</style>
