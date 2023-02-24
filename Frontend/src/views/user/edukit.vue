<template>
  <div class="edukit">
    <div class="overflow-auto table" style="width: 96%">
      <h3>작업 현황</h3>
      <b-table
        id="my-table"
        :items="edukitList"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        :filter-function="filterTable"
        :tbody-tr-class="rowClass"
        style="margin-bottom: 30px"
        show-empty
      >
        <template #cell(pdStartTime)="row">
          {{ row.item.pdStartTime.substring(0, 19).replace('T', ' ') }}
        </template>
        <template #cell(pdEndTime)="row">
          {{ row.item.pdEndTime.substring(0, 19).replace('T', ' ') }}
        </template>
        <template #cell(estopRuntime)="row">
          {{ filterTable(row.item.estopRuntime) }}
        </template>
        <template #cell(estopCleartime)="row">
          {{ filterTable(row.item.estopCleartime) }}
        </template>
      </b-table>
      <!-- :per-page="perPage"
        :current-page="currentPage" -->
      <b-pagination-nav
        v-model="currentPage"
        :link-gen="linkGen"
        :number-of-pages="editrows"
        pills
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
      perPage: 8,
      fields: [
        { key: 'id', label: 'No', sortable: true },
        { key: 'pdStartTime', label: '시작 시간', sortable: true },
        { key: 'pdEndTime', label: '종료 시간' },
        { key: 'firOutput', label: '총 생산량', sortable: true },
        { key: 'thrGoodset', label: '양품 수량', sortable: true },
        { key: 'gappyProduct', label: '불량품 수량', sortable: true },
        { key: 'eStop', label: '비상 정지 여부', sortable: true },
        { key: 'estopRuntime', label: '비상 정지 시작 시간', sortable: true },
        { key: 'estopCleartime', label: '비상 정지 해제 시간' }
      ]
    }
  },
  computed: {
    edukitList() {
      return this.$store.getters.EdukitList
    },
    rows() {
      return this.$store.getters.EdukitList.length
    },
    editrows() {
      var a = this.$store.getters.EdukitList.length
      if (a % this.perPage == 0) {
        a /= this.perPage
      } else {
        a /= this.perPage
        a += 1
      }
      return a
    }
  },
  mounted() {
    this.pagingMethod(this.page)
  },
  created() {
    this.searchEdukitList()
  },
  methods: {
    // 비상정지여부 강조
    rowClass(item) {
      if (item.eStop === 'O') return 'bg-secondary'
    },
    filterTable(r) {
      if (r == null) {
        return null
      } else {
        return r.substring(0, 19).replace('T', ' ')
      }
    },
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
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    estopRuntime() {}
  }
}
</script>

<style lang="scss" scoped>
* {
  color: rgba(255, 255, 255, 0.868);
}

.edukit {
  height: 100vh;
  background-color: #000;
  padding-top: 60px;
  padding-left: 30px;
}

h3 {
  margin-left: 30px;
  margin-bottom: 50px;
}

#my-table {
  text-align: center;
}
</style>
