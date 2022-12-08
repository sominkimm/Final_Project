<template>
  <div>
    <div style="margin-top: 80px">
      <b-row align-h="center">
        <b-col cols="4">
          <b-card title="회원가입">
            <b-form-group label-cols="4" label-cols-lg="3" label="아이디" label-for="input-userid">
              <b-form-input id="input-userid" v-model="userid" />
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호" label-for="input-password">
              <b-form-input id="input-password" v-model="password" type="password" />
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="비밀번호 확인" label-for="check-password">
              <b-form-input id="check-password" v-model="checkpassword" type="password"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="이름" label-for="input-name">
              <b-form-input id="input-name" v-model="name" />
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="E-mail" label-for="input-email">
              <b-form-input id="input-email" v-model="email" />
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="휴대전화" label-for="input-phone">
              <b-form-input id="input-phone" v-model="phone" type="tel"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="회사명" label-for="input-companyName">
              <b-form-input id="input-companyName" v-model="companyName"></b-form-input>
            </b-form-group>
            <b-form-group label-cols="4" label-cols-lg="3" label="">
              <b-button variant="primary" :disabled="loading" @click="onSubmit">
                <b-spinner v-if="loading" small />회원가입
              </b-button>
            </b-form-group>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import jwtDecode from 'jwt-decode'
import axios from 'axios'

export default {
  data() {
    return {
      userid: '',
      password: '',
      name: '',
      phone: '',
      email: '',
      companyName: ''
    }
  },
  methods: {
    onSubmit() {
      const userid = this.userid
      const password = this.password
      const name = this.name
      const phone = this.phone
      const email = this.email
      const companyName = this.companyName

      if (!userid || !password || !name || !phone || !email || !companyName) {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
