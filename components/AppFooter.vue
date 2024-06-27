<template>
  <div class="footer">
    <div class="footer-grid" v-for="(link, index) in links" :key="index">
      <span>Для фотографов</span>
      <span>Для фотографов</span>
      <span>Для фотографов</span>
      <span>Для фотографов</span>
      <span>Для фотографов</span>
      <span>Для фотографов</span>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { ref } from "vue";

interface arrLinks {
  title: string;
  links: links[]
}
interface links {
  url: string;
  name: string
}

const links = ref<arrLinks[]> ([
  {
    title: 'Для фотографов',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },
  {
    title: 'Тарифы',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },
  {
    title: 'Автоматизация',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },
  {
    title: 'Блог',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },
  {
    title: 'Справка',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },
  {
    title: 'Контакты',
    links: [
      {
        url: '/',
        name: 'Для фотографов',
      },
      {
        url: '/',
        name: 'Тарифы',
      },
      {
        url: '/',
        name: 'Автоматизация',
      },
      {
        url: '/',
        name: 'Блог',
      },
      {
        url: '/',
        name: 'Справка',
      },
    ]
  },

])
</script>

<style scoped lang="scss">
.footer {
  display: flex;
  &-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>