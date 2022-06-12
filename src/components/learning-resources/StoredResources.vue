<template>
  <ul>
    <resource-item-vue
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :link="res.link"
      :description="res.description"
    ></resource-item-vue>
  </ul>
</template>

<script>
import ResourceItemVue from './ResourceItem.vue';
export default {
  inject: ['resources'],
  components: { ResourceItemVue },
  date() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>