<template>
  <b-modal
    id="modal-prevent-closing-edit"
    ref="modal"
    title="인수인계"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group label="인덱스 번호" label-for="index-no">
        <b-form-input id="name-input" v-model="name" :state="nameState" required />
      </b-form-group>
      <b-form-group label="작성자" label-for="name-input" invalid-feedback="이름을 입력하세요" :state="nameState">
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
      <b-form-group label="내용" label-for="content-input" invalid-feedback="내용을 입력하세요" :state="contentState">
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
</template>

<script>
export default {}
</script>

<style></style>
