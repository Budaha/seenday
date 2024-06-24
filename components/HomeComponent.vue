<template>
  <div class="home-section">
    <div class="home-section__block">
      <div class="home-section__block-text">
        <h1 class="home-section__title">
          Сервис для продажи фотографий онлайн и работы с клиентами
        </h1>
        <div class="home-section__descr">
          <p>
            <span>Seenday</span> – это готовое решение для автоматической
            продажи печатных или электронных фотографий и оптимизации работы с
            клиентами онлайн
          </p>
        </div>
        <div class="home-section__buttons">
          <button class="button">Подключить</button>
          <img src="../assets/image/home/Question.png" />
          <p>Задать вопрос</p>
        </div>
        <div class="home-section__grid">
          <div
            class="home-section__grid-element"
            v-for="(item, index) in items"
            :key="index"
          >
            <p class="title">{{ item?.title || "" }}</p>
            <p class="descr">{{ item?.description || "" }}</p>
          </div>
        </div>
      </div>
      <img class="home-image" src="../assets/image/home/HomeImage.png" />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from "vue";

interface arrAdvantages {
  id: number;
  title: string;
  description: string;
}

const items = ref<arrAdvantages[]>([
  {
    id: 1,
    title: "40000+",
    description: "заказов сделали пользователи",
  },
  {
    id: 2,
    title: "25000+",
    description: "пользователей зарегистрировано",
  },
  {
    id: 3,
    title: "7000+",
    description: "пользователей сделали больше 1 заказа",
  },
  {
    id: 4,
    title: "955руб",
    description: "средний чек в 2020 году с продажи фотографий",
  },
]);
</script>

  <style scoped lang="scss">
.home-section {
  &__block {
    display: flex;
  }
  &__block-text {
    display: flex;
    flex-direction: column;
    padding-left: 6px;
    max-width: 638px;
    position: relative;
    z-index: 2;
  }
  &__title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 45px;
    line-height: 54.86px;
    color: #282828;
  }
  &__descr {
    padding-top: 8px;
    p {
      font-weight: 500;
      font-size: 22px;
      line-height: 26.82px;
    }
    span {
      color: #a129ff;
      font-weight: 700;
      font-size: 22px;
      line-height: 26.82px;
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    margin-top: 49px;
    .button {
      box-shadow: 11px 16px 30px 0px #7175d833;
      background: radial-gradient(
        120.88% 337.27% at 13.44% -94.55%,
        #ffa500 0%,
        #a129ff 100%
      );
    }
    img {
      margin-left: 46px;
      width: 17px;
      height: 16px;
    }
    p {
      margin-left: 10px;
      font-size: 15px;
      font-weight: 500;
      line-height: 18.29px;
      cursor: pointer;
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 30px;
    margin-top: 161px;
    min-width: 850px;
    @media(max-width: 1200px) {
      min-width: 0;
    }
  }
  &__grid-element {
    .title {
      font-size: 27px;
      font-weight: 700;
      line-height: 32.91px;
      color: #a129ff;
    }
    .descr {
      font-size: 13px;
      font-weight: 500;
      line-height: 15px;
      color: #4d4d4d;
    }
  }
  .home-image {
    position: absolute;
    right: -203px;
    top: -52px;
    z-index: 1;
  }
}
</style>