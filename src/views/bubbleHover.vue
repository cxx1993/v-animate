<template>
  <div>
    <div>
      <!-- 鼠标悬停 -->
      <div class="button_container">
        <div class="button_su" v-bubble>
          <span class="su_button_circle"></span>
          <a href="#" class="button_su_inner">
            <span class="button_text_container">Simple button</span>
          </a>
        </div>

        <div class="button_su" v-bubble>
          <span class="su_button_circle"></span>
          <a href="#" class="button_su_inner">
            <span class="button_text_container">Another button</span>
          </a>
        </div>

        <div class="button_su" v-bubble>
          <span class="su_button_circle"></span>
          <a href="#" class="button_su_inner">
            <span class="button_text_container">A third button</span>
          </a>
        </div>

        <div class="button_su" v-bubble>
          <span class="su_button_circle"></span>
          <a href="#" class="button_su_inner">
            <span class="button_text_container">A forth button</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const hoverIn = (el, e) => {
  
  const relX = e.offsetX;
  const relY = e.offsetY;
  const su_button_circle = el.previousElementSibling;
  su_button_circle.style.left = relX + 'px';
  su_button_circle.style.top = relY + 'px';
  // let classname = ''; 
  
  // 移除class desplode-circle，添加explode-circle
  // const classArr = su_button_circle.getAttribute("class").split(' ');
  // if(classArr.includes("desplode-circle")){
  //   classname = classArr.splice(classArr.indexOf("desplode-circle"), 1).join(" ");
  // }
  // if(!classArr.includes("explode-circle")){
  //   classname += ' explode-circle'
  // }
  su_button_circle.setAttribute("class", "su_button_circle explode-circle");
};

const hoverOut = (el, e) => {
  console.log("hoverout")
  const relX = e.offsetX;
  const relY = e.offsetY;
  const su_button_circle = el.previousElementSibling;
  su_button_circle.style.left = relX + 'px';
  su_button_circle.style.top = relY + 'px';
  // let classname = '';
  
  // 移除class explode-circle，添加desplode-circle
  // const classArr = su_button_circle.getAttribute("class").split(' ');
  // if(classArr.includes("explode-circle")){
  //   classname = classArr.splice(classArr.indexOf("explode-circle"), 1).join(" ");
  // }
  // if(!classArr.includes("desplode-circle")){
  //   classname += ' desplode-circle'
  // }
  
  su_button_circle.setAttribute("class", "su_button_circle desplode-circle");
};

import "@/assets/css/group/bubbleHover.scss";
export default {
  name: "bubbleHover",
  directives: {
    bubble: {
      inserted: function(el) {
        const _el = el.querySelector('.button_su_inner');
        _el.addEventListener("mouseenter", hoverIn.bind(this, _el));
        _el.addEventListener("mouseleave", hoverOut.bind(this, _el));
      },
      unbind: function(el) {
        const _el = el.querySelector('.button_su_inner');
        _el.removeEventListener("mouseenter", hoverIn.bind(this, _el));
        _el.removeEventListener("mouseleave", hoverOut.bind(this, _el));
      }
    }
  }
};
</script>
