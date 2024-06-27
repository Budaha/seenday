<template>
  <div class="rates-section">
    <div class="rates-section__block">
      <h1 class="title">Тарифы хранилища диска</h1>
      <p class="descr">
        В хранилище диска ваши фотографии / исходники в безопасности используйте
        их в любое время на любом устройстве.
      </p>
      <div class="buttons">
        <button @click="editRatesType('month')" class="button" :class="ratesType === 'month' && 'button--active'">На месяц</button>
        <button @click="editRatesType('year')" class="button" :class="ratesType !== 'month' && 'button--active'">На год <span>Выгодно</span></button>
      </div>
    </div>
    <div class="rates-section__grid">
      <div
        class="rates-section__grid-cards"
        v-for="(card, index) in cards"
        :key="index"
        :class="{
          'rates-section__grid-cards': true,
          'rates-section__grid-cards--background': card.isBackground,
        }"
      >
        <h2 class="title">{{ card?.quantity || "" }} ГБ</h2>
        <div class="info">
          <img src="../assets/image/rates/RatesGrid.png" />
          <p>{{ card?.advantageBuy || "" }}</p>
        </div>
        <div class="info">
          <img src="../assets/image/rates/RatesGrid2.png" />
          <p>{{ card?.advantageAccounting || "" }}</p>
        </div>
        <button class="button" :class="index === 1 && 'button__main'">
          Подключить за <span>{{ card?.price || 0 }} р / мес</span>
        </button>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from "vue";

interface arrCards {
  id: number;
  quantity: number;
  price: number;
  advantageBuy: string;
  advantageAccounting: string;
  isBackground: boolean;
}

const cards = ref<arrCards[]>([
  {
    id: 1,
    quantity: 200,
    price: 200,
    advantageBuy:
      "Покупаете и занимаетесь интеграцией онлайн кассы с Вашим эквайрингом;",
    advantageAccounting:
      "Ведем бухгалтерию за Вас и предоставляем Вам только акт о выплате средств;",
    isBackground: false,
  },
  {
    id: 2,
    quantity: 200,
    price: 200,
    advantageBuy:
      "Покупаете и занимаетесь интеграцией онлайн кассы с Вашим эквайрингом;",
    advantageAccounting:
      "Ведем бухгалтерию за Вас и предоставляем Вам только акт о выплате средств;",
    isBackground: true,
  },
  {
    id: 3,
    quantity: 200,
    price: 200,
    advantageBuy:
      "Покупаете и занимаетесь интеграцией онлайн кассы с Вашим эквайрингом;",
    advantageAccounting:
      "Ведем бухгалтерию за Вас и предоставляем Вам только акт о выплате средств;",
    isBackground: false,
  },
]);
const ratesType = ref<string>('month')

const editRatesType = (type: string) => {
  ratesType.value = type
}
</script>
<style lang="scss" scoped>
.rates-section {
  &__block {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .title {
      color: #ffffff;
    }
    .descr {
      padding-top: 50px;
      font-size: 22px;
      font-weight: 500;
      line-height: 26.82px;
      color: #ffffff;
      max-width: 800px;
    }
    .buttons {
      display: flex;
      margin-top: 45px;
      margin-left: 15px;
      border: 2px solid #ffa500;;
      border-radius: 10px;
      @media(max-width: 768px) {
        margin-top: 0;
        margin-left: 0;
      }
      .button {
        margin: 0;
        border: none;
        border-radius: 0;
        width: 184px;
        font-size: 20px;
        font-weight: 500;
        line-height: 24.38px;
        transition: 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 52px;
        span {
          font-size: 13px;
          font-weight: 700;
          line-height: 15.85px;
          color: #ffa500;
          margin-left: 10px;
          margin-top: 3px;
        }
        &--active {
          transition: 0.2s;
          background: #ffa500;
          span {
            color: #ffffff;
          }
        }
        &:first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        &:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 408px;
    gap: 0 18px;
    margin-top: 25px;
    margin-left: 90px;
    @media (max-width: 1440px) {
      margin-left: 0;
    }
    @media (max-width: 1345px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: none;
    }
  }
  &__grid-cards {
    padding: 40px;
    height: 314px;
    width: 328px;
    border-radius: 5px;
    background: radial-gradient(
      192.35% 126.8% at 34.18% 10.47%,
      rgba(114, 48, 135, 0.55) 0%,
      rgba(193, 95, 164, 0.55) 100%
    );
    @media (max-width: 1440px) {
      margin-top: 20px;
      width: 100%;
      height: auto;
      width: auto;
    }
    &--background {
      background: radial-gradient(
        156.07% 105.58% at 78.79% 105.58%,
        rgba(118, 95, 182, 0.67) 0%,
        rgba(165, 132, 225, 0.67) 99.04%
      );
      border: 2px solid #ffa500;
    }
  }
  .title {
    font-size: 40px;
    font-weight: 700;
    line-height: 48.76px;
    color: #ffffff;
  }
  .info {
    display: flex;
    margin-top: 18px;
    img {
      width: 18px;
      height: 18px;
    }
    p {
      padding-left: 13px;
      font-size: 17px;
      font-weight: 400;
      line-height: 20.72px;
      color: #ffffff;
    }
  }
  .button {
    width: 325px;
    height: 69px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    line-height: 21.94px;
    border: 2px solid #ffa500;
    margin-top: 35px;
    background: radial-gradient(
      192.35% 126.8% at 34.18% 10.47%,
      rgba(114, 48, 135, 0.55) 0%,
      rgba(193, 95, 164, 0.55) 100%
    );
    span {
      font-weight: 700;
    }
    &__main {
      background: radial-gradient(
        127.63% 987.11% at 13.33% 0%,
        #a328ff 0%,
        #ffa401 100%
      );
      border: none;
    }
  }
}
</style>