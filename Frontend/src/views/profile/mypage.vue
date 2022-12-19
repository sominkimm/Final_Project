<template>
  <b-container>
    <b-row>
      <b-col cols="5">
        <div class="mypageForm">
          <form action @submit.prevent="handleSubmit">
            <h3 style="margin-top: 100px">Hello {{ this.$store.getters.TokenUser.userid }}</h3>
            <b-row class="input-group">
              <b-col cols="2">
                <label for="">ID </label>
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
                <input
                  id="passwordVerify"
                  v-model="passwordVerify"
                  type="password"
                  required
                  @submit.prevent="verifyPw"
                />
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
              <button type="button" class="btn edit" @click="edit_profile">수정</button>
              <button type="button" class="btn delete" @click="deleteAccount">탈퇴</button>
            </b-row>
          </form>
        </div>
      </b-col>
      <!-- <b-col cols="3">
        <img :src="data" alt="" />
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import jwtDecode from 'jwt-decode'
export default {
  name: 'Updated',
  // props: ['value'],
  data() {
    return {
      userid: '',
      password: '',
      email: '',
      phone: '',
      factoryname: '',
      passwordVerify: null
    }
  },
  computed: {
    // ...mapGetters('User', { user: 'User' }),
    // ...mapGetters('Auth', ['TokenUser']),
    // message() {
    //   return this.$store.getters.TokenUser.userid
    // },
    // useremail() {
    //   return this.$store.getters.User.email
    // },
    // factoryName() {
    //   return this.$store.getters.User.factoryname
    // },
    UserInfo() {
      return this.$store.getters.User
    },
    tokenUser() {
      return this.$store.getters.TokenUser
    },
    loading() {
      return this.$store.getters.TokenLoading
    },
    error() {
      return this.$store.getters.TokenError
    },
    validation() {
      return this.userid.length
    }
  },
  watch: {
    UserInfo(value) {
      if (value && value.id) {
        this.userid = value.userid
        this.email = value.email
        this.phone = value.phone
        this.factoryname = value.factoryname
      }
    }
  },
  created() {
    // 이미 토큰을 가지고 있는 경우 처리를 위한 로직
    const token = window.localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      const today = new Date()
      const expDate = new Date(decodedToken.exp * 1000)

      if (expDate && expDate >= today) {
        // 토큰이 유효한 경우
        // this.$router.push('/home') // 메인 페이지 이동
      } else {
        // 토큰이 만료된 경우
        window.localStorage.removeItem('token') // 토큰 삭제
      }
    }
    console.log('---this.tokenUser : ', this.tokenUser)
    this.$store.dispatch('actUserInfo', this.tokenUser.id)
    // this.actUserInfo(this.tokenUser.id)
  },
  methods: {
    // ...mapActions('User', ['actUserInfo']),
    // useridInput(value) {
    //   this.value = value
    //   this.$emit('input', event.target.value)
    // },
    userInfoData() {
      this.$store.dispatch('actUserInfo', this.tokenUser.id)
    },
    edit_profile() {
      console.log('Updated enterkey')
      const userData = {
        s_userid: this.userid,
        password: this.password,
        email: this.email,
        phone: this.phone,
        factoryname: this.factoryname
      }
      console.log(userData)
      console.log(userData.s_userid)
      this.$store.dispatch('actUserUpdate', userData)
      //가입 후 폼 초기화
      this.initForm()
      this.$router.go()
    },
    initForm() {
      this.userid = ''
      this.password = ''
      this.passwordVerify = ''
      this.email = ''
      this.phone = ''
      this.factoryname = ''
    },
    deleteAccount() {
      const deleteData = {
        userid: this.userid,
        password: this.password,
        email: this.email,
        phone: this.phone,
        factoryname: this.factoryname
      }
      console.log(deleteData)
      this.actUserDelete(deleteData)
      alert(`${this.userid}님 정상적으로 탈퇴되었습니다!`)
      this.$router.go()
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #3498db;
// $blue: rgb(85, 218, 227);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
}
.mypageForm {
  height: 500px;
  width: 600px;
  // background-color: #000;
  // color: #fff;
}

h3 {
  text-align: center;
  margin-top: 120px;
  margin-bottom: 50px;
}

.input-group {
  margin: 15px 0;
}
.input-group label {
  width: 120px;
}
.input-group input {
  margin-left: 25px;
}
.btn {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid $blue;
  border-radius: 0.6em;
  color: $blue;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 0.6em 1.5em;
  text-decoration: none;
  text-align: center;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
}
.btn.edit {
  margin-top: 40px;
  // width: 70px;
  // height: 30px;
  margin-right: 5px;
  border-color: $blue;
  color: #fff;
  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
  }
}
.btn.delete {
  margin-left: 10px;
  margin-right: -40px;
  margin-top: 40px;
  // width: 70px;
  // height: 30px;
  border-color: $blue;
  color: #fff;
  box-shadow: 0 0 40px 40px $blue inset, 0 0 0 0 $blue;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px 0 $blue inset, 0 0 10px 4px $blue;
  }
}
</style>
