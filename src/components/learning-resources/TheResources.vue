<template>
  <base-card>
    <base-button @click="changeTabs('stored-resources-vue')"
      >Stored Resource</base-button
    >
    <base-button @click="changeTabs('add-resources-vue')"
      >Add Resources</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResourcesVue from './StoredResources.vue';
import AddResourcesVue from './AddResources.vue';

export default {
  components: { StoredResourcesVue, AddResourcesVue },
  data() {
    return {
      selectedTab: 'stored-resources-vue',
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
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    changeTabs(tab) {
      this.selectedTab = tab;
      console.log(`this.selectedTap: ${this.selectedTab}`);
    },
  },
};
</script>