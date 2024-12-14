<template>
  <footer>
    <div class="telegram">
      <h2>Rejoins le télégram maintenant</h2>
      <h4>Si tu ne rejoins pas samos viendra dans tes rêves.</h4>

      <img src="/images/telegram-link.jpeg" alt="telegram link" />
      <span><a target="_blank" href="https://t.me/+ZSKuml6mYhNmZTU0">Ou via le lien</a></span>
    </div>

    <span>Contact : assiasamosbraquageforsure@ballon2zipette.com</span>
    <span>&copy; Ballon2Zipette {{ new Date().getFullYear() }} | 11 rue des cramptés, 101214 Bureau | <a target="_blank" href="https://github.com/Matteo0810/ballon2zipette.com">Code source</a></span>
    <span class="warning">Ce site n'a pas pour objet de faire la promotion de la drogue.</span>
  </footer>
</template>

<style scoped>
div.telegram {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1em;

  & > img {
    width: 10em;
  }

  & > span {
    background-color: var(--orange);
    width: fit-content;
    border-radius: 0.3em;
    padding: 5px 20px 5px 20px;
    cursor: pointer;

    & > a {
      color: var(--black);
      text-decoration: none;
    }
  }
}

footer {
  text-align: center;
  padding: 1.5em 0;

  display: flex;
  flex-direction: column;
  gap: .5em;

  & a {
    text-decoration: none;
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
    padding-bottom: .01em;
  }

  &>span.warning {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
    padding-bottom: .5em;
    width: fit-content;
    margin: auto;
  }
}
</style>
