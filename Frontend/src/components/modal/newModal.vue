<template>
  <b-modal
    id="modal-prevent-closing"
    ref="modal"
    title="작업 보고"
    :visible="visible"
    @show="resetModal"
    @hidden="hide"
    @change="change"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group label="작성자" label-for="name-input" invalid-feedback="이름을 입력하세요" :state="nameState">
        <b-form-input id="name-input" v-model="tName" :state="nameState" required />
      </b-form-group>

      <b-form-group
        label="작성일"
        label-for="datepicker-placeholder"
        invalid-feedback="날짜를 선택하세요"
        :state="datepickerState"
      >
        <b-form-datepicker
          id="datepicker-placeholder"
          v-model="takeoverDate"
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
        <b-form-input id="title-input" v-model="tTitle" :state="titleState" required />
      </b-form-group>
      <b-form-group label="내용" label-for="content-input" invalid-feedback="내용을 입력하세요" :state="contentState">
        <b-form-textarea
          id="content-input"
          v-model="tContents"
          :state="contentState"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
          required
        />
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDialog: Boolean
  },
  data() {
    return {
      tName: '',
      nameState: null,
      takeoverDate: '',
      datepickerState: null,
      tTitle: '',
      titleState: null,
      tContents: '',
      contentState: null
    }
  },
  computed: {
    ...mapGetters('User', ['User']),
    dialog(props) {
      return props.openDialog
    }
  },
  created() {
    console.log(this.actUserUpdate())
  },
  methods: {
    ...mapActions('Board', ['actBoardInsert', 'actBoardInfo']),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.titleState = valid
      this.contentState = valid
      this.nameState = valid
      this.datepickerState = valid
      return valid
    },
    resetModal() {
      this.tName = ''
      this.nameState = null
      this.takeoverDate = ''
      this.datepickerState = null
      this.tTitle = ''
      this.titleState = null
      this.tContents = ''
      this.contentState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()

      let data = {
        id: this.User.userid,
        tName: this.tName,
        tTitle: this.tTitle,
        tContents: this.tContents,
        takeoverDate: this.takeoverDate
      }

      this.actBoardInsert(data)
      this.actBoardInfo(data)

      // this.$store.dispatch('actUserInsert', this.user) // 입력 실행
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      this.$nextTick(() => {
        // this.$emit('closeDialog')
        // this.$bvModal.hide('modal-prevent-closing')
      })
    },
    hide() {
      // this.resetModal()
      this.$emit('hide')
    },
    change(visible) {
      this.$emit('change', visible)
    }
  }
}
</script>

<style></style>
