<template>
  <the-header-vue :title="title"></the-header-vue>
  <stored-resources-vue :resources="storedResources"></stored-resources-vue>
</template>

<script>
import StoredResourcesVue from './components/learning-resources/StoredResources.vue';
import TheHeaderVue from './components/layouts/TheHeader.vue';
export default {
  components: { StoredResourcesVue, TheHeaderVue },
  data() {
    return {
      title: 'Best Useful Resources',
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>