<template>
  <div ref="webgl" class="webgl-cont" />
</template>

<script>
import Three from './example'

export default {
  mounted() {
    Three(this.$refs.webgl)
  }
}
</script>

<style scoped>
.webgl-cont {
  width: 1000px;
}
</style>
