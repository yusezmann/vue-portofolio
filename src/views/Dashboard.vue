<template>
  <div class="dashboard">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'dashboard',
  components: {
    Navbar,
  },
}
</script>

<style>
.dashboard {
  display: grid;
  grid-template-rows: 5fr;
  background-color: #008080;
  height: 100vh;
  width: 100vw;
}

.content {
  background-color: #fff;
  border: none;
  /* width: 95vw; */
  height: 95vh;
  border-radius: 10px;
  margin: 6px 6px 6px 6px;
}

@media (min-width: 834px) {
  .dashboard {
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: none;
    width: 100%;
  }
  .content {
    margin: 6px 6px 6px 6px;
    height: 97vh;
  }
}
</style>
