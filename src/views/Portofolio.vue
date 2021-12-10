<template>
  <div class="portofolio">
    <h1 class="animate__animated animate__backInDown">My Works</h1>
    <div class="row portofolio__img">
      <div class="animate__animated animate__backInLeft">
        <a href="https://movie-webappp.herokuapp.com/" target="_blank">
          <div class="card card__img col">
            <img src="../assets/movie-webapp.png" alt="" />
          </div>
        </a>
        <a href="https://movie-webappp.herokuapp.com/" target="_blank">
          <p>Movie Web Library</p>
        </a>
      </div>
      <div class="animate__animated animate__backInDown">
        <a href="https://yusezmann.github.io/arjunajayamotor/" target="_blank">
          <div class="card card__img col">
            <img src="../assets/ajm.jpg" alt="" />
          </div>
        </a>
        <a href="https://yusezmann.github.io/arjunajayamotor/" target="_blank">
          <p>Arjuna Jaya Motor</p>
        </a>
      </div>
      <div class="animate__animated animate__backInRight">
        <a href="https://yusezmann.github.io/oor-landing-page/" target="_blank">
          <div class="card card__img col">
            <img src="../assets/landing-page.png" alt="" />
          </div>
        </a>
        <a href="https://yusezmann.github.io/oor-landing-page/" target="_blank">
          <p>One Ok Rock</p>
        </a>
      </div>
      <div class="animate__animated animate__backInLeft">
        <a href="/" target="_blank">
          <div class="card card__img col">
            <img src="../assets/tesla.png" alt="" />
          </div>
        </a>
        <a href="/" target="_blank">
          <p>Tesla Remake Web</p>
        </a>
      </div>
      <div class="animate__animated animate__backInUp">
        <a href="https://yusezmann.github.io/oor-tribute-page/" target="_blank">
          <div class="card card__img col">
            <img src="../assets/tribute-page.png" alt="" />
          </div>
        </a>
        <a href="https://yusezmann.github.io/oor-tribute-page/" target="_blank">
          <p>Tribute OOR</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.portofolio {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  height: 100%;
  width: 100%;
}

.portofolio h1 {
  margin-bottom: 2rem;
}

.portofolio__img {
  margin-bottom: 5rem;
}
.card__img {
  width: 90%;
  margin-left: 1.25rem;
  padding: 5px;
}

.card__img img {
  width: 100%;
}

@media (min-width: 768px) {
  .portofolio__img {
    margin-left: 1rem;
  }
}

@media (min-width: 834px) {
  .portofolio__img {
    display: flex;
    flex-direction: row;
    margin-left: 10rem;
  }

  .card__img {
    /* margin: 0px 25px 25px 25px;
  padding: 5px; */
    width: 20rem;
  }
}
</style>
