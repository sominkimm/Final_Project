<template>
  <div class="template">
    <div class="wrapper">
      <div class="form-wrapper sign-in">
        <b-form action>
          <h4>Welcome to</h4>
          <h2>Smart Factory!</h2>
          <div class="input-group">
            <input id="input-userid" v-model="userid" type="text" autocomplete="off" required />
            <label for="input-userid">ID</label>
          </div>
          <!-- <b-form-invalid-feedback class="valid" :state="validation">아이디를 입력하세요</b-form-invalid-feedback> -->
          <div class="input-group">
            <input id="input-password" v-model="password" type="password" required @keyup.enter="onSubmit" />
            <label for="input-password">Password</label>
          </div>
          <button type="button" @click="onSubmit">로그인</button>
          <div class="signup-link">
            <p>
              계정이 없으신가요?
              <a href="#" @click="activeSignup">회원가입</a>
            </p>
          </div>
        </b-form>
      </div>

      <!-- @submit.prevent="submitForm" -->
      <div class="form-wrapper sign-up">
        <form action>
          <!-- @submit.prevent="handleSubmit" -->
          <h3>회원가입</h3>

          <div class="input-group">
            <input v-model="s_userid" type="text" required />
            <label for="">ID</label>
          </div>
          <div class="input-group">
            <input id="pw1" v-model="s_password" type="password" required />
            <label for="">Password</label>
          </div>
          <div class="input-group">
            <input id="pw2" v-model="passwordVerify" type="password" required />
            <!-- @submit.prevent="verifyPw" -->
            <label for="">Check Password</label>
          </div>
          <div class="input-group">
            <input v-model="email" type="email" required />
            <label for="">Email</label>
          </div>
          <div class="input-group">
            <input v-model="phone" type="tel" required />
            <label for="">휴대전화</label>
          </div>
          <div class="input-group">
            <input v-model="factoryname" required @keyup.enter="handleSubmit" />
            <label for="">회사명</label>
          </div>
          <button type="button" @click="handleSubmit">회원가입</button>
          <!-- @click="submitForm" -->
          <div class="signup-link">
            <p>
              계정이 이미 있으신가요?
              <a href="#" @click="activeSignin">로그인</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  name: 'Signup',
  data() {
    return {
      userid: '',
      password: '',
      s_userid: '',
      s_password: '',
      email: '',
      phone: '',
      factoryname: ''
    }
  },
  computed: {
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
      return this.userid.length < 1
    }
  },
  watch: {
    tokenUser(value) {
      if (value && value.id && value.id > 0) {
        // 로그인이 완료된 상황
        this.$router.push('/home') // 메인 페이지 이동
      }
    },
    error(errValue) {
      if (errValue !== null) {
        // 메세지 출력
        this.$bvToast.toast('아이디/비밀번호를 확인해 주세요.', {
          title: '로그인 에러',
          variant: 'danger',
          solid: true
        })
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
        this.$router.push('/home') // 메인 페이지 이동
      } else {
        // 토큰이 만료된 경우
        window.localStorage.removeItem('token') // 토큰 삭제
      }
    }
  },
  methods: {
    activeSignup() {
      const wrapper = document.querySelector('.wrapper')
      wrapper.classList.toggle('active')
    },
    activeSignin() {
      const wrapper = document.querySelector('.wrapper')
      wrapper.classList.toggle('active')
    },
    onSubmit() {
      this.$store.dispatch('authLogin', {
        userid: this.userid,
        password: this.password
      })
      console.log('login clicked')
    },
    handleSubmit() {
      console.log('signup enterkey')
      const userData = {
        s_userid: this.s_userid,
        s_password: this.s_password,
        email: this.email,
        phone: this.phone,
        factoryname: this.factoryname
      }
      this.$store.dispatch('actUserInsert', userData)
      //가입 후 폼 초기화
      this.initForm()
      this.$router.go()
      // const { data } = await userData // Destructuring
      // this.logMessage = `${userData.s_userid}님이 가입되었습니다.`
      alert(`${userData.s_userid}님 회원가입이 완료되었습니다!`)
      console.log(`${userData.s_userid}님이 가입되었습니다`)
      //template literal(백틱문법) 자바스크립변수를 문자열과 합침
    },
    initForm() {
      this.s_userid = ''
      this.s_password = ''
      this.passwordVerify = ''
      this.email = ''
      this.phone = ''
      this.factoryname = ''
    }
    // checkPassword() {
    //   const pw1 = document.querySelector('#pw1').value
    //   const pw2 = document.querySelector('#pw2').value

    //   if (pw1.length < 6) {
    //     pw1.innerHTML = '<div style="color: red; font-size: 12px">비밀번호는 6글자 이상이어야 합니다!</div>'
    //     return false
    //   }
    //   if (pw1 !== pw2) {
    //     pw2.innerHTML = '<div style="color: red; font-size: 12px">비밀번호가 일치하지 않습니다!</div>'
    //     return false
    //   } else {
    //     pw2.innerHTML = '<div style="color: red; font-size: 12px">비밀번호가 일치합니다!</div>'
    //     return true
    //   }
    // }

    //유튜브 - 회원가입
    // async handleSubmit(e) {
    //   e.preventDefault()

    //   console.log('submitted')

    //   const response = await axios.post('', {
    //     userid: this.s_userid,
    //     password: this.s_password,
    //     passwordVerify: this.passwordVerify,
    //     email: this.email,
    //     phone: this.phone,
    //     factoryname: this.factoryname
    //   })
    //   console.log(response)
    // }

    // handleSubmit() {
    //  const data = {
    //    userid: this.userid,
    //    password: this.password,
    //    passwordVerify: this.passwordVerify,
    //    email: this.email,
    //    phone: this.phone,
    //    factoryname: this.factoryname
    //  }

    // async submitForm() {
    //   //validation 생략
    //   const userData = {
    //     s_userid: this.s_userid,
    //     s_password: this.s_password,
    //     passwordVerify: this.passwordVerify,
    //     email: this.email,
    //     phone: this.phone,
    //     factoryname: this.factoryname
    //   }

    //   const response = await registerUser(userData)
    //   if (response.status == 200) {
    //     alert('환영합니다.')
    //     this.$router.push('/auth/login')
    //   } else {
    //     alert(response.data)
    //   }
    // },
    // btnSignup() {
    //   console.log('signup key event')
    // },
    //      axios.post('http://192.168.0.70:8081/signup', data)
    //          .then(
    //            res => {
    //              console.log(res)
    //            }
    //          )
    //          .catch(
    //            err => {
    //              console.log(err)
    //            }
    //          )
    //    }
    // btnSignup() {
    //   //   this.$store.dispatch('authSignup', {
    //   //     userid: this.userid,
    //   //     password: this.password,
    //   //     passwordVerify: this.passwordVerify,
    //   //     email: this.email,
    //   //     phone: this.phone,
    //   //     factoryname: this.factoryname
    //   //   })
    //   console.log('signup clicked')
    // }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.template {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
}

