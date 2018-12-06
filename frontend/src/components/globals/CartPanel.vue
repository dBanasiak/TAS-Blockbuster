<template>
  <v-card>
    <v-toolbar dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="pt-3 pr-4 pb-3 pl-4">
      <slot>
        <i class="fas fa-cat"></i>
        <p class="ups">Your cart is empty</p>
        <i class="fas fa-cat"></i>
      </slot>
    </div>
  </v-card>
</template>


<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
.ups {
  font-size: 24px;
}
.cats {
  font-size: 48px;
}
</style>