<template>
  <div>
    <main>
      <section class="presentation">
        <div class="introduction">
          <div class="intro-text">
            <router-link :to="{name: 'catalog'}">
              <h1>Welcome to my shopping cart</h1>
            </router-link>
          </div>
        </div>
        <div class="cover">
          <img src="@/assets/images/stuff/blue.png" alt="matebook" />
        </div>
      </section>
      <img class="big-circle" src="@/assets/images/stuff/big-eclipse.svg" alt="" />
      <img class="medium-circle" src="@/assets/images/stuff/mid-eclipse.svg" alt="" />
      <img class="small-circle" src="@/assets/images/stuff/small-eclipse.svg" alt="" />
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.cart {
  display: flex;
}

.cart {
  flex: 1;
  justify-content: flex-end;
}

.presentation {
  display: flex;
  width: 90%;
  margin: auto;
  min-height: 80vh;
  align-items: center;
}
.introduction {
  flex: 1;
}
.intro-text h1 {
  font-size: 44px;
  font-weight: 500;
  background: linear-gradient(to right, #494964, #6f6f89);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.cover {
  flex: 1;
  display: flex;
  justify-content: center;
  height: 60vh;
}
.cover img {
  height: 100%;
  filter: drop-shadow(0px 5px 3px black);
  animation: drop 1.5s ease;
}

.big-circle {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
  opacity: 0.5;
  height: 80%;
}
.medium-circle {
  position: absolute;
  top: 30%;
  right: 30%;
  z-index: -1;
  height: 60%;
  opacity: 0.4;
}
.small-circle {
  position: absolute;
  bottom: 0%;
  left: 20%;
  z-index: -1;
}

@keyframes drop {
  0% {
  opacity: 0;
  transform: translateY(-80px);
  }
  100% {
    opacity: 1;
  transform: translateY(0px);
  }
}
</style>
