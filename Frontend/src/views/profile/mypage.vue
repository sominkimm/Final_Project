<template>
  <div class="wrapper">
    <div class="form-wrapper sign-up">
      <form action @submit.prevent="handleSubmit">
        <h3>Hello Seonhwa</h3>
        <div class="input-group">
          <label for="">ID</label>
          <input v-model="s_userid" type="text" required />
        </div>
        <div class="input-group">
          <label for="">Password</label>
          <input v-model="s_password" type="password" required />
        </div>
        <div class="input-group">
          <label for="">Check Password</label>
          <input v-model="passwordVerify" type="password" required @submit.prevent="verifyPw" />
        </div>
        <div class="input-group">
          <label for="">Email</label>
          <input v-model="email" type="email" required />
        </div>
        <div class="input-group">
          <label for="">휴대전화</label>
          <input v-model="phone" type="tel" required />
        </div>
        <div class="input-group">
          <label for="">회사명</label>
          <input v-model="factoryname" required @keyup.enter="submitForm" />
        </div>
        <button type="button" @click="submitForm">수정</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper {
  position: relative;
  margin-top: 100px;
}
.form-wrapper {
}
</style>
