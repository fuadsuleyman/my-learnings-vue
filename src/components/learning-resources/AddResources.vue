<template>
  <base-card>
    <form @submit.prevent="submitResources">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="linkn" name="link" v-model="link" />
      </div>
      <div>
        <base-button type="submit">Add Resources</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResources'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    submitResources() {
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        alert('Ay Brat Inputlar boshdu');
        return;
      }
      this.addResources(this.title, this.description, this.link);
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>