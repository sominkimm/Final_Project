<template>
  <div class="board-content">
    <Sidebar />
    <b-row class="topbar" style="margin-top: 100px">
      <b-col cols="8" align="right">
        <!-- <b-button v-b-modal.modal-prevent-closing class="b-write" size="sm">
          <i class="bx bx-edit"></i>
        </b-button> -->
        <b-button class="b-write" size="sm" @click="openNewModal">
          <i class="bx bx-edit"></i>
        </b-button>
        <!-- <newModal :open-dialog="" :schedule-list="" @closeDialog=""></newModal> -->
      </b-col>
      <b-col cols="4"></b-col>
    </b-row>
    <b-row class="justify-content-center body-cont">
      <b-col cols="8">
        <div class="app-body-main-content">
          <section class="service-section">
            <div class="tiles">
              <div v-for="(item, index) in BoardList" :key="index" class="tile" @click="openBoardModal(item)">
                <div class="tile-header">
                  <h3>
                    <div>{{ item.tTitle }}</div>
                    <div>{{ item.tName }}</div>
                  </h3>
                </div>
                <!-- <a href="#" @click="openBoardModal(item)">
                  <div class="icon-button">
                    <i class="bx bx-chevron-right-circle"></i>
                  </div>
                </a> -->
              </div>
            </div>
          </section>
        </div>
      </b-col>
      <b-col class="mt-4" cols="4">
        <div class="app-body-sidebar">
          <section class="payment-section">
            <div class="payments">
              <div class="payment">
                <b-calendar v-model="value" value-as-date locale="ko" class="calendar">
                  <div class="d-flex" dir="ltr">
                    <b-button v-if="value" size="sm" variant="outline-danger" @click="clearDate"> Clear date </b-button>
                    <b-button size="sm" variant="outline-primary" class="ml-auto" @click="setToday">
                      Set Today
                    </b-button>
                  </div>
                </b-calendar>
              </div>
            </div>
          </section>
        </div>
      </b-col>
    </b-row>
    <!-- <b-pagination
      v-model="currentPage"
      pills
      :per-page="perPage"
      :total-rows="rows"
      aria-controls="issue-table"
      align="center"
    /> -->
    <newModal v-model="detailsVisible" @hide="closeStatus"></newModal>
    <boardModal v-model="boardModalVisible" :selected-item="selectedItem" @hide="closeBModalStatus"></boardModal>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import newModal from '@/components/modal/newModal.vue'
import boardModal from '@/components/modal/boardModal.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Sidebar,
    newModal,
    boardModal
  },
  data() {
    return {
      detailsVisible: false,
      boardModalVisible: false,
      value: null,
      form: '',
      selectedItem: null
      // tName: '',
      // takeoverDate: ''
    }
  },
  computed: {
    ...mapGetters('Board', { board: 'Board', boardList: 'BoardList' }),
    rows() {
      return this.items.length
    },
    BoardList() {
      return this.board
      // return this.boardList
    },
    insertedResult() {
      // return this.BoardInsertedResult
      return this.$store.getters.BoardInsertedResult
    }
  },
  watch: {
    insertedResult(value) {
      // 등록 후 처리

      if (value !== null) {
        if (value > 0) {
          // 등록이 성공한 경우

          // 1. 메세지 출력
          this.$bvToast.toast('등록 되었습니다.', {
            title: 'SUCCESS',
            variant: 'success',
            solid: true
          })

          // 2. 리스트 재 검색
          // this.searchUserList()
        } else {
          // 등록이 실패한 경우
          this.$bvToast.toast('등록이 실패하였습니다.', {
            title: 'ERROR',
            variant: 'danger',
            solid: true
          })
        }
      }
    },
    // 모달이 열린 이후에 감지됨
    infoData(value) {
      this.user = { ...value }

      this.setDefaultValues() // 기본값 세팅
    }
  },
  created() {
    this.actBoardList()
  },
  methods: {
    ...mapActions('Board', ['actBoardInputMode', 'actBoardInit', 'actBoardList']),
    openNewModal() {
      this.detailsVisible = true
      // this.$store.dispatch('actBoardInputMode', 'insert')
      // this.actBoardInputMode('insert')
      // 2. 상세정보 초기화
      this.$store.dispatch('actBoardInit')
      // this.actBoardInit()
      // 3. 모달 출력
      this.$bvModal.show('modal-user-inform')
    },
    openBoardModal(val) {
      // console.log('val : ', val)
      this.actBoardList(val)
      this.boardModalVisible = true
    },
    closeStatus() {
      this.detailsVisible = false
    },
    closeBModalStatus() {
      this.boardModalVisible = false
    },
    setToday() {
      const now = new Date()
      this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    },
    clearDate() {
      this.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.b-row {
  display: flex;
  flex-direction: row;
}
.b-write {
  // align-items: flex-end;
  background: #cce8db;
  border: 1px solid #cce8db;
  color: #fff;
  border-radius: 50%;
  font-size: 20px;
}
.tiles {
  display: grid;
  // column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 1.25rem;
  padding-left: 80px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.tile {
  padding: 1rem;
  border-radius: 8px;
  background-color: #fdfdfe;
  color: #000000;
  min-height: 150px;
  display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  position: relative;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  &:focus-within {
    box-shadow: 0 0 0 4px #c1d4e3;
  }

  &:nth-child(2) {
    // background-color: #beb4d6;
    &:focus-within {
      box-shadow: 0 0 0 4px #beb4d6;
    }
  }
  &:nth-child(3) {
    // background-color: #fadae2;
    &:focus-within {
      box-shadow: 0 0 0 4px #fadae2;
    }
  }
  a {
    position: relative;
    text-decoration: none;
    // display: flex;
    // align-items: center;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;

    .icon-button {
      position: absolute;
      display: flex;
      float: right;
      font-size: 40px;
      color: #000;
      border-color: inherit;
      &:hover,
      &:focus {
        background-color: transparent;
        i {
          transform: none;
        }
      }
    }

    &:focus {
      box-shadow: none;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
.tile:focus {
  outline: 0;
}
.tile-header {
  display: flex;
  align-items: center;
  i {
    font-size: 2.5em;
  }

  h3 {
    display: flex;
    flex-direction: column;
    line-height: 1.375;
    margin-left: 0.5rem;
    span:first-child {
      font-weight: 600;
    }

    span:last-child {
      font-size: 0.825em;
      font-weight: 200;
    }
  }
}

.service-section {
  & > h2 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
}

.service-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * + * {
    margin-left: 1.25rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
}

.service-section-footer {
  color: #969593;
  margin-top: 1rem;
}
.payments {
  display: flex;
  // align-items: center;
  padding: 0 10px;
  // justify-content: center;
  min-height: 100vh;
}
// .tiles .icon-button {
//   margin-left: 350px;
// }
.calendar {
  // position: -webkit-sticky;
  position: fixed;
}
</style>
