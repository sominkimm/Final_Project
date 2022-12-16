<template>
  <nav ref="sidebar" class="sidebar barclose">
    <div class="header">
      <div class="header-text">
        <span class="title">SMART FACTORY</span>
      </div>
      <i class="bx bx-chevron-right toggle" @click="clickToggle"></i>
    </div>

    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <li class="nav-link">
            <router-link to="/dashboard" active-class="active" class="nav-item">
              <i class="bx bx-home-alt icon"></i>
              <span class="text nav-text">대시보드</span>
            </router-link>
          </li>

          <!-- <li class="nav-link">
            <a href="#" @click="$router.push('/three')">
              <i class="bx bx-tachometer icon"></i>
              <span class="text nav-text">모니터링 (WebGL)</span>
            </a>
          </li> -->

          <li class="nav-link">
            <router-link to="/three" active-class="active" class="nav-item">
              <i class="bx bx-tachometer icon"></i>
              <span class="text nav-text">모니터링 (WebGL)</span>
            </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/user" active-class="active" class="nav-item">
              <i class="bx bx-bell icon"></i>
              <span class="text nav-text">작업 현황</span>
            </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/issue" active-class="active" class="nav-item">
              <i class="bx bx-chat icon"></i>
              <span class="text nav-text">인수인계</span>
            </router-link>
          </li>

          <li class="nav-link">
            <router-link to="/mypage" active-class="active" class="nav-item">
              <i class="bx bx-user icon"></i>
              <span class="text nav-text">마이페이지</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div v-if="isLoggedin" class="sidebar-footer">
        <li class="bottom-content">
          <!-- <a href="#">
            <i class="bx bx-log-out icon"></i>
            <span class="text nav-text">Logout</span>
          </a> -->
          <!-- <div class="admin-profile hide">
            <div class="admin-info">
              <h3>김선화</h3>
              <h5>Admin</h5> 
            </div>
          </div> -->
          <b-button href="#" class="log-out" @click="onClick('/auth/logout')">
            <i class="bx bx-log-out icon"></i>
          </b-button>
        </li>
      </div>
    </div>
  </nav>
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
    }
    // tokenUserName() {
    //   return this.$store.getters.TokenUser && this.$store.getters.TokenUser.name
    // }
  },
  methods: {
    onClick(path) {
      this.$router.push(path)
    },
    clickToggle() {
      this.$refs.sidebar.classList.toggle('barclose')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: #000;
  transition: all 0.3s ease;
  z-index: 100;
}
.sidebar.barclose {
  width: 88px;
}

.sidebar li {
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.sidebar .icon {
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.header-text,
.sidebar .text,
.sidebar .icon {
  color: #fff;
  transition: all 0.3s ease;
}

.header-text,
.sidebar .text {
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
}
.sidebar.barclose .header-text,
.sidebar.barclose .text {
  opacity: 0;
}
/* =========================== */

.sidebar .header {
  position: relative;
}
.header-text .title {
  font-size: 18px;
  font-weight: 600;
}

.sidebar .header .toggle {
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%) rotate(180deg);
  height: 25px;
  width: 25px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sidebar.barclose .toggle {
  transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu {
  margin-top: 40px;
}

.sidebar li .nav-item,
.sidebar li .log-out {
  list-style: none;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.sidebar li .nav-item:hover,
.sidebar li .nav-item:active {
  background-color: #fff;
}
.sidebar li .log-out:hover {
  background-color: #fff;
}
.sidebar li .nav-item:hover .icon,
.sidebar li .nav-item:hover .text,
.sidebar li .nav-item:active .icon,
.sidebar li .nav-item:active .text {
  color: #000;
}
.sidebar li .log-out:hover .icon {
  color: #000;
}
.admin-info {
  color: #fff;
}
.admin-info h3 {
  font-size: 16px;
}
.admin-info h5 {
  font-size: 13px;
}
// .log-out {
//   width: 70px;
//   height: 70px;
// }
.sidebar .menu-bar {
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar {
  display: none;
}

// ========================================================
// *,
// *::before,
// *::after {
//   padding: 0;
//   margin: 0;
//   box-sizing: border-box;
// }

// :root {
//   --main-color: #000;
//   --main-color-dark: #000;
//   --main-color-light: #000;
//   --text-color: #cfcde7;
// }

// body {
//   font-family: 'Poppins', sans-serif;
//   overflow-x: hidden;
//   min-height: 100vh;
//   display: flex;
//   position: relative;
// }

// a {
//   text-decoration: none;
// }

// ul {
//   list-style: none;
// }

// nav {
//   position: sticky;
//   top: 0;
//   left: 0;
//   height: 100vh;
//   background-color: #000;
//   width: 16rem;
//   padding: 1.8rem 0.85rem;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   transition: width 0.5s ease-in-out;
// }

// nav::before {
//   content: '';
//   position: absolute;
//   width: 2rem;
//   height: 100%;
//   top: 0;
//   left: 100%;
// }

// main {
//   flex: 1;
//   padding: 2rem;
//   color: #1f2027;
//   display: flex;
//   flex-direction: column;
// }

// main h1 {
//   margin-bottom: 1rem;
// }

// main .copyright {
//   margin-top: auto;
//   font-size: 0.9rem;
// }

// main .copyright span {
//   color: #000;
//   font-weight: 500;
//   cursor: pointer;
// }

// .sidebar-top {
//   position: relative;
//   display: flex;
//   align-items: center;
// }

// .sidebar-top .logo {
//   width: 2.1rem;
//   margin: 0 0.8rem;
// }

// .sidebar-top h3 {
//   padding-left: 0.5rem;
//   font-weight: 600;
//   font-size: 1.15rem;
//   margin-bottom: 50px;
// }

// .shrink-btn {
//   position: absolute;
//   top: 50%;
//   height: 27px;
//   padding: 0 0.3rem;
//   background-color: #000;
//   border-radius: 6px;
//   cursor: pointer;
//   box-shadow: 0 3px 10px -3px rgba(70, 46, 118, 0.3);
//   right: -2.65rem;
//   transform: translateY(-50%) translateX(-8px);
//   opacity: 0;
//   pointer-events: none;
//   transition: 0.3s;
// }

// .shrink-btn i {
//   line-height: 27px;
//   transition: 0.3s;
// }

// .shrink-btn:hover {
//   background-color: #000;
// }

// nav:hover .shrink-btn,
// .shrink-btn.hovered {
//   transform: translateY(-50%) translateX(0px);
//   opacity: 1;
//   pointer-events: all;
// }

// .sidebar-links ul {
//   position: relative;
// }

// .sidebar-links li {
//   position: relative;
//   padding: 2.5px 0;
// }

// .sidebar-links a {
//   color: #cfcde7;
//   font-weight: 400;
//   font-size: 0.9rem;
//   display: flex;
//   align-items: center;
//   height: 53px;
// }

// .icon {
//   font-size: 1.3rem;
//   text-align: center;
//   min-width: 3.7rem;
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
// }

// .icon i {
//   grid-column: 1 / 2;
//   grid-row: 1 / 2;
//   transition: 0.3s;
// }

// .icon i:last-child {
//   opacity: 0;
//   color: #fff;
// }

// .sidebar-links a.active,
// .sidebar-links a:hover {
//   color: #fff;
// }

// .sidebar-links a .link {
//   transition: opacity 0.3s 0.2s, color 0.3s;
// }

// .sidebar-links a.active i:first-child {
//   opacity: 0;
// }

// .sidebar-links a.active i:last-child {
//   opacity: 1;
// }

// .active-tab {
//   width: 100%;
//   height: 53px;
//   background-color: var(--main-color-dark);
//   border-radius: 10px;
//   position: absolute;
//   top: 2.5px;
//   left: 0;
//   transition: top 0.3s;
// }

// .sidebar-links h4 {
//   position: relative;
//   font-size: 0.8rem;
//   text-transform: uppercase;
//   font-weight: 600;
//   padding: 0 0.8rem;
//   color: #cfcde7;
//   letter-spacing: 0.5px;
//   height: 45px;
//   line-height: 45px;
//   transition: opacity 0.3s 0.2s, height 0.5s 0s;
// }

// .sidebar-footer {
//   position: relative;
//   margin-top: auto;
// }

// .account {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.3rem;
//   color: #cfcde7;
//   height: 53px;
//   width: 3.7rem;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity 0.3s 0s, color 0.3s 0s;
// }

// .account:hover {
//   color: #fff;
// }

// .admin-user {
//   display: flex;
//   align-items: center;
// }

// .admin-profile {
//   white-space: nowrap;
//   max-width: 100%;
//   transition: opacity 0.3s 0.2s, max-width 0.7s 0s ease-in-out;
//   display: flex;
//   align-items: center;
//   flex: 1;
//   overflow: hidden;
// }

// .admin-user img {
//   width: 2.9rem;
//   border-radius: 50%;
//   margin: 0 0.4rem;
// }

// .admin-info {
//   padding-left: 0.3rem;
// }

// .admin-info h3 {
//   font-weight: 500;
//   font-size: 1rem;
//   line-height: 1;
// }

// .admin-info h5 {
//   font-weight: 400;
//   font-size: 0.75rem;
//   color: #cfcde7;
//   margin-top: 0.3rem;
//   line-height: 1;
// }

// .log-out {
//   display: flex;
//   height: 40px;
//   min-width: 2.4rem;
//   background-color: var(--main-color-dark);
//   color: #cfcde7;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.15rem;
//   border-radius: 10px;
//   margin: 0 0.65rem;
//   transition: color 0.3s;
// }

// .log-out:hover {
//   color: #fff;
// }

// .tooltip {
//   background-color: #000;
//   position: absolute;
//   right: -1.2rem;
//   top: 0;
//   transform: translateX(100%) translateY(-50%);
//   padding: 0 0.8rem;
//   font-size: 0.85rem;
//   display: none;
//   grid-template-rows: 1fr;
//   grid-template-columns: 1fr;
//   height: 30px;
//   align-items: center;
//   border-radius: 7px;
//   box-shadow: 0 3px 10px -3px rgba(70, 46, 118, 0.3);
//   opacity: 0;
//   pointer-events: none;
//   transition: all 0.3s;
//   text-align: center;
//   white-space: nowrap;
// }

// .tooltip span {
//   grid-column: 1 / 2;
//   grid-row: 1 / 2;
//   opacity: 0;
//   transition: 0.3s;
// }

// .tooltip span.show {
//   opacity: 1;
// }

// .tooltip-element:hover ~ .tooltip {
//   opacity: 1;
//   pointer-events: all;
// }

// /* When the menu shrinks */

// .hide {
//   transition: opacity 0.3s 0.2s;
// }

// body.shrink nav {
//   width: 5.4rem;
// }

// body.shrink .hide {
//   opacity: 0;
//   pointer-events: none;
//   transition-delay: 0s;
// }

// body.shrink .shrink-btn i {
//   transform: rotate(-180deg);
// }

// body.shrink .sidebar-links h4 {
//   height: 10px;
// }

// body.shrink .account {
//   opacity: 1;
//   pointer-events: all;
//   transition: opacity 0.3s 0.3s, color 0.3s 0s;
// }

// body.shrink .admin-profile {
//   max-width: 0;
//   transition: opacity 0.3s 0s, max-width 0.7s 0s ease-in-out;
// }

// body.shrink .tooltip {
//   display: grid;
// }
</style>
