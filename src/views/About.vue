<template>
  <div class="about">
    <h1 class="animate__animated animate__backInDown">About me</h1>
    <div class="about__text">
      <div class="animate__animated animate__backInRight">
        <img src="../assets/coding.png" alt="img-thumbnail" />
      </div>
      <div class="animate__animated animate__backInLeft">
        <p>
          Web developer with 2+ years experience. Proficient at HTML, CSS,
          JavaScript, NodeJS, VueJs 2+, Firebase. Looking for a position as a
          front end developer, web developer.
        </p>
        <ul class="info">
          <li>
            <span class="first-block"
              ><i class="fas fa-chevron-right"></i> Full Name:</span
            ><span class="second-block"> Usman</span>
          </li>
          <li>
            <span class="first-block"
              ><i class="fas fa-chevron-right"></i> Phone:</span
            ><span class="second-block"> 085659239337</span>
          </li>
          <li>
            <span class="first-block"
              ><i class="fas fa-chevron-right"></i> Email:</span
            ><span class="second-block"> yusezmann@gmail.com</span>
          </li>
          <li>
            <span class="first-block"
              ><i class="fas fa-chevron-right"></i> Website:</span
            ><span class="second-block"
              ><a href="https://yusezmann.github.io/" target="_blank">
                https://yusezmann.github.io/</a
              ></span
            >
          </li>
          <li>
            <span class="first-block"
              ><i class="fas fa-chevron-right"></i> Address:</span
            ><span class="second-block">
              Griya Cempaka Arum B6 No.29, Gedebage Bandung</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.about {
  overflow: scroll;
  height: 100%;
  width: 100%;
}
.about__text,
.about__text .info {
  list-style: none;
  text-align: left;
  margin: 1rem 1rem 5rem 1rem;
}

img {
  border-radius: 5px 5px 0 0;
  width: 100%;
}

@media (min-width: 834px) {
  .about__text {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    text-align: left;
    overflow: visible;
    margin: 10rem 5rem 0rem 10rem;
  }

  .about h1 {
    justify-content: center;
    align-items: flex-start;
    margin-top: 10px;
  }

  img {
    width: 100%;
  }
}
</style>
