<template>
  <div class="sidebar">
    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container"><i class="fas fa-home fa-2x"></i></div>
      </router-link>
      <router-link
        to="/about"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container"><i class="fas fa-user fa-2x"></i></div>
      </router-link>
      <router-link
        to="/skills"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container"><i class="fas fa-tools fa-2x"></i></div>
      </router-link>
      <router-link
        to="/portofolio"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container"><i class="fas fa-book fa-2x"></i></div>
      </router-link>
      <router-link
        to="/contact"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">
          <i class="fas fa-envelope fa-2x"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.menu-items {
  display: flex;
  justify-content: space-around;
  /* margin-top: 20px; */
  background-color: #008080;
  bottom: 0;
  position: fixed;
  width: 100%;
}

.menu-items > * {
  margin-left: 0.25rem;
}

.side-btn {
  border: none;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
  text-align: center;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: #fff;
  color: #008080;
  font-weight: 600;
  margin-bottom: 15px;
  border-radius: 0px 0px 30px 30px;
  border: none;
}

.side-btn.active::before {
  right: -10px;
}

.side-btn.active::after {
  left: -10px;
}

.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: '';
  top: 0;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: none;
}

.side-btn.active .link-container::before {
  left: -20px;
  z-index: 99;
}

.side-btn.active .link-container::after {
  right: -20px;
  z-index: 99;
}

.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: '';
  top: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #008080;
}

@media (min-width: 884px) {
  .menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    background-color: #008080;
    max-width: 6rem;
    height: 100%;
  }

  .menu-items > * {
    margin-top: 6px;
  }

  .side-btn {
    border: none;
    /* padding: 10px 10px 10px 10px; */
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    background-color: #008080;
    text-align: center;
  }

  .side-btn:focus {
    outline: none;
  }

  .side-btn.active {
    position: relative;
    background-color: #fff;
    color: #008080;
    font-weight: 600;
    margin-left: 15px;
    border-radius: 30px 0px 0px 30px;
  }

  .side-btn.active::before {
    top: -30px;
  }

  .side-btn.active::after {
    top: 3.25rem;
    left: 3.2rem;
  }

  .side-btn.active::before,
  .side-btn.active::after {
    position: absolute;
    right: 0;
    height: 30px;
    width: 30px;
  }

  .side-btn.active .link-container::before {
    top: -3.75rem;
    left: 1.3rem;
  }

  .side-btn.active .link-container::after {
    top: 3.45rem;
    left: 1.3rem;
  }

  .side-btn.active .link-container::before,
  .side-btn.active .link-container::after {
    position: absolute;
    height: 60px;
    width: 60px;
  }
}
</style>
