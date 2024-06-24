<template>
  <div class="home">
    <HomeComponent class="container" />
  </div>
  <div class="rates">
    <RatesComponent class="container" />
  </div>
</template>

<script setup lang="ts">
import { HomeComponent, RatesComponent } from "#components";
</script>

<style lang="scss" scoped>
.home {
  background: url(../assets/image/home/HomeSection.svg);
  padding-top: 100px;
  padding-bottom: 174px;
}
.rates {
  background: url(../assets/image/rates/Rates.png);
  margin-top: 20px;
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>