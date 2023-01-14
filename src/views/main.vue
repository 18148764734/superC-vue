<template>
  <div class="main-center-wrap">
    <div style="margin-bottom: 24px"></div>

    <div class="main m-2">
      <a href="main.html"
        >您已获得免费3次决策机会，请点击进入对应的决策系统。</a
      >
    </div>

    <div
      class="
        container
        is-fullhd
        content
        has-text-centered has-background-primary-light
      "
      style="margin-bottom: 0"
    >
      <div class="enterSystem">
        <form action="success.html" method="get">
          <a href="#">
            <img
              src="../assets/img/1.jpg"
              id="ymj"
              class="round"
              alt="原命"
              href="#"
            />
          </a>
          <p class="has-text-centered">
            <button
              class="button is-warning m-4"
              name="bigyButton"
              type="submit"
              value="ymj"
            >
              点击进入原命决策系统
            </button>
          </p>
          <br />
        </form>
      </div>

      <!--点击进入大运决策系统-->

      <div class="enterSystem">
        <form action="success.html" method="get">
          <a href="#">
            <img
              src="../assets/img/2.jpg"
              id="bigy"
              class="round"
              alt="大运"
              href="#"
            />
          </a>

          <p class="has-text-centered">
            <button
              class="button is-warning m-4"
              name="bigyButton"
              type="submit"
              value="bigy"
            >
              点击进入大运决策系统
            </button>
          </p>
          <br />
        </form>
      </div>

      <!--点击进入流年决策系统-->
      <div class="enterSystem">
        <form action="success.html" method="get">
          <a href="#">
            <img
              src="../assets/img/3.jpg"
              id="watern"
              class="round"
              alt="流年"
              href="#"
            />
         
          </a>
             <p class="has-text-centered">
          <button
            class="button is-warning m-4"
            name="bigyButton"
            type="submit"
            value="watern"
          >
            点击进入流年决策系统
          </button>
        </p>
          <br />
        </form>
      </div>

    </div>
  </div>
</template>



<style>
@import url("../assets/css/main.css");
</style>