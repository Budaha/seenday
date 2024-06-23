<template>
  <div class="nav">
    <div class="nav__image">
      <img src="../assets/image/Seenday.png">
    </div>
    <div class="nav__text">
      <p>Для фотографов</p>
      <p>В школах</p>
      <p>В детских садах</p>
      <p>Контакты</p>
    </div>
    <div class="nav__btn">
      <button class="btn">Войти</button>
      <button class="button">Создать аккаунт</button>
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
    margin-left: 58px;
    gap: 0 90px;
    align-items: center;
    
    p {
      font-family: "Montserrat", sans-serif;
      font-size: 17px;
      font-weight: 500;
      line-height: 20.72px;
      color: #282828;
    }
  }
  &__btn {
    display: flex;
    gap: 0 10px;
  }
}
</style>