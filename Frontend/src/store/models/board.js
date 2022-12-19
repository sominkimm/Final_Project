import api from '../apiUtil'

// 초기값 선언
// 보드 DB랑 일치 시키자
const stateInit = {
  Board: {
    id: '',
    tName: '',
    tTitle: '',
    tContents: '',
    takeoverDate: ''
  }
}

export default {
  namespaced: true,
  state: {
    BoardList: [],
    Board: { ...stateInit.Board },
    InsertedResult: null,
    UpdatedResult: null,
    DeletedResult: null,
    InputMode: null
  },
  getters: {
    BoardList: state => state.BoardList,
    Board: state => state.Board,
    BoardInsertedResult: state => state.InsertedResult,
    BoardUpdatedResult: state => state.UpdatedResult,
    BoardDeletedResult: state => state.DeletedResult,
    BoardInputMode: state => state.InputMode
  },
  mutations: {
    setBoardList(state, data) {
      console.log('setBoardList : ', data)
      state.BoardList = data
    },
    setBoard(state, data) {
      state.Board = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    },
    setUpdatedResult(state, data) {
      state.UpdatedResult = data
    },
    setDeletedResult(state, data) {
      state.DeletedResult = data
    },
    setInputMode(state, data) {
      state.InputMode = data
    }
  },
  actions: {
    // 리스트 조회
    actBoardList(context, payload) {
      /* RestAPI 호출 */
      api
        .get('/serverApi/takeovers', { params: payload })
        .then(response => {
          const BoardList = response && response.data && response.data.rows
          context.commit('setBoardList', BoardList)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('BoardList.error', error)
          context.commit('setBoardList', [])
        })
    },
    // 등록
    actBoardInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)
      /* RestAPI 호출 */
      api
        .post(`/serverApi/takeovers/reg`, payload)
        .then(response => {
          const insertedResult = response && response.data && response.data.id
          context.commit('setInsertedResult', insertedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('BoardInsert.error', error)
          context.commit('setInsertedResult', -1)
        })
    },
    // 초기화
    actBoardInit(context, payload) {
      context.commit('setBoard', { ...stateInit.Board })
    },
    // 입력모드
    actBoardInputMode(context, payload) {
      context.commit('setInputMode', payload)
    },
    // 상세정보 조회
    actBoardInfo(context, payload) {
      // 상태값 초기화
      console.log('actBoardInfo start')
      context.commit('setBoard', { ...stateInit.Board })

      /* RestAPI 호출 */
      api
        .get(`/serverApi/takeovers/${payload}`)
        .then(response => {
          const Board = response && response.data
          // && response.data.id
          context.commit('setBoard', Board)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('BoardInfo.error', error)
          context.commit('setBoard', -1)
        })
    },
    // 수정
    actBoardUpdate(context, payload) {
      // 상태값 초기화
      context.commit('setUpdatedResult', null)
      /* RestAPI 호출 */
      api
        .put(`/serverApi/takeovers/${payload.id}`, payload)
        .then(response => {
          const updatedResult = response && response.data && response.data.updatedCount
          context.commit('setUpdatedResult', updatedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('BoardUpdate.error', error)
          context.commit('setUpdatedResult', -1)
        })
    },
    // 삭제
    actBoardDelete(context, payload) {
      // 상태값 초기화
      context.commit('setDeletedResult', null)
      /* RestAPI 호출 */
      api
        .delete(`/serverApi/takeovers/${payload.id}`)
        .then(response => {
          const deletedResult = response && response.data && response.data.deletedCount
          context.commit('setDeletedResult', deletedResult)
        })
        .catch(error => {
          // 에러인 경우 처리
          console.error('BoardDelete.error', error)
          context.commit('setDeletedResult', -1)
        })
    }
  }
}
