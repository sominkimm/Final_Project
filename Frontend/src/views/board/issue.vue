<template>
  <div class="board-content">
    <v-main>
      <b-row class="topbar" style="margin-top: 100px">
        <b-col cols="8" align="right">
          <b-button v-b-modal.modal-prevent-closing class="b-write" size="sm">
            <i class="bx bx-edit"></i>
          </b-button>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
      <b-row class="justify-content-center body-cont">
        <b-col cols="8">
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="작업 보고"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
          >
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="작성자"
                label-for="name-input"
                invalid-feedback="이름을 입력하세요"
                :state="nameState"
              >
                <b-form-input id="name-input" v-model="name" :state="nameState" required />
              </b-form-group>

              <b-form-group
                label="작성일"
                label-for="datepicker-placeholder"
                invalid-feedback="날짜를 선택하세요"
                :state="datepickerState"
              >
                <b-form-datepicker
                  id="datepicker-placeholder"
                  v-model="datepicker"
                  placeholder="날짜를 선택하세요"
                  locale="ko"
                ></b-form-datepicker>
              </b-form-group>

              <b-form-group
                label="제목"
                label-for="title-input"
                invalid-feedback="제목을 입력하세요"
                :state="titleState"
                style="margin-top: 7px"
              >
                <b-form-input id="title-input" v-model="title" :state="titleState" required />
              </b-form-group>
              <b-form-group
                label="내용"
                label-for="content-input"
                invalid-feedback="내용을 입력하세요"
                :state="contentState"
              >
                <b-form-textarea
                  id="content-input"
                  v-model="content"
                  :state="contentState"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                  required
                />
              </b-form-group>
            </form>
          </b-modal>
          <div class="app-body-main-content">
            <section class="service-section">
              <div class="tiles">
                <div v-b-modal.modal-prevent-closing-edit class="tile">
                  <div class="tile-header">
                    <i class="ph-lightning-light"></i>
                    <h3>
                      <span>A</span>
                      <span>aaa</span>
                    </h3>
                  </div>
                  <a href="#">
                    <!-- <span>Go to service</span> -->
                    <span class="icon-button">
                      <i class="bx bx-chevron-right-circle"></i>
                    </span>
                  </a>
                </div>
                <div v-b-modal.modal-prevent-closing-edit class="tile">
                  <div class="tile-header">
                    <i class="ph-fire-simple-light"></i>
                    <h3>
                      <span>B</span>
                      <span>bbb</span>
                    </h3>
                  </div>
                  <a href="#">
                    <!-- <span>Go to service</span> -->
                    <span class="icon-button">
                      <i class="bx bx-chevron-right-circle"></i>
                    </span>
                  </a>
                </div>
                <div v-b-modal.modal-prevent-closing-edit class="tile">
                  <div class="tile-header">
                    <i class="ph-fire-simple-light"></i>
                    <h3>
                      <span>C</span>
                      <span>ccc</span>
                    </h3>
                  </div>
                  <a href="#">
                    <!-- <span>Go to service</span> -->
                    <span class="icon-button">
                      <i class="bx bx-chevron-right-circle"></i>
                    </span>
                  </a>
                </div>
                <div v-b-modal.modal-prevent-closing-edit class="tile">
                  <div class="tile-header">
                    <i class="ph-fire-simple-light"></i>
                    <h3>
                      <span>D</span>
                      <span>ddd</span>
                    </h3>
                  </div>
                  <a href="#">
                    <!-- <span>Go to service</span> -->
                    <span class="icon-button">
                      <i class="bx bx-chevron-right-circle"></i>
                    </span>
                  </a>
                </div>
                <div v-b-modal.modal-prevent-closing-edit class="tile">
                  <div class="tile-header">
                    <i class="ph-fire-simple-light"></i>
                    <h3>
                      <span>E</span>
                      <span>eee</span>
                    </h3>
                  </div>
                  <a href="#">
                    <!-- <span>Go to service</span> -->
                    <span class="icon-button">
                      <i class="bx bx-chevron-right-circle"></i>
                    </span>
                  </a>
                </div>
                <b-modal
                  id="modal-prevent-closing-edit"
                  ref="modal"
                  title="인수인계"
                  @show="resetModal"
                  @hidden="resetModal"
                  @ok="handleOk"
                >
                  <form ref="form" @submit.stop.prevent="handleSubmit">
                    <b-form-group label="No" label-for="index-no">
                      <b-form-input id="name-input" v-model="name" :state="nameState" required />
                    </b-form-group>
                    <b-form-group
                      label="작성자"
                      label-for="name-input"
                      invalid-feedback="이름을 입력하세요"
                      :state="nameState"
                    >
                      <b-form-input id="name-input" v-model="name" :state="nameState" required />
                    </b-form-group>

                    <b-form-group
                      label="작성일"
                      label-for="datepicker-placeholder"
                      invalid-feedback="날짜를 선택하세요"
                      :state="datepickerState"
                    >
                      <b-form-datepicker
                        id="datepicker-placeholder"
                        v-model="datepicker"
                        placeholder="날짜를 선택하세요"
                        locale="ko"
                      ></b-form-datepicker>
                    </b-form-group>

                    <b-form-group
                      label="제목"
                      label-for="title-input"
                      invalid-feedback="제목을 입력하세요"
                      :state="titleState"
                      style="margin-top: 7px"
                    >
                      <b-form-input id="title-input" v-model="title" :state="titleState" required />
                    </b-form-group>
                    <b-form-group
                      label="내용"
                      label-for="content-input"
                      invalid-feedback="내용을 입력하세요"
                      :state="contentState"
                    >
                      <b-form-textarea
                        id="content-input"
                        v-model="content"
                        :state="contentState"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                        required
                      />
                    </b-form-group>
                  </form>
                </b-modal>
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
                      <b-button v-if="value" size="sm" variant="outline-danger" @click="clearDate">
                        Clear date
                      </b-button>
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
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      items: [
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' }
      ],
      name: '',
      nameState: null,
      datepicker: '',
      datepickerState: null,
      title: '',
      titleState: null,
      content: '',
      contentState: null,
      value: null
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.titleState = valid
      this.contentState = valid
      this.nameState = valid
      this.datepickerState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
      this.datepicker = ''
      this.datepickerState = null
      this.title = ''
      this.titleState = null
      this.content = ''
      this.contentState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
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
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.tile {
  padding: 1rem;
  border-radius: 8px;
  background-color: #f4f9fd;
  color: #000000;
  min-height: 150px;
  display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  position: relative;
  transition: 0.25s ease;

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
    text-decoration: none;
    display: flex;
    // align-items: center;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 600;

    .icon-button {
      font-size: 20px;
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

.calendar {
  // position: -webkit-sticky;
  position: fixed;
}
</style>
