<template>
  <ul>
    <resource-item-vue
      @delete="deleteResource"
      v-for="res in resources"
      :key="res.id"
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
  methods: {
    deleteResource(resourceId) {
      console.log(`Entered to deleteResource`);
      console.log(this.resources);
      console.log(`resourceId: ${resourceId}`);
      const resIndex = this.resources.findIndex(res => res.id === resourceId)
      this.resources.splice(resIndex, 1)
      console.log(this.resources);
    },
  },
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