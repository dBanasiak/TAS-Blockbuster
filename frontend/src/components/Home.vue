<template>
  <v-layout column>
    <v-flex>
      <div class="cats">龴ↀ◡ↀ龴</div>
      <img src="../assets/cat.jpg">
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>
<style scoped>
.cats {
  font-size: 96px;
}

img {
  width: 50%;
}

@media only screen and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .cats {
    font-size: 24px;
  }

  img {
    width: 100%;
  }
}
</style>
