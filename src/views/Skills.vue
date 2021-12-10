<template>
  <div class="profile">
    <h1 class="animate__animated animate__backInDown">Skills</h1>
    <!-- <div class="row ml-2 mt-2">
      <div class="card ">
        <img
          class="card-img-top"
          src="../assets/html.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">HTML</p>
        </div>
      </div>
      <div class="card card__img">
        <img
          class="card-img-top"
          src="../assets/css.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">CSS</p>
        </div>
      </div>
      <div class="card card__img">
        <img class="card-img-top" src="../assets/js.png" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">JavaScript</p>
        </div>
      </div>
      <div class="card card__img">
        <img
          class="card-img-top"
          src="../assets/logo.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">VueJs</p>
        </div>
      </div>
      <div class="card card__img">
        <img
          class="card-img-top"
          src="../assets/mysql.png"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">MySQL</p>
        </div>
      </div>
      <div class="card card__img">
        <img
          class="card-img-top"
          src="../assets/bootstrap.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">Bootstrap</p>
        </div>
      </div>
    </div>
    <div class="row progress__line">
      <div class="col-md-6">
        <div class="progress-wrap">
          <h3>
            <span class="name-left">HTML</span
            ><span class="value-right">90%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-3 progress-bar-striped active"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:90%"
            ></div>
          </div>
        </div>
        <div class="progress-wrap">
          <h3>
            <span class="name-left">CSS</span
            ><span class="value-right">90%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-1 progress-bar-striped active"
              role="progressbar"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:90%"
            ></div>
          </div>
        </div>
        <div class="progress-wrap">
          <h3>
            <span class="name-left">JavaScript</span
            ><span class="value-right">80%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-4 progress-bar-striped active"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:80%"
            ></div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="progress-wrap">
          <h3>
            <span class="name-left">VueJs</span
            ><span class="value-right">80%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-5 progress-bar-striped active"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:80%"
            ></div>
          </div>
        </div>
        <div class="progress-wrap">
          <h3>
            <span class="name-left">MySQL</span
            ><span class="value-right">70%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-1 progress-bar-striped active"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:70%"
            ></div>
          </div>
        </div>
        <div class="progress-wrap">
          <h3>
            <span class="name-left">Bootstrap</span
            ><span class="value-right">85%</span>
          </h3>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped active"
              role="progressbar"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width:85%"
            ></div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="row card__group ">
      <div class="col-md-4 animate__animated animate__backInLeft">
        <div class="card">
          <img src="../assets/html.png" alt="" />
          <p>HTML</p>
        </div>
      </div>
      <div class="col-md-4 animate__animated animate__backInDown">
        <div class="card">
          <img src="../assets/css.png" alt="" />
          <p>CSS</p>
        </div>
      </div>
      <div class="col-md-4 animate__animated animate__backInRight">
        <div class="card">
          <img src="../assets/js.png" alt="" />
          <p>JavaScript</p>
        </div>
      </div>
      <div class="col-md-4 animate__animated animate__backInLeft">
        <div class="card">
          <img src="../assets/logo.png" alt="" />
          <p>VueJs</p>
        </div>
      </div>
      <div class="col-md-4 animate__animated animate__backInUp">
        <div class="card">
          <img src="../assets/mysql.png" alt="" />
          <p>MySQL</p>
        </div>
      </div>
      <div class="col-md-4 animate__animated animate__backInRight">
        <div class="card">
          <img src="../assets/bootstrap.jpg" alt="" />
          <p>Bootstrap</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  height: 100%;
  width: 100%;
}
.card__group {
  padding: 10px;
  margin-bottom: 5rem;
}
.card {
  margin: 5px;
}
img {
  width: 100%;
}
@media (min-width: 800px) {
  .card__group {
    width: 60%;
    margin-left: 5rem;
    margin-bottom: 0;
  }
}
</style>
