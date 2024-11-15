<script setup></script>

<template>
  <h1>index.scss樣式</h1>
  <p class="title">all.scss全域共用樣式</p>

  <h3>bootstrap按鈕：</h3>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-gold">gold</button>
  <button type="button" class="btn btn-brown">brown</button>

</template>

<style lang="scss">
@import url(assets/stylesheets/index.scss);

</style>
