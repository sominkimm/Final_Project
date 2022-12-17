<template>
  <b-container>
    <b-row>
      <b-col cols="5">
        <form action>
          <h3>Hello {{ TokenUser.factoryname }}</h3>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">ID</label>
            </b-col>
            <b-col cols="5">
              <!-- <input id="userid" v-model="userid" type="text" required /> -->
              <span>{{ TokenUser.userid }}</span>
            </b-col>
          </b-row>
          <b-row class="input-group">
            <b-col cols="2">
              <label for="">Password</label>
            </b-col>
            <b-col cols="5">
              <input id="password" v-model="s_password" type="password" required />
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
              <input id="factoryname" v-model="factoryname" required @keyup.enter="edit_profile" />
            </b-col>
          </b-row>
          <b-row>
            <button type="button" class="btn_edit" @click="edit_profile">수정</button>
            <button type="button" class="btn_delete" @click="delete_profile">삭제</button>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      userid: null,
      password: null,
      email: null,
      phone: null,
      factoryname: null
    }
  },
  computed: {
    ...mapGetters('User', { user: 'User' }),
    ...mapGetters('Auth', ['TokenUser']),
    infoData() {
      console.log(this.user)
      return this.user
    }
  },
  watch: {
    infoData(value) {
      if (value && value.id) {
        this.userid = value.userid
        this.email = value.email
        this.phone = value.phone
        this.factoryname = value.factoryname
      }
    }
  },
  created() {
    // console.log(this.TokenUser)
    // console.log(this.actUserInfo)
    this.actUserInfo(this.TokenUser.id)
    // this.initProfile()
  },
  methods: {
    ...mapActions('User', ['actUserInfo']),
    // ...mapActions('User', ['actUserUpdate']),
    edit_profile() {
      const userEdit = {
        userid: this.userid,
        password: this.s_password,
        email: this.email,
        phone: this.phone,
        factoryname: this.factoryname
      }
      this.$store.dispatch('actUserUpdate', userEdit)
      alert(`${userEdit.userid}님 회원 정보 수정이 완료되었습니다!`)
      console.log(`${userEdit.userid}님 회원 정보 수정이 완료되었습니다!`)
      // this.$router.go(this.$router.currentRoute)
    }
    // btn_delete() {
    //   console.log('delete')
    // }
    // initProfile() {
    //   this.userid = this.TokenUser.userid
    //   this.email = this.TokenUser.email
    //   this.factoryname = this.TokenUser.factoryname
    // },
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

.btn_edit,
.btn_delete {
  margin-top: 40px;
}
</style>
