<template lang="pug">
  v-img(:src="path", :max-width="maxWidth")
</template>

<script>
export default {
  name: 'ViewImg',
  props: {
    maxWidth: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    folderName: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    path() {
      return require(`@/assets/${this.folderName}/${this.name}`)
    },
  },
}
</script>
