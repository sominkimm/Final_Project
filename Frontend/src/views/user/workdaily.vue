<template>
  <div>
    <div class="overflow-auto">
      <b-table id="my-table" striped hover :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      items: [
        {
          No: 1,
          시작_시간: '2022-12-17 19:00:10',
          종료_시간: '2022-12-17 22:00:10',
          총_생산량: '20',
          양품_수량: '10',
          불량품_수량: '20',
          비상_정지_여부: 'O',
          비상_정지_시작_시간: '2022-12-17 19:20:10',
          비상_정지_정지_시간: '2022-12-17 19:30:10'
        },
        {
          No: 2,
          시작_시간: '2022-12-17 19:00:10',
          종료_시간: '2022-12-17 22:00:10',
          총_생산량: '20',
          양품_수량: '10',
          불량품_수량: '20',
          비상_정지_여부: 'O',
          비상_정지_시작_시간: '2022-12-17 19:20:10',
          비상_정지_정지_시간: '2022-12-17 19:30:10'
        },
        {
          No: 2,
          시작_시간: '2022-12-17 19:00:10',
          종료_시간: '2022-12-17 22:00:10',
          총_생산량: '20',
          양품_수량: '10',
          불량품_수량: '20',
          비상_정지_여부: 'O',
          비상_정지_시작_시간: '2022-12-17 19:20:10',
          비상_정지_정지_시간: '2022-12-17 19:30:10'
        },
        {
          No: 2,
          시작_시간: '2022-12-17 19:00:10',
          종료_시간: '2022-12-17 22:00:10',
          총_생산량: '20',
          양품_수량: '10',
          불량품_수량: '20',
          비상_정지_여부: 'O',
          비상_정지_시작_시간: '2022-12-17 19:20:10',
          비상_정지_정지_시간: '2022-12-17 19:30:10'
        }
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

<style lang="scss" scoped>
#my-table {
  text-align: center;
}
</style>
