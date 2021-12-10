<template>
  <div id="app">
    <div class="view">
      <transition name="fade" mode="out-in" class="route">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <div>
      <navBar />
    </div>
  </div>
</template>

<script>
import navBar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    navBar,
  },
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
