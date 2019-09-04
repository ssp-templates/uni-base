export default {
  state: {
    system_info: {},
  },

  mutations: {
    SET_SYSTEM_INFO: (state, system_info) => {
      state.system_info = system_info
    },
  },

  actions: {
    /**
     * 获取系统信息
     *
     * @param commit
     * @returns {Promise<any>}
     * @constructor
     */
    GetSystemInfo({commit}) {
      return new Promise((resolve, reject) => {
        uni.getSystemInfo({
          success: response => {
            let info = response
            let totalTopHeight = 68
            if (info.model) {
              if (info.model.indexOf('iPhone X') !== -1) {
                totalTopHeight = 88
              } else if (info.model.indexOf('iPhone') !== -1) {
                totalTopHeight = 64
              }
            }
            info.totalTopHeight = totalTopHeight
            info.statusBarHeight = info.statusBarHeight
            info.titleBarHeight = totalTopHeight - info.statusBarHeight
            commit('SET_SYSTEM_INFO', info)
            resolve(info)
          },
          fail: error => {
            reject(error)
          },
        })
      })
    },
  },

}
