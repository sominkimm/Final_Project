import api from '../apiUtil'

export default {
  state: {
    EdukitList: []
  },
  getters: {
    EdukitList: state => state.EdukitList
  },
  mutations: {
    setEdukitList(state, data) {
      state.EdukitList = data
    }
  },
  actions: {
    // 에듀킷 리스트 조회
    actEdukitList(context, payload) {
      const edukitList = [
        api.get('/serverApi/edukit').then(response => {
          const edukitList = response && response.data
          context.commit('setEdukitList', edukitList)
        })
      ]
      context.commit('setEdukitList', edukitList)
    }
  }
}
// 초기값 선언
// edukit DB랑 일치시키기
// const stateInit = {
//   Edukit: {
//     id: '',
//     pdStartTime: '',
//     pdEndTime: '',
//     firOutput: '',
//     thrGoodset: '',
//     gappyProduct: '',
//     eStop: '',
//     eStopRuntime: '',
//     eStopCleartime: ''
//   }
// }

// export default {
//   namespaced: true,
//   state: {
//     EdukitList: [],
//     Edukit: { ...stateInit.Edukit },
//     InsertedResult: null,
//     UpdatedResult: null,
//     DeletedResult: null,
//     InputMode: null
//   },
//   getters: {
//     EdukitList: state => state.EdukitList,
//     Edukit: state => state.Edukit,
//     EdukitInsertedResult: state => state.InsertedResult,
//     EdukitUpdatedResult: state => state.UpdatedResult,
//     EdukitDeletedResult: state => state.DeletedResult,
//     EdukitInputMode: state => state.InputMode
//   },
//   mutations: {
//     setEdukitList(state, data) {
//       state.EdukitList = data
//     },
//     setEdukit(state, data) {
//       state.Edukit = data
//     },
//     setInsertedResult(state, data) {
//       state.InsertedResult = data
//     },
//     setUpdatedResult(state, data) {
//       state.UpdatedResult = data
//     },
//     setDeletedResult(state, data) {
//       state.DeletedResult = data
//     },
//     setInputMode(state, data) {
//       state.InputMode = data
//     }
//   },
//   actions: {
//     // 리스트 조회
//     actEdukitList(context, payload) {
//       /* RestAPI 호출 */
//       api
//         .get('/serverApi/edukit', { params: payload })
//         .then(response => {
//           // pages=${payload.id}
//           //   const EdukitList = response && response.data && response.data.rows
//           const EdukitList = response && response.data && response.data.rows
//           context.commit('setEdukitList', EdukitList)
//         })
//         .catch(error => {
//           console.error('EdukitList.error', error)
//           context.commit('setEdukitList', [])
//         })
//     },
//     actEdukitInit(context, payload) {
//       context.commit('setEdukit', { ...stateInit.Edukit })
//     },
//     actEdukitInfo(context, payload) {
//       context.commit('setEdukit', { ...stateInit.Edukit })
//       api
//         .get(`/serverApi/users/${payload}`)
//         .then(response => {
//           const edukit = response && response.data
//           context.commit('setEdukit', edukit)
//         })
//         .catch(error => {
//           console.error('EdukitInfo.error', error)
//           context.commit('setEdukit', -1)
//         })
//     }
//     // 상세정보 조회
//     // actEdukitInfo(context, payload) {
//     //   // 상태값 초기화
//     //   context.commit('setEdukit', { ...stateInit.Edukit })

//     //   /* RestAPI 호출 */
//     //   api
//     //     .get(`/serverApi/${payload}`)
//     //     .then(response => {
//     //       const user = response && response.data
//     //       context.commit('setEdukit', user)
//     //     })
//     //     .catch(error => {
//     //       // 에러인 경우 처리
//     //       console.error('EdukitInfo.error', error)
//     //       context.commit('setEdukit', -1)
//     //     })
//     // }
//     /* 테스트 데이터 세팅 */
//     /*
//         setTimeout(() => {
//           const deletedResult = 1
//           context.commit('setDeletedResult', deletedResult)
//         }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.
//         */

//     /* RestAPI 호출 */
//     //     api
//     //       .delete(`/serverApi/users/${payload}`)
//     //       .then(response => {
//     //         const deletedResult = response && response.data && response.data.deletedCount
//     //         context.commit('setDeletedResult', deletedResult)
//     //       })
//     //       .catch(error => {
//     //         // 에러인 경우 처리
//     //         console.error('BoardDelete.error', error)
//     //         context.commit('setDeletedResult', -1)
//     //       })
//     //   }
//   }
// }
