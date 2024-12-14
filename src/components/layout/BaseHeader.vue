<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">
            Accueil
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">
            Notre équipe
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}">
            Nos évènements
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul {
  display: flex;
  gap: 2em;
  justify-content: center;
  margin: 2em 0;

  list-style: none;

  &>li {
    &>a {
      color: white;
      text-decoration: none;
      transition: all .5s ease;

      &:hover {
        color: var(--orange);
      }
    }
  }
}
</style>
