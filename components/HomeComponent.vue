<template>
  <div class="home-section">
    <!-- burger menu -->
    <div class="menu-buttons">
      <img src="../assets/image/header/Menu.svg" @click="openMenu" />
    </div>

    <!-- menu page -->
    <div class="menu" v-if="isMenu">
      <div class="menu-close">
        <img src="../assets/image/header/Close.svg" @click="closeMenu" />
      </div>
      <ul class="list">
        <li>Работа с Seenday</li>
        <li>Автоматизация</li>
        <li>Весь функционал</li>
        <li>Тарифы</li>
        <li>Контакты</li>
      </ul>
      <button class="button">Подключить</button>
    </div>

    <!-- home page -->
    <div class="home-section__block">
      <div class="home-section__block-text">
        <h1 class="title">
          Сервис для продажи фотографий онлайн и работы с клиентами
        </h1>
        <img class="home-image" src="../assets/image/home/HomeImage.png" />
        <div class="home-section__descr">
          <p>
            <span>Seenday</span> – это готовое решение для автоматической
            продажи печатных или электронных фотографий и оптимизации работы с
            клиентами онлайн
          </p>
        </div>
        <div class="home-section__buttons">
          <button class="button">Подключить</button>
          <div class="question">
            <img src="../assets/image/home/Question.png" />
            <p>Задать вопрос</p>
          </div>
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

const isMenu = ref<boolean>(false);

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

const openMenu = () => {
  isMenu.value = true;
};
const closeMenu = () => {
  if (!isMenu.value) return;
  isMenu.value = false;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" || e.keyCode === 27) {
    isMenu.value = false;
  }
};
onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped lang="scss">
.home-section {
  display: flex;
  flex-direction: column;
  .menu-buttons {
    display: none;
    @media (max-width: 1200px) {
      display: flex;
      justify-content: right;
    }
    img {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  .menu {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #282828;
    .menu-close {
      padding-top: 30px;
      position: absolute;
      right: 35px;
      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    .list {
      margin-top: 100px;
      li {
        font-size: 24px;
        font-weight: 500;
        line-height: 29.26px;
        color: #ffffff;
        margin-top: 20px;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          transition: 0.2s;
          color: #a129ff;
        }
      }
    }
    .button {
      margin-top: 50px;
      background: radial-gradient(
        120.88% 337.27% at 13.44% -94.55%,
        #ffa500 0%,
        #a129ff 100%
      );
    }
  }
  &__block {
    display: flex;
    @media (max-width: 1200px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
  &__block-text {
    display: flex;
    flex-direction: column;
    padding-left: 6px;
    max-width: 638px;
  }
  &__descr {
    padding-top: 8px;
    z-index: 2;
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
    @media (max-width: 1200px) {
      flex-direction: column;
    }
    .button {
      box-shadow: 11px 16px 30px 0px #7175d833;
      background: radial-gradient(
        120.88% 337.27% at 13.44% -94.55%,
        #ffa500 0%,
        #a129ff 100%
      );
    }
    .question {
      display: flex;
      margin-left: 46px;
      @media (max-width: 1200px) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
    img {
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
    z-index: 2;
    @media (max-width: 1200px) {
      min-width: 0;
      margin-top: 70px;
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__grid-element {
    @media (max-width: 768px) {
      padding-top: 15px;
    }
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
    @media (max-width: 1440px) {
      top: -30px;
      width: 70%;
    }
    @media (max-width: 1200px) {
      width: 100%;
      position: relative;
      right: 0;
      top: 0;
    }
  }
}
</style>