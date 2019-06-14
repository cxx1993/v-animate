<template>
  <div>
    <p class="title">鼠标点击</p>
    <div class="button_su" v-bubble-c>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">Simple button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-c>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">Another button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-c>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">A third button</span>
      </a>
    </div>

    <div class="button_su" v-bubble-c>
      <span class="su_button_circle"></span>
      <a href="#" class="button_su_inner">
        <span class="button_text_container">A forth button</span>
      </a>
    </div>
  </div>
</template>

<script>
const clicked = (el, e) => {
  const relX = e.offsetX;
  const relY = e.offsetY;
  const su_button_circle = el.previousElementSibling;
  su_button_circle.style.left = relX + "px";
  su_button_circle.style.top = relY + "px";
  su_button_circle.setAttribute("class", "su_button_circle explode-click-circle");
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
  name: 'bubble-click',
  directives: {
    "bubble-c": {
      inserted: function(el) {
        const _el = el.querySelector(".button_su_inner");
        _el.addEventListener("click", clicked.bind(this, _el));
        _el.addEventListener("mouseleave", hoverOut.bind(this, _el));
      },
      unbind: function(el) {
        const _el = el.querySelector(".button_su_inner");
        _el.removeEventListener("click", clicked.bind(this, _el));
        _el.removeEventListener("mouseleave", hoverOut.bind(this, _el));
      }
    }
  }
}
</script>
