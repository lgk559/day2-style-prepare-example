<script setup lang="ts"></script>

<template>
  <header>
    頁首(模板預設)
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink to="/" class="nav-link" aria-current="page">首頁</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/about" class="nav-link">關於我</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/admin" class="nav-link">後台</NuxtLink>
      </li>
    </ul>
  </header>
  <slot />
  <footer class="mt-auto">
    頁尾(模板預設)
  </footer>
</template>

<style scoped></style>
