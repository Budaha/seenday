<template>
  <div class="rates-section">
    <div class="rates-section__block">
      <h1 class="title">Тарифы хранилища диска</h1>
      <p class="descr">
        В хранилище диска ваши фотографии / исходники в безопасности используйте
        их в любое время на любом устройстве.
      </p>
      <div class="buttons">
        <button class="button">На месяц</button>
        <button class="button">На год <span>Выгодно</span></button>
      </div>
    </div>
    <div class="rates-section__grid">
      <div class="cards">
        <h2 class="title">1 ТБ</h2>
        <div class="info">
          <img src="../assets/image/rates/RatesImg.png" />
          <p>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</p>
        </div>
        <p></p>
      </div>
      <!-- <div class="cards"></div>
      <div class="cards"></div> -->
    </div>
  </div>
</template>
    
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.rates-section {
  &__block {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .title {
      font-size: 45px;
      font-weight: 700;
      line-height: 54.86px;
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
      margin-top: 50px;
      .button {
        width: 184px;
        border: 1px solid #ffa500;
        font-size: 20px;
        font-weight: 500;
        line-height: 24.38px;
        span {
          font-size: 13px;
          font-weight: 700;
          line-height: 15.85px;
          color: #ffa500;
        }
        :hover {
          color: #ffffff;
        }
      }
      :hover {
        background: #ffa500;
      }
    }
  }
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    .cards {
      padding: 20px;
      max-height: 300px;
      max-width: 200px;
      border: 2px solid #ffa500;
      border-radius: 5px;
    }
    .title {
      font-size: 40px;
      font-weight: 700;
      line-height: 48.76px;
      color: #FFFFFF;
    }
    .info {
      display: flex;
    }
  }
}
</style>