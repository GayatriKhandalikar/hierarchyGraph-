<template>
  <TheHeader />
  <main class="main">
    <RouterView></RouterView>
  </main>
</template>

<script setup>
import TheHeader from './components/layouts/Header.vue';
</script>

<style lang="css" scoped>
.main {
  padding: 5px 50px;
}
</style>
