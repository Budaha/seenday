<template>
  <div class="header">
    <AppHeader class="container" />
  </div>
  <slot />
  <div class="footer">
    <AppFooter class="container" />
  </div>
</template>

<script setup lang="ts">
import { AppFooter, AppHeader } from "#components";
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  padding-top: 19px;
  padding-bottom: 19px;
  @media (max-width: 1200px) {
    display: none;
  }
}
.footer {
  background-color: #282828;
  padding-top: 35px;
}
</style>