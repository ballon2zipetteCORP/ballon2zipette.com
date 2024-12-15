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
          <router-link :to="{name: 'team'}">
            Notre équipe
          </router-link>
        </li>
        <li>
          Nos évènements
          <ul>
            <li>
              <router-link :to="{name: 'home'}">
                Pago-flash
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav>ul {
  display: flex;
  gap: 2em;
  justify-content: center;
  margin: 2em 0;

  list-style: none;

  &>li {
    position: relative;
    cursor: pointer;

    &>a {
      color: white;
      text-decoration: none;
      transition: all .5s ease;

      &:hover {
        color: var(--orange);
      }
    }

    &:hover>ul {
      display: block;
    }

    &>ul {
      position: absolute;
      top: 1.8em;

      display: none;

      background-color: var(--black-2);
      width: 100%;
      border-radius: 10px;
      padding: .2em 0;
      list-style: none;

      &>li {
        transition: all .5s ease;
        cursor: pointer;

        &>a {
          padding-left: 1em;
          text-decoration: none;
          display: block;
          color: white;

          &:hover {
            background-color: var(--black);
          }
        }
      }
    }
  }
}
</style>
