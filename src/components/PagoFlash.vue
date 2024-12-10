<template>
  <div role="banner">
    <h3>Promotion sur les Pago-flash pour noël ! Jusqu’à -50%</h3>
  </div>

  <div class="hero-header">
    <img alt="pago-flash" src="/images/pago-flash/pago-flash.svg" />
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
          <h2>Des partenaires d'exceptions</h2>
          <p>Nos partenaires fournissent les meilleurs flash de toute la région. Nasdas, Samos, Assia, mettent un point d'honneur à fournir les meilleurs ballons pour aller avec le bon flash, comme du vin quoi.</p>
        </div>
      </div>
      <img src="/images/pago-flash/savoir-faire.jpg" alt="Pago flash savoir faire" />
    </article>

    <article class="partenaires">
      <h2>Nos fournisseurs</h2>

      <ul>
        <li>
          <img src="/images/pago-flash/partenaires/momoplansnap.jpg" alt="momoplansnap" />
        </li>
        <li>
          <img src="/images/pago-flash/partenaires/ballon2zipette.jpg" alt="ballon2zipette" />
        </li>
        <li>
          <img src="/images/pago-flash/partenaires/planBraquage.jpg" alt="planBraquage" />
        </li>
      </ul>
    </article>



    <article class="selection">
      <h2>Notre offres</h2>

      <section>
        <article v-for="offer in offers" :key="offer">
          <h4 v-if="offer.popular">Populaire</h4>
          <img :src="'images/pago-flash/thumbnails/'+offer.thumbnail+'.png'" :alt="offer.title" />
          <h3>{{ offer.title }}</h3>
          <h5>Contact : assiasamosbraquageforsure@ballon2zipette.com</h5>
        </article>
      </section>
    </article>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const offers = ref([
  {
    thumbnail: "pack-1",
    title: "VodKH + 3 ballons OFFERT",
    popular: true
  },
  {
    thumbnail: "pack-2",
    title: "Whisky-flash + formation CRYPTO"
  },
  {
    thumbnail: "vodka",
    title: "VodKH"
  },
  {
    thumbnail: "whisky",
    title: "Whisky-flash"
  }
]);
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
      &>ul {
        display: flex;
        justify-content: center;
        gap: 2em;
        flex-wrap: wrap;
        list-style: none;

        &>li {
          &>img {
            border-radius: 10px;
            width: 15em;
          }
        }
      }
    }

    &>article.partenaires,
    &>article.selection {
      margin-top: 5em;
      &>h2 {
        text-align: center;
        margin-bottom: 1em;
      }

      &>section {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
        margin: 3em 0;

        &>article {
          background-color: var(--black-2);
          flex-basis: 10em;

          border-radius: 15px;
          padding: 1em 2em;

          text-align: center;
          position: relative;

          &>h4 {
            position: absolute;
            top: -23px;
            left: 50%;

            transform: translateX(-50%);

            background-color: var(--orange);
            color: var(--black);

            padding: .5em .8em;
            border-radius: 100px;
          }

          &>img {
            width: 15em;
            height: 15em;
            margin-bottom: .5em;
          }

          &>h3 {
            font-family: "poppins-bold", sans-serif;
          }

          &>h5 {
            text-align: center;
          }
        }
      }
    }
  }
</style>
