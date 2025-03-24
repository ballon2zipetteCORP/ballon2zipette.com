<template>
  <div class="header-title">
    <h1>⚠️ Travaux à la Chiche ⚠️</h1>
  </div>
    <div class="hero-header">
        <img alt="hero-header image" src="/images/events/travaux-a-la-chiche/patrouille.jpg" />
        <img src="/images/events/travaux-a-la-chiche/photomemory.jpeg"/>

    </div>

    <div class="new">
        <h2>
            <span class="new-tag">Nouveauté</span>
            Rosé à volonté !
        </h2>
        <h3>Exclusivement pour cette chiche, nous avons prévus du rosé bien BTP bien 8h-16h intérim.</h3>
        <img alt="hero-header image" src="/images/events/travaux-a-la-chiche/cubi.jpg" />
    </div>

</template>

<style scoped>
div.header-title{
  margin-top: 3em;
  text-align: center;
}
div.hero-header {
  width: fit-content;
  margin: 4em auto 1em auto;
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 5em;
  justify-content: center;
  align-items: center;

  &>img {
    margin-bottom: .5em;
  }
}

img {
    width: 25em;
    border-radius: 10px;
}

div.new {
    text-align: center;

    &>h2 {
        background-color: var(--orange);
        color: var(--black);
        width: fit-content;
        padding: .5em .8em;
        margin: auto;

        margin-top: 2em;
        margin-bottom: .5em;

        position: relative;

        &>span.new-tag {
            background-color: var(--red);
            color: white;
            padding: .5em .8em;
            border-radius: 10px;

            font-size: .6em;

            position: absolute;
            top: -1.5em;
            right: -1.5em;

            transform: rotate(20deg);
        }
    }

    &>img {
        margin-top: 1em;
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-header {
    gap: 2em;
  }
  img {
    max-width: 20em;
  }
}

@media (max-width: 768px) {
  .hero-header {
    flex-direction: column;
    gap: 1.5em;
  }
  img {
    max-width: 18em;
  }
}

</style>
<script setup lang="ts">
</script>
