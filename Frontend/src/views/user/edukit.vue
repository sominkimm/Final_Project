<template>
  <div>
    <div class="overflow-auto">
      <h3>작업 현황</h3>
      <b-table id="my-table" striped hover :items="edukitList" :fields="fields">
        <!-- <template #cell(id)="data">
          {{ data.id + 1 }}
        </template>
        <template #cell(pdStartTime)="row">
          {{ row.item.pdStartTime.substring(0, 10) }}
        </template>
        <template #cell(pdEndTime)="row">
          {{ row.item.pdEndTime.substring(0, 10) }}
        </template>
        <template #cell(eStopRuntime)="row">
          {{ row.item.eStopRuntime.substring(0, 10) }}
        </template>
        <template #cell(eStopCleartime)="row">
          {{ row.item.eStopCleartime.substring(0, 10) }}
        </template>
        <template #cell()="data">
          <i>{{ data.value }}</i>
        </template> -->
      </b-table>
      <!-- :per-page="perPage"
        :current-page="currentPage" -->
      <!-- <template #cell(createdAt)="row">
          {{ row.item.createdAt.substring(0, 10) }}
        </template> -->
      <b-pagination-nav
        :link-gen="linkGen"
        pills
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
        use-router
      ></b-pagination-nav>
      <!-- :number-of-pages="10" -->
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      // ?page=1  , 한 페이지 8개씩
      // perPage: 8,
      // currentPage: 1,
      // pageNum: 0,
      fields: [
        { key: 'id', label: 'No' },
        { key: 'pdStartTime', label: '시작 시간' },
        { key: 'pdEndTime', label: '종료 시간' },
        { key: 'firOutput', label: '총 생산량' },
        { key: 'thrGoodset', label: '양품 수량' },
        { key: 'gappyProduct', label: '불량품 수량' },
        { key: 'eStop', label: '비상 정지 여부' },
        { key: 'eStopRuntime', label: '비상 정지 시작 시간' },
        { key: 'eStopCleartime', label: '비상 정지 정지 시간' }
      ]
    }
  },
  computed: {
    edukitList() {
      return this.$store.getters.EdukitList
    }
  },
  created() {
    this.searchEdukitList()
  },
  methods: {
    searchEdukitList() {
      this.$store.dispatch('actEdukitList')
    }
  }
}
</script>

<style lang="scss" scoped>
#my-table {
  text-align: center;
}
</style>
