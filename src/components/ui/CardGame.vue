<template>
  <article>

    <h1>{{ title }}</h1>
    <img alt="imageGame" :src="path" class="gameImg"/>
    <button class="buttonGame">
      <a class="linkGame" :href="link">{{ description }}</a>
    </button>
  </article>
</template>

<script setup>
  defineProps({
    path:{
      type: String,
      required: true
    },
    link:{
      type: String,
      required: true
    },
    title : {
      type: String,
      required: true
    },
    description : {
      type: String,
      required : true
    }
  })

</script>
<style scoped>

article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  & > h1 {
    color: var(--orange);
    font-size: 2em;
  }
}
.gameImg{
  width: 70%;
  border-radius: 5em;
}

.buttonGame{
  text-decoration: none;
  background-color : var(--orange);
  border-radius : 5em;
  padding: 2rem;
  text-align: center;
  width: 70%;
  outline: none;
  box-shadow: 0 20px #999;
  &>a{
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bolder;
    color: var(--black);
  }
}

.buttonGame:hover{
  background-color : var(--orangeDark);

}
.buttonGame:active{
  box-shadow: 0 5px #666;
  background-color : var(--orangeDark);
  transform: translateY(7px);
}
</style>
