<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';

export default ({
  name: 'App',
  data() {
    return {}
  },
  components: {
    AppHeader
  },
  beforeMount() {
    this.$store.commit("init")
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rubik:wght@400;500;600&display=swap');
@import "./assets/_variables.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #fffff0;
  font-family: 'Rubik';
  color: #35495e;
}

img {
  user-select: none;
  pointer-events: none;
}

input, button, textarea {
  outline: none;
}

h1 {
  text-align: center;
  font-weight: 500;
  font-size: 42px;
}

.container {
  width: 930px;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

#app {
  min-height: 100vh;
  overflow: hidden;
}

.link {
  position: relative;
  font-size: 18px;
  color: $colorGreen;
  cursor: pointer;
  transition: color 175ms ease-in-out;
  &:hover {
    color: $colorGreenDark;
    &::before {
      background-color: $colorGreenDark;
    }
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: $colorGreen;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 175ms ease-in-out;
  }
  &.router-link-exact-active {
    &::before {
      transform: translate(-50%, -3px);
      opacity: 1;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 400ms;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
