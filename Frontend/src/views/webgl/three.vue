<template>
  <div ref="webgl" />
</template>

<script>
import Three from '../../example'

export default {
  mounted() {
    Three(this.$refs.webgl)
  }
}
</script>

<style scoped></style>
