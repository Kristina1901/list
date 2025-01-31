<template>
  <div class="lang__wrapper">
    <img src="../assets/img/uk.png" alt="uk" width="25" height="25" />
    <label class="switch">
      <input
        type="checkbox"
        @change="emit('toggleLang')"
        :checked="props.lang === 'en'"
      />
      <span class="slider round"></span>
    </label>
    <img src="../assets/img/en.png" alt="en" width="25" height="25" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ lang: string }>();

const emit = defineEmits(["toggleLang"]);
</script>

<style scoped>
.lang__wrapper {
  display: flex;
  justify-content: end;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
  margin-left: 10px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  height: 25px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #ccc;
}
input:focus + .slider {
  box-shadow: 0 0 1px #ccc;
}
input:checked + .slider:before {
  -webkit-transform: translateX(35px);
  -ms-transform: translateX(35px);
  transform: translateX(35px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
[color-scheme="dark"] {
  background-color: rgba(30, 69, 62, 0.6);
}
[color-scheme="light"] {
  background-color: #ffffcc;
}
.container__weather {
  display: flex;
}
</style>
