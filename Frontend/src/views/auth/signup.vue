<template>
  <div>
    <div style="margin-top: 80px">
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="회원가입">
            <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="input-userid">
              <b-form-input id="input-userid" v-model="userid"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호" label-for="input-password">
              <b-form-input id="input-password" v-model="password" type="password"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호 확인" label-for="check-password">
              <b-form-input id="input-password" v-model="password" type="password"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="이름" label-for="input-name">
              <b-form-input id="input-name" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="E-mail" label-for="input-email">
              <b-form-input id="input-email" v-model="email"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="회사명" label-for="input-company">
              <b-form-input id="input-company" v-model="company"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="">
              <b-button variant="primary" :disabled="loading" @click="onSubmit"
                ><b-spinner v-if="loading" small></b-spinner>회원가입</b-button
              >
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import jwtDecode from 'jwt-decode'

export default {
  data() {
    return {
      userid: null,
      password: null
    }
  }
}
</script>

<style lang="scss" scoped></style>
