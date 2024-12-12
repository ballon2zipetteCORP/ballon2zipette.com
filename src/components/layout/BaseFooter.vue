<template>
  <footer>
    <span>&copy; Ballon2Zipette {{ new Date().getFullYear() }} | 11 rue des cramptés, 101214 Bureau</span>
    <span class="warning">Ce site n'a pas pour objet de faire la promotion de la drogue.</span>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 1.5em 0;

  display: flex;
  flex-direction: column;
  gap: .5em;

  &>span.warning {
    color: var(--orange);
    border-bottom: 1px solid var(--orange);
    padding-bottom: .5em;
    width: fit-content;
    margin: auto;
  }
}
</style>
