<template>
  <div role="banner">
    <h3>Promotion sur les Pago-flash pour noël ! Jusqu’à -50%</h3>
  </div>

  <div class="hero-header">
    <img alt="pago-flash" src="../assets/images/pago-flash/pago-flash.svg" />
    <h1>Pago Flash</h1>
    <h2>Le flash éphémère pour tous vos évènements</h2>
  </div>

  <section>
    <article class="about-us">
      <div>
        <div>
          <h2>Un savoir-faire</h2>
          <p>Les pago-flash sont préparés avec amour dans les meilleurs
            quartier de Lannion. La <b>vodka</b>, le <b>rhum</b>, le <b>whisky</b> et le <b>ricard</b>
            viennent des meilleures coins du monde.</p>
        </div>
        <div>
          <h2>Un savoir-faire</h2>
          <p>Les pago-flash sont préparés avec amour dans les meilleurs
            quartier de Lannion. La <b>vodka</b>, le <b>rhum</b>, le <b>whisky</b> et le <b>ricard</b>
            viennent des meilleures coins du monde.</p>
        </div>
      </div>
      <img src="../assets/images/pago-flash/savoir-faire.jpg" alt="Pago flash savoir faire" />
    </article>

    <article class="partenaires">
      <h2>Nos fournisseurs</h2>

      <ul>
        <li>
          <img src="../assets/images/pago-flash/partenaires/momoplansnap.jpg" alt="momoplansnap" />
        </li>
        <li>
          <img src="../assets/images/pago-flash/partenaires/ballon2zipette.jpg" alt="ballon2zipette" />
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup>

</script>

<style scoped>

  div.hero-header {
    margin: auto;
    width: fit-content;
    height: calc(100vh - 10vh);

    text-align: center;

    font-size: 1.4em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &>h1 {
      font-family: "poppins-bold", sans-serif;
    }
  }

  div[role="banner"] {
    background-color: var(--orange);
    padding: .5em .8em;
    height: 6vh;

    &>h3 {
      text-align: center;
      color: var(--black);
    }
  }

  section {
    &>article.about-us {
      display: flex;
      flex-wrap: wrap;
      gap: 5em;

      justify-content: center;

      &>div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        &>div {
          width: 30em;

          &>h2 {
            margin-bottom: .5em;
          }
          &>p {
            text-align: justify;
          }
        }
      }
      &>img {
        width: 15em;
        border-radius: 10px;
      }
    }
    &>article.partenaires {
      margin-top: 5em;
      &>h2 {
        text-align: center;
        margin-bottom: 1em;
      }

      &>ul {
        display: flex;
        justify-content: center;
        gap: 2em;
        list-style: none;

        &>li {
          &>img {
            border-radius: 10px;
            width: 15em;
          }
        }
      }
    }
  }
</style>
