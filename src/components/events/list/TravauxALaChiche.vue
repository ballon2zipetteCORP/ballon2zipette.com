<template>
    <div class="hero-header">
        <img alt="hero-header image" src="/images/events/travaux-a-la-chiche/dumb.jpg" />
        <h1>Travaux à la chiche</h1>
    </div>
    <div class="new">
        <h2>Rosé à volonté !</h2>
        <h3>Exclusivement pour cette chiche, nous avons prévus 2 cubi de rosé bien BTP bien 8h-16h intérim.</h3>
        <img alt="hero-header image" src="/images/events/travaux-a-la-chiche/dumb.jpg" />
    </div>
</template>

<style scoped>
div.hero-header {
  width: fit-content;
  margin: 1em auto;
  text-align: center;
  display: flex;
  flex-direction: column;
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
        margin-bottom: .5em;
    }

    &>img {
        margin-top: 1em;
    }
}
</style>