.wrapper {
  position: relative;
  width: 400px;
  height: 620px;
  background: #000;
  box-shadow: 0 0 50px #0ef;
  border-radius: 20px;
  padding: 40px;
  overflow: hidden;
}

/* hover effect: change colors */
// .wrapper:hover {
//   animation: animate 1s linear infinite;
// }

// @keyframes animate {
//   100% {
//     filter: hue-rotate(360deg);
//   }
// }

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: 1s ease-in-out;
}

.wrapper.active .form-wrapper.sign-in {
  transform: translateY(-600px);
}

.wrapper .form-wrapper.sign-up {
  position: absolute;
  top: 600px;
  left: 0;
}

.wrapper.active .form-wrapper.sign-up {
  transform: translateY(-600px);
}

h2 {
  font-size: 26px;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  margin-bottom: 40px;
}

h4 {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  margin-bottom: 15px;
}

h3 {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
  margin-top: 15px;
}

// .valid {
//   margin-bottom: 15px;
// }

.sign-in .input-group {
  position: relative;
  margin: 25px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.588);
}

.sign-up .input-group {
  position: relative;
  margin: 25px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.588);
}

.input-group label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.633);
  pointer-events: none;
  transition: 0.5s;
}

.input-group input {
  width: 290px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  padding: 0 5px;
  background: transparent;
  border: none;
  outline: none;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label {
  top: -5px;
}

// .remember {
//   margin: -5px 0 15px 5px;
// }

// .remember label {
//   color: #fff;
//   font-size: 14px;
// }

// .remember label input {
//   accent-color: #0ef;
// }

button {
  position: relative;
  width: 100%;
  height: 40px;
  background: #0ef;
  box-shadow: 0 0 10px #0ef;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  outline: none;
  margin-top: 13px;
}

.signup-link {
  font-size: 14px;
  text-align: center;
  margin: 15px 0;
}

.signup-link p {
  color: rgba(255, 255, 255, 0.633);
}

.signup-link p a {
  color: rgba(0, 238, 255, 0.79);
  text-decoration: none;
  font-weight: 500;
}

.signup-link p a:hover {
  text-decoration: underline;
}
</style>
