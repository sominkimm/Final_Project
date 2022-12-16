<template>
  <b-container>
    <b-row>
      <b-col cols="5">
        <form action>
          <h3>Hello Seonhwa</h3>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">ID</label>
            </b-col>
            <b-col cols="5">
              <input id="userid" v-model="userid" type="text" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">Password</label>
            </b-col>
            <b-col cols="5">
              <input id="password" v-model="password" type="password" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">Check Password</label>
            </b-col>
            <b-col cols="5">
              <input id="passwordVerify" v-model="passwordVerify" type="password" required @submit.prevent="verifyPw" />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">Email</label>
            </b-col>
            <b-col cols="5">
              <input id="email" v-model="email" type="email" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">휴대전화</label>
            </b-col>
            <b-col cols="5">
              <input id="phone" v-model="phone" type="tel" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">회사명</label>
            </b-col>
            <b-col cols="5">
              <input id="factoryname" v-model="factoryname" required @keyup.enter="submitForm" />
            </b-col>
          </b-row>
          <b-row>
            <button type="button" class="btn_edit" @click="edit_profile">수정</button>
            <button type="button" class="btn_edit" @click="delete_profile">삭제</button>
          </b-row>
        </form>
      </b-col>
      <!-- <b-col cols="3">
        <img :src="data" alt="" />
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      userid: '',
      password: '',
      email: '',
      phone: '',
      factoryname: ''
    }
  },
  computed: {
    isLoggedin() {
      let login = false
      if (this.$store.getters.TokenUser && this.$store.getters.TokenUser.id > 0) {
        login = true
      }
      return login
    },
    infoData() {
      return this.$store.getters.User
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
}

h3 {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 50px;
}

.input-group {
  margin: 15px 0;
}

.input-group input {
  margin-left: 25px;
}

.btn_edit {
  margin-top: 40px;
}
</style>
