// #ifndef MP
import Fly from 'flyio/dist/npm/fly'
// #endif

// #ifdef MP-WEIXIN
import Fly from 'flyio/dist/npm/wx'
// #endif

const service = new Fly

service.config.timeout = 30 * 1000
service.config.baseURL = process.env.NODE_ENV === 'development' ? '' : ''

// 请求拦截器
service.interceptors.request.use(request => {

  uni.showLoading({title: '加载中...'})

  return request
})

// 响应拦截器
service.interceptors.response.use(
  async response => {
    const {errcode, errmsg, errno, data} = response.data

    uni.hideLoading()

    if (errcode !== 0 && (errmsg != '' || typeof errmsg === 'object')) {
      const subCode = errcode, subMessage = errmsg
      if (typeof errmsg === 'string') [subCode, subMessage] = errmsg.split('|')

      uni.showToast({
        title: subMessage ? subMessage : errmsg,
        duration: 5000
      })

    } else {
      return response.data
    }

  },
  error => {
    uni.hideLoading()
    console.log(error)
    uni.showToast({
      title: error.status || error.message || '稍后重试',
      icon: 'none',
      duration: 3 * 1000,
    })
    return Promise.reject(error)
  }
)

export default service