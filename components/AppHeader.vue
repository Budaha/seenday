<template>
  <div class="nav">
    <div class="nav__image">
      <img src="../assets/image/header/Seenday.png" />
    </div>
    <ul class="nav__text">
      <li>Работа с Seenday</li>
      <div class="arrow">
        <li>Автоматизация</li>
        <img src="../assets/image/header/Arrow.png" />
      </div>
      <li>Тарифы</li>
      <li>Контакты</li>
    </ul>
    <button class="button">Личный кабинет</button>
  </div>
</template>
  
<script setup lang="ts">
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    display: none;
  }
  &__image {
    padding-left: 5px;
    img {
      width: 264.89px;
      height: 57.6px;
    }
  }
  &__text {
    display: flex;
    gap: 0 80px;
    align-items: center;
    margin-right: 93px;
    cursor: pointer;
    @media (max-width: 1550px) {
      margin-right: 0;
      gap: 0 30px;
    }

    li {
      font-size: 17px;
      font-weight: 500;
      line-height: 20.72px;
      color: #282828;
    }
    .arrow {
      display: flex;
      align-items: center;
      img {
        margin-left: 9px;
        width: 10px;
        height: 7px;
      }
    }
  }
  .button {
    box-shadow: 11px 16px 30px 0px #7175d833;
    background: linear-gradient(119.64deg, #c071ff 21.1%, #a129ff 80.68%);
  }
}
</style>