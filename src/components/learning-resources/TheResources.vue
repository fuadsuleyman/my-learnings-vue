<template>
  <base-card>
    <base-button
      @click="changeTabs('stored-resources-vue')"
      :mode="storedResButtonMode"
      >Stored Resource</base-button
    >
    <base-button
      @click="changeTabs('add-resources-vue')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources-vue' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources-vue' ? null : 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResources: this.addResources,
      deleteResource: this.deleteResource
    };
  },
  methods: {
    changeTabs(tab) {
      this.selectedTab = tab;
      console.log(`this.selectedTap: ${this.selectedTab}`);
    },
    addResources(title, description, link) {
      const newResources = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResources);

      // below code for to return resources page
      this.selectedTab = 'stored-resources-vue';
    },
    deleteResource(resourceId){
      const resIndex = this.storedResources.findIndex(res => res.id === resourceId)
      this.storedResources.splice(resIndex, 1)
    }
  },
};
</script>