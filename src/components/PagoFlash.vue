<template>
  <div role="banner">
    <h3>Distribution <b>GRATUITE</b> de Pago-Flash à la chiche de noël ❄️🎄</h3>
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
      <div><span id = "codepromo">Code promo : BALLON66 | -66% sur l'ensemble de nos offres</span></div>
      <section>
        <article v-for="offer in offers" :key="offer">
          <h4 v-if="offer.popular">Populaire</h4>
          <img :src="'images/pago-flash/thumbnails/'+offer.thumbnail+'.png'" :alt="offer.title" />
          <h3>{{ offer.title }}</h3>

          <footer>
            <div class="quantity-selector">
              <button @click="offer.quantity > 0 && offer.quantity--" :disabled="offer.quantity < 1">-</button>
              <span>{{ offer.quantity }}</span>
              <button @click="offer.quantity++">+</button>
            </div>
          </footer>
        </article>
      </section>
    </article>
    <h5>Contact : assiasamosbraquageforsure@ballon2zipette.com</h5>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  document.title = "Pago-flash éphémère | Ballon22ipette.com";
});

const offers = ref([
  {
    thumbnail: "pack-1",
    title: "VodKH + 3 ballons OFFERTS",
    popular: true,
    quantity: 0
  },
  {
    thumbnail: "pack-2",
    title: "Whisky-flash + formation CRYPTO",
    quantity: 0
  },
  {
    thumbnail: "vodka",
    title: "VodKH",
    quantity: 0
  },
  {
    thumbnail: "whisky",
    title: "Whisky-flash",
    quantity: 0
  }
]);
</script>

<style scoped>
  @keyframes changeColor {
  0% { background-color: var(--orange); }
  25% { background-color: var(--green); }
  50% { background-color: var(--yellow); }
  75% { background-color: var(--red); }
  100% { background-color:var(--blue); }
}

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
      &>div{
        display: flex;
        justify-content: center;
        &>span{
          background-color: var(--orange);
          color: var(--black);
          width: fit-content;
          border-radius: 0.3em;
          padding: 5px  20px  5px  20px;
          cursor: pointer;
        }
        &>span:hover {
          animation: changeColor 1s infinite;
        }

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
          text-align: center;
          position: relative;
          padding: 1em 2em 4em;

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

          &>footer {
            margin-top: .5em;
            position: absolute;
            left: 0;
            bottom: 10px;
            width: 100%;

            &>div.quantity-selector {
              display: flex;
              align-items: center;
              gap: 1em;
              justify-content: center;

              &>button {
                padding: .5em .8em;
                background-color: var(--black);
                color: white;

                border: 1px solid var(--gray-1);
                border-radius: 5px;
                cursor: pointer;
                font-size: 1em;
                transition: all .5s ease;

                &:disabled {
                  opacity: .5;
                  cursor: unset;
                }

                &:not(:disabled):hover {
                  background-color: var(--black-2);
                }
              }
            }
          }
        }

      }

    }
    h5 {
          text-align: center;
          margin-bottom: 1em;
      }
  }

  /* RESPONSIVE */
  @media screen and (max-width: 520px) {
    section>article.about-us>div>div {
      width: unset;
      padding: 0 1em;
    }
  }

</style>
