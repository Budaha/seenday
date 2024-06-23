<template>
  <div class="nav">
    <div class="nav__image">
      <img src="../assets/image/Seenday.png">
    </div>
    <div class="nav__text">
      <p>Работа с Seenday</p>
      <p>Автоматизация</p>
      <p>Тарифы</p>
      <p>Контакты</p>
    </div>
    <div class="nav__btn">
      <button>Личный кабинет</button>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  &__image {
    padding-left: 5px;
    img {
      width: 264.89px;
      height: 57.6px;
    }
  }
  &__text {
    display: flex;
    gap: 0 10px;
    p {
      font-size: 17px;
      line-height: 20.72px;
      align-items: center;
      font-weight: 500;
      color: #282828;
    }
  }
}
</style>