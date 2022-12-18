<template>
  <b-modal
    id="modal-prevent-closing-edit"
    ref="boardmodal"
    title="인수인계 수정"
    cancel-title="Delete"
    :visible="visible"
    @show="resetModal"
    @hidden="hide"
    @change="change"
    @ok="editReport"
    @cancel="deleteReport"
  >
    <form ref="form" @submit.stop.prevent="editReport">
      <b-form-group label="인덱스 번호" label-for="index-no">
        <b-form-input id="name-input" v-model="id" :state="idState" required />
      </b-form-group>
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
        />
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
      id: '',
      idState: null,
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
    ...mapGetters('Board', { board: 'Board' }),
    dialog(props) {
      return props.openDialog
    },
    infoData() {
      return this.board
    }
  },
  watch: {
    infoData(value) {
      if (value && value.id) {
        this.id = value.id
        this.tName = value.tName
        this.takeoverDate = value.takeoverDate
        this.tTitle = value.tTitle
        this.tContents = value.tContents
      }
      // this.board = { ...value }
      // this.setDefaultValues()
    }
  },
  created() {
    this.board = { ...this.infoData }
    this.actBoardInfo(this.board)
    console.log('???')
  },
  methods: {
    ...mapActions('Board', ['actBoardInsert', 'actBoardInfo', 'actBoardUpdate', 'actBoardDelete']),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.idState = valid
      this.titleState = valid
      this.contentState = valid
      this.nameState = valid
      this.datepickerState = valid
      return valid
    },
    resetModal() {
      this.id = ''
      this.idState = null
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

      // this.$store.dispatch('actUserInsert', this.user) // 입력 실행
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      //////////////////////////////////////////////////////
      // let boardData = {
      //   id: this.id,
      //   tName: this.tName,
      //   takeoverDate: this.takeoverDate,
      //   tTitle: this.tTitle,
      //   tContents: this.tContents
      // }
      // this.$store.dispatch('actBoardInfo', boardData)
      // this.actBoardInfo(boardData)
      // console.log(boardData)

      ////////////////////////////////////////////////////
      let data = {
        id: this.id,
        tName: this.tName,
        takeoverDate: this.takeoverDate,
        tTitle: this.tTitle,
        tContents: this.tContents
      }
      this.$store.dispatch('actBoardInfo', data)
      this.actBoardInfo(data)
      console.log(data)
      // this.$nextTick(() => {
      // this.$emit('closeDialog')
      // this.$bvModal.hide('modal-prevent-closing')
      // })
    },
    editReport() {
      const reportData = {
        id: this.id,
        tName: this.tName,
        takeoverDate: this.takeoverDate,
        tTitle: this.tTitle,
        tContents: this.tContents
      }
      console.log(reportData)
      this.actBoardUpdate(reportData)
      this.$router.go()
    },
    deleteReport() {
      const deleteData = {
        id: this.id,
        tName: this.tName,
        takeoverDate: this.takeoverDate,
        tTitle: this.tTitle,
        tContents: this.tContents
      }
      console.log(deleteData)
      this.actBoardDelete(deleteData)
      alert(`삭제되었습니다!`)
      this.$router.go()
    },
    onSubmit() {
      this.actBoardInsert(this.board)
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
