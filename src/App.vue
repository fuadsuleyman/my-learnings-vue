<template>
  <ul>
    <resource-item-vue v-for="res in storedResources" :key="res.id" :title="res.title" :link="res.link" :description="res.description"></resource-item-vue>
  </ul>
</template>

<script>
import ResourceItemVue from './components/learning-resources/ResourceItem.vue';
export default {
  components: { ResourceItemVue },
  data() {
    return {
      storedResources: [
        {
          id: 'official guide',
          title: 'Official Vue Guide',
          description: 'to learn knowledge from first hand is so important',
          link: 'https://vuejs.org/',
        },
        {
          id: 'search materials',
          title: 'Google search',
          description: 'find materials from different resources about vue',
          link: 'https://google.com/',
        },
      ],
    };
  },
};
</script>