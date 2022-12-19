<template>
  <div>
    <div class="overflow-auto" style="margin-top: 30px">
      <h3>작업 현황</h3>
      <b-table
        id="my-table"
        :items="edukitList"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        style="margin-bottom: 30px"
        show-empty
      >
        <template #cell(pdStartTime)="row">
          {{ row.item.pdStartTime.substring(0, 19).replace('T', ' ') }}
        </template>
        <template #cell(pdEndTime)="row">
          {{ row.item.pdEndTime.substring(0, 19).replace('T', ' ') }}
        </template>
        <template #cell(eStopRuntime)="row">
          {{ row.item.estopRuntime.substring(0, 19).replace('T', ' ') }}
        </template>
        <template #cell(eStopCleartime)="row">
          {{ row.item.estopCleartime.substring(0, 19).replace('T', ' ') }}
        </template>
      </b-table>
      <!-- :per-page="perPage"
        :current-page="currentPage" -->
      <b-pagination-nav
        v-model="currentPage"
        :link-gen="linkGen"
        :number-of-pages="20"
        pills
        dark
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
        use-router
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ?page=1  , 한 페이지 8개씩
      // perPage: 8,
      // currentPage: 1,
      // pageNum: 0,
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: 'id', label: 'No' },
        { key: 'pdStartTime', label: '시작 시간' },
        { key: 'pdEndTime', label: '종료 시간' },
        { key: 'firOutput', label: '총 생산량' },
        { key: 'thrGoodset', label: '양품 수량' },
        { key: 'gappyProduct', label: '불량품 수량' },
        { key: 'eStop', label: '비상 정지 여부' },
        { key: 'estopRuntime', label: '비상 정지 시작 시간' },
        { key: 'estopCleartime', label: '비상 정지 정지 시간' }
      ]
    }
  },
  computed: {
    edukitList() {
      return this.$store.getters.EdukitList
    },
    rows() {
      return this.$store.getters.EdukitList.length
    }
  },
  mounted() {
    this.pagingMethod(this.page)
  },
  created() {
    this.searchEdukitList()
  },
  methods: {
    handlePageChange(value) {
      this.page = value
    },
    pagingMethod(page) {
      this.listData
    },
    searchEdukitList() {
      this.$store.dispatch('actEdukitList')
    },
    linkGen(pageNum) {
      console.log('page')
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  color: rgba(255, 255, 255, 0.868);
}

#my-table {
  text-align: center;
}
</style>
