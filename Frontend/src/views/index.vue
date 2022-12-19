<template>
  <div>
    <!-- <div class="separate-body" /> -->
    <b-container fluid style="padding-left: 0px" variant="dark">
      <b-row class="rowContainer">
        <!-- Side bar -->
        <b-col cols="1" style="padding-right: 0px; margin-right: 20px">
          <app-sidebar />
        </b-col>
        <!-- Body contents -->
        <b-col style="padding-left: 0px; padding-right: 0px; margin-left: 30px">
          <div class="content-body">
            <router-view />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Sidebar from '../components/layout/Sidebar'

export default {
  components: {
    'app-sidebar': Sidebar
  }
  // data() {
  //   return {
  //     width: 0,
  //     height: 0
  //   }
  // },
}
</script>

<style lang="scss" scoped>
.rowContainer {
  height: 100%;
  background-color: #000;
  color: #fff;
}
</style>
