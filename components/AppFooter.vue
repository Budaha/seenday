<template>
  <div class="footer container">
    <div class="footer-section">
      <div class="footer-grid" v-for="(link, index) in links" :key="index">
        <span class="footer-grid__title">{{ link?.title || "" }}</span>
        <div class="footer-grid__links">
          <router-link
            v-for="(item, index) in link.links"
            :key="index"
            :to="item.url"
            class="footer-grid__links-item"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer-picture">
      <img src="../assets/image/footer/Footer.svg" />
      <div class="footer-picture-second">
        <img class="second" src="../assets/image/footer/Footer2.png" />
        <p>Товарный знак № <span>865111</span></p>
      </div>
    </div>
  </div>
  <p class="line"></p>
  <div class="container end">
    <div class="end-page">
      <p>© Seenday, 2021-2023</p>
      <p>Политика использования Cookie</p>
    </div>
      <p>Проект компании Marbery</p>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

interface arrLinks {
  title: string;
  links: links[];
}
interface links {
  url: string;
  name: string;
}

const links = ref<arrLinks[]>([
  {
    title: "Для фотографов",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
  {
    title: "Тарифы",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
  {
    title: "Автоматизация",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
  {
    title: "Блог",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
  {
    title: "Справка",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
  {
    title: "Контакты",
    links: [
      {
        url: "/",
        name: "Для фотографов",
      },
      {
        url: "/",
        name: "Тарифы",
      },
      {
        url: "/",
        name: "Автоматизация",
      },
      {
        url: "/",
        name: "Блог",
      },
      {
        url: "/",
        name: "Справка",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding-bottom: 80px;
  @media(max-width:1500px) {
    justify-content: space-between;
    }
  @media(max-width:865px) {
      flex-direction: column;
      padding-bottom: 20px;
    }
  &-section {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0 60px;
    @media(max-width:1500px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width:865px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &-grid {
    display: flex;
    flex-direction: column;
    @media(max-width:1500px) {
      margin-top: 20px;
    }
    &__title {
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
      line-height: 18.29px;
    }
    &__links {
      display: flex;
      flex-direction: column;
      a {
        text-decoration: none;
        padding-top: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        color: #beaccb;
        &:hover {
          transition: 0.2s;
          color: #a129ff;
        }
      }
    }
  }
  &-picture {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    @media(max-width:1500px) {
    margin-left: 0;
    }
    @media(max-width:865px) {
      flex-direction: row;
      margin-top: 20px;
    }
    &-second {
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-left: 9px;
      p {
        margin-left: 8px;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
        color: #beaccb;
      }
      span {
        text-decoration: underline;
      }
    }
  }
}
.line {
  height: 1px;
  background: #beaccb;
}
.end {
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  @media(max-width: 865px) {
    flex-direction: column;
  }
  .end-page {
    display: flex;
    gap: 0 125px;
    @media(max-width: 865px) {
    flex-direction: column;
  }
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 17.07px;
    color: #b09ebc;
    @media(max-width: 865px) {
    margin-top: 10px;
  }
  }
}
</style>