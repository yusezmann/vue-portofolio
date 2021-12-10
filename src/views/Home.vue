<template>
  <div class="overview row d-flex">
    <div class="text__hello col-md-5">
      <h1>Hi, <span class="wave">&#128075;</span></h1>
      <h2 class="mb-4">
        I'm
        <vue-typer
          :text="['Usman', 'Web Developer', 'Freelancer']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="select-all"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </h2>
      <a
        href="https://drive.google.com/u/0/uc?id=1ZHVfaXNXX5IOAad5bVJtd3EdjsfRr-nU&export=download"
        target="_blank"
        ><i class="fas fa-cloud-download-alt fa-1x"></i> Download CV</a
      >
    </div>
    <div class="img__hero col-md-6 mt-4 ">
      <img class="not" src="../assets/not.png" alt="" />
      <img class="head" src="../assets/head.png" alt="" />
      <img src="../assets/body.png" alt="" />
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  components: {
    VueTyper,
  },
}
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
}
h1,
h2 {
  text-align: center;
  color: #008080;
  margin-left: 15px;
  /* max-width: 100rem; */
}

a {
  border: 1px solid;
  border-radius: 15px;
  padding: 10px;
  color: #008080;
  text-decoration: none;
  margin-left: 1.5rem;
}
.wave {
  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: infinite; /* Never stop waving :) */
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
    transform: rotate(0deg);
  }
}

img,
.head,
.not {
  display: none;
}

.btn:hover {
  background-color: #008080;
  color: #fff;
}

a:hover,
i:hover {
  background-color: #008080;
  color: #fff;
}

@media (min-width: 768px) {
  .text__hello {
    margin-left: 2rem;
  }
  h1 {
    margin-top: 10rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  a {
    margin-top: 3rem;
  }
  img {
    margin-top: 10rem;
    display: block;
    border-radius: 50%;
    width: 100%;
  }

  .head {
    position: absolute;
    width: 15%;
    top: -3.5rem;
    left: 10.2rem;
    animation-name: head-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 3.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes head-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(4deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-4deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(4deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  .not {
    position: absolute;
    width: 6%;
    top: -2.5rem;
    left: 8.5rem;
    animation-name: not-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 3.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes not-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(4deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-4deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(4deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
}

@media (min-width: 800px) {
  .head {
    top: -3.6rem;
    left: 11rem;
  }

  .not {
    left: 9rem;
  }
}

@media (min-width: 1114px) {
  .overview {
    /* background-image: url(../assets/buble.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
    flex-direction: row;
    margin: 0px;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }

  img {
    display: block;
    border-radius: 50%;
    width: 100%;
    margin-left: 2rem;
  }

  .head {
    position: absolute;
    width: 15%;
    top: -6rem;
    left: 17.5rem;
    animation-name: head-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 3.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes head-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(4deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-4deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(4deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  .not {
    position: absolute;
    width: 6%;
    top: -4rem;
    left: 14.5rem;
    animation-name: not-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 3.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes not-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(4deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-4deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(4deg);
    }
    50% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }

  @media (min-width: 1284px) {
    h1,
    h2,
    a {
      margin-top: 0;
    }
    .head {
      top: -6rem;
      left: 18.5rem;
    }
    .not {
      left: 15.5rem;
    }
  }
}
</style>
