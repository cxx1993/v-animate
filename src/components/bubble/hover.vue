<template>
  <div>
    <p class="title">鼠标悬停</p>
    <div class="button_su" v-bubble-h>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">Simple button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-h>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">Another button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-h>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">A third button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-h>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">A forth button</span>
      </a>
    </div>
  </div>
</template>

<script>
const hoverIn = (el, e) => {
  const relX = e.offsetX;
  const relY = e.offsetY;
  const su_button_circle = el.previousElementSibling;
  su_button_circle.style.left = relX + "px";
  su_button_circle.style.top = relY + "px";
  su_button_circle.setAttribute("class", "su_button_circle explode-circle");
};

const hoverOut = (el, e) => {
  const relX = e.offsetX;
  const relY = e.offsetY;
  const su_button_circle = el.previousElementSibling;
  su_button_circle.style.left = relX + "px";
  su_button_circle.style.top = relY + "px";
  su_button_circle.setAttribute("class", "su_button_circle desplode-circle");
};

export default {
  name: "bubble-hover",
  directives: {
    "bubble-h": {
      inserted: function(el) {
        const _el = el.querySelector(".button_su_inner");
        _el.addEventListener("mouseenter", hoverIn.bind(this, _el));
        _el.addEventListener("mouseleave", hoverOut.bind(this, _el));
      },
      unbind: function(el) {
        const _el = el.querySelector(".button_su_inner");
        _el.removeEventListener("mouseenter", hoverIn.bind(this, _el));
        _el.removeEventListener("mouseleave", hoverOut.bind(this, _el));
      }
    }
  }
};
</script>


