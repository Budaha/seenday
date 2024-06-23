<template>
    <div class="header">
      <AppHeader class="container"/>
    </div>
    <slot />
    <div class="footer">
      <AppFooter class="container"/>
    </div>
</template>

<script setup lang="ts">
import { AppFooter, AppHeader } from '#components'

</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  padding-top: 20px;
}
</style>