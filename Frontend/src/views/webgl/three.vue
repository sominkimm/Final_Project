<template>
  <body ref="webgl" class="webgl-cont" />
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
* {
  margin: 0;
  padding: 0;
  /* box-sizing: border-box; */
  /* overflow-y: hidden; */
}
.webgl-cont {
  width: 100%;
  height: 100%;
  /* overflow-y: hidden; */
}
</style>
