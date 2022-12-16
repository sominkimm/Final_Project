<template>
  <b-container>
    <b-row>
      <b-col cols="5">
        <form action @submit.prevent="handleSubmit">
          <h3>Hello Seonhwa</h3>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">ID</label>
            </b-col>
            <b-col cols="3">
              <input v-model="s_userid" type="text" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">Password</label>
            </b-col>
            <b-col cols="3">
              <input v-model="s_password" type="password" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">Check Password</label>
            </b-col>
            <b-col cols="3">
              <input v-model="passwordVerify" type="password" required @submit.prevent="verifyPw" />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">Email</label>
            </b-col>
            <b-col cols="3">
              <input v-model="email" type="email" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">휴대전화</label>
            </b-col>
            <b-col cols="3">
              <input v-model="phone" type="tel" required />
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="1">
              <label for="">회사명</label>
            </b-col>
            <b-col cols="3">
              <input v-model="factoryname" required @keyup.enter="submitForm" />
            </b-col>
          </b-row>
          <button type="button" @click="submitForm">수정</button>
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
  // data() {
  //   require('../../assets/images/smart-factory.png')
  // }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input-group {
  margin: 15px 0;
}

.input-group input {
  margin-left: 25px;
}
</style>
