<template>
  <div>
    <b-row class="justify-content-center mt-5">
      <b-col class="mr-2" cols="10" align="right">
        <b-button variant="success" size="sm" @click="onClickAddNew">글쓰기</b-button>
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
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  }
}
</script>
