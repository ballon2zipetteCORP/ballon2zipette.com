<template>
  <div role="banner">
    <div class="content">
      <h4 v-for="j in Array(3).fill(null)" :key="j+1">
          ❄️🎄Distribution <b>GRATUITE</b> de Pago-Flash à la chiche de noël ❄️🎄
      </h4>
    </div>

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
          <h2>Des partenaires de renom</h2>
          <p>Nos partenaires fournissent les meilleurs flash de toute la région. Nasdas, Samos, Assia, mettent un point d'honneur à fournir les meilleurs ballons pour aller avec le bon flash, comme du vin quoi.</p>
        </div>
      </div>
      <img src="/images/pago-flash/savoir-faire.jpg" alt="Pago flash savoir faire" />
    </article>

    <article class="partenaires">
      <h2>Nos fournisseurs</h2>

      <ul>
        <li>
          <img src="/images/pago-flash/partenaires/ballon2zipette.jpg" alt="ballon2zipette" />
        </li>
        <li>
          <img src="/images/pago-flash/partenaires/planBraquage.jpg" alt="planBraquage" />
        </li>
        <li>
          <img src="/images/pago-flash/partenaires/momoplansnap.jpg" alt="momoplansnap" />
        </li>
      </ul>
    </article>

    <article class="selection">
      <h2>Notre offres</h2>
      <div><span>Code promo : BALLON66</span></div>
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

      <button class="commander" @click="order" v-show="totalQuantity > 0">
        Commander x{{ totalQuantity }}
      </button>

      <article class="chiche">
        <h2>Des pago-flash et fruit-shot <b>GRATUIT</b> pour Noël !!!</h2>
        <p>Le père Noël et ses lutins vous ont prévu une petite surprise pour la chiche de Noël... 🫣</p>
        <img src="/images/pago-flash/msn.jpg" alt="msn" />
      </article>
    </article>

    <div class="telegram">
      <h2>Rejoins le télégram maintenant</h2>
      <h4>Si tu ne rejoins pas samos viendra dans tes rêves.</h4>

      <img src="/images/telegram-link.jpeg" alt="telegram link" />
      <span><a target="_blank" href="https://t.me/+ZSKuml6mYhNmZTU0">Ou via le lien</a></span>

      <footer>
      </footer>
    </div>

    <h5>Contact : assiasamosbraquageforsure@ballon2zipette.com</h5>
  </section>

  <pago-flash-order :show-modal="orderModal" @close="closeOrderModal" :data="customerOrder" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

import PagoFlashOrder from '@/components/events/pago-flash/PagoFlashOrder.vue'

// offers
const offers = ref([
  {
    thumbnail: "pack-1",
    title: "VodKH + initiation braquage",
    popular: true,
    quantity: 0
  },
  {
    thumbnail: "pack-2",
    title: "Fruit-shot + formation CRYPTO",
    quantity: 0
  },
  {
    thumbnail: "vodka",
    title: "VodKH",
    quantity: 0
  },
  {
    thumbnail: "fruit-shot",
    title: "Fruit-shot",
    quantity: 0
  }
]);

// total
const totalQuantity = computed(() =>
  offers.value.reduce((a, b) => a + b.quantity, 0)
);

/** ORDER GESTION **/

// customer's order
const orderModal = ref(false);

// get at least all items that gets one of quantity
const customerOrder = computed(() =>
  offers.value.filter(({ quantity }) => quantity > 0)
);

function order() {
  orderModal.value = true;
}
function closeOrderModal() {
  orderModal.value = false;
}

/** ORDER GESTION **/

onMounted(() => {
  document.title = "Pago-flash éphémère | Ballon22ipette.com";
});
</script>

<style scoped>
  /* smell CSS but anyway.... */
  @keyframes changeColor {
    0% { background-color: var(--orange); }
    25% { background-color: var(--green); }
    50% { background-color: var(--yellow); }
    75% { background-color: var(--red); }
    100% { background-color:var(--blue); }
  }
  @keyframes scroll {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}


@keyframes scroll2 {
    0% {
        transform: translateX(0);
        animation: scrolling-text 4s linear infinite;
      }
    }

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
    padding: 1em .8em;
    gap : 0px;
    font-size: 30px;
    overflow: hidden;
    &>div.content{
      overflow: hidden;
      width: max-content;
      display: flex;
      gap:20px;
      &>div{
        min-width: 200px;
        animation: scroll var(--time) linear infinite;
        animation-delay: calc(var(--time) * -1);

        white-space: nowrap;
        &>span{
          overflow: hidden;
          white-space: nowrap;
          color : var(--black);
        }
      }

      &>div:nth-child(2){
        animation: scroll2 var(--time) linear infinite;
        animation-delay: calc(var(--time) / -2);
      }
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
              user-select: none;

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



    &>div.telegram{
      margin-top: 2em;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap : 1em;

      &>img{

        width: 10em;
      }

      &>span{
        background-color: var(--orange);
        width: fit-content;
        border-radius: 0.3em;
        padding: 5px  20px  5px  20px;
        cursor: pointer;

        &>a {
          color: var(--black);
          text-decoration: none;
        }
      }

    }

    h5 {
          text-align: center;
          margin-bottom: 1em;
      }
  }

  button.commander {
    display: block;
    width: fit-content;
    color: var(--black);
    font-size: 1.4em;
    background-color: var(--orange);
    border-radius: 0.3em;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    margin: auto;
  }

  article.chiche {
    margin: 2em 0;
    text-align: center;

    &>h2 {
      font-family: "poppins-bold", sans-serif;
    }

    &>p {
      margin-bottom: 1em;
    }

    &>img {
      border-radius: 10px;

      width: 35em;
      height: 25em;
      object-fit: cover;
      display: block;
      margin: auto;
    }
  }

  /* RESPONSIVE */
  @media screen and (max-width: 520px) {
    section>article.about-us>div>div {
      width: unset;
      padding: 0 1em;
    }
  }

  @media screen and (max-width: 563px) {
    article.chiche>img {
      width: 100%;
    }
  }

</style>
