<template>
  <div>
    <AppHeader/>
    <slot />
    <AppFooter/>
  </div>
</template>

<script setup lang="ts">
import { AppFooter, AppHeader } from '#components'

</script>