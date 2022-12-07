<template>
  <div>
    <b-row class="justify-content-center mt-5">
      <!-- <b-col class="mr-2" cols="10" align="right">
        <b-button variant="success" size="sm" @click="onClickAddNew">글쓰기</b-button>
      </b-col> -->
      <b-col class="mr-2" cols="10" align="right">
        <b-button v-b-modal.modal-prevent-closing variant="success" size="sm">글쓰기</b-button>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="작업 보고"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group label="제목" label-for="title-input" invalid-feedback="Title is required" :state="titleState">
              <b-form-input id="title-input" v-model="title" :state="titleState" required></b-form-input>
            </b-form-group>
            <b-form-group
              label="내용"
              label-for="content-input"
              invalid-feedback="Content is required"
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
              ></b-form-textarea>
            </b-form-group>
          </form>
        </b-modal>
      </b-col>
      <b-col cols="10" class="mt-3 mb-3">
        <b-table
          id="issue-table"
          striped
          hover
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
        ></b-table>
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      pills
      :per-page="perPage"
      :total-rows="rows"
      aria-controls="issue-table"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      items: [
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' },
        { No: 40, 제목: 'Dickerson', 작성자: 'Macdonald', 등록일시: '' }
      ],
      title: '',
      titleState: null,
      content: '',
      contentState: null
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
      return valid
    },
    resetModal() {
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
    }
  }
}
</script>
