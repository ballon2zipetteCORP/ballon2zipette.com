<script setup>

</script>

<template>
  <div class="header-title">
    <h1 class="title">🔪🐙 Collaboration Krakenssat X B2Z 🐙🔪</h1>
    <h2 class="subtitle">Les pirates de zipette vous apportent à boire !</h2>
  </div>
  <div class="cover">
    <img class="cover" alt="img-cover" src="/images/events/krakennsat/cover.jpg" />
    <div class="shield">
      <h2>🪖 En guise de remerciement du SHIELD de première qualité 🪖</h2>
      <img class="img-shield" alt="shield" src="/images/events/krakennsat/shield.jpg" />
    </div>

  </div>
  <div class="flashback">
    <h1>🏆 Souvenirs de cette collaboration fructeuse 🏆</h1>
    <video class="flashback-video" src="/videos/events/krakennsat/flashback.mp4" controls />
  </div>
</template>

<style scoped>

img{
  border-radius: 10px;
}
  .header-title{
    margin: 4em auto 5em auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .cover{
    margin: 1em auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3em;

    .cover{
      width: 30%;
    }

    .shield{
      margin: 4em auto 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3em;
      .img-shield{
        width: 50%;
      }
      &>h2{
        text-align: center;
      }
    }
  }

  .flashback {
    width: 100%;
    margin: 20em auto 0 auto;

    &>h1{
      text-align: center;
      margin: 4em auto 4em auto;
    }
    .flashback-video{
      border-radius: 20px;
      display: block;
      margin: auto;
    }
  }

@media (min-width: 1024px ) {
  .flashback-video{
    width: 30%;
  }
}
/* Responsive Design */
@media (max-width: 1024px) {
  .cover .cover {
    width: 70%;
  }
  .img-shield {
    width: 70%;
  }
  .flashback-video {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .cover .cover {
    width: 90%;
  }

  .img-shield {
    width: 90%;
  }

  .flashback-video {
    width: 80%;
  }
}
</style>
