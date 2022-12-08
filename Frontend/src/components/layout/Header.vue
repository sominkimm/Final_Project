<template>
  <div>
    <b-navbar toggleable="lg" type="light" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">
      <b-navbar-brand href="/"> Smart Factory </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">메뉴1</b-nav-item>
          <b-nav-item href="#">메뉴2</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="isLoggedin" class="ml-auto">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ tokenUserName }}</em>
          </template>
          <b-button href="#"> Mypage </b-button>
          <b-button href="#" @click="onClick('/auth/logout')"> Log Out </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedin() {
      let login = false
      if (this.$store.getters.TokenUser && this.$store.getters.TokenUser.id > 0) {
        login = true
      }

      return login
    },
    tokenUserName() {
      return this.$store.getters.TokenUser && this.$store.getters.TokenUser.name
    }
  },
  methods: {
    onClick(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped></style>
