import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1fc511a0 = () => interopDefault(import('../pages/alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _25c7bd13 = () => interopDefault(import('../pages/AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _5ab652dc = () => interopDefault(import('../pages/evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _3f2483ee = () => interopDefault(import('../pages/goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _e7410c86 = () => interopDefault(import('../pages/goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _0cf091a6 = () => interopDefault(import('../pages/goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _5476453a = () => interopDefault(import('../pages/goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _081a961f = () => interopDefault(import('../pages/goods_presell_detail_base copy.vue' /* webpackChunkName: "pages/goods_presell_detail_base copy" */))
const _29c042f8 = () => interopDefault(import('../pages/goods_presell_detail_c2.vue' /* webpackChunkName: "pages/goods_presell_detail_c2" */))
const _602098fa = () => interopDefault(import('../pages/goods_presell_detail_Catcher-PRO44.vue' /* webpackChunkName: "pages/goods_presell_detail_Catcher-PRO44" */))
const _d76f1398 = () => interopDefault(import('../pages/goods_presell_detail_cb44.vue' /* webpackChunkName: "pages/goods_presell_detail_cb44" */))
const _16440ca4 = () => interopDefault(import('../pages/goods_presell_detail_cb442.vue' /* webpackChunkName: "pages/goods_presell_detail_cb442" */))
const _2406b690 = () => interopDefault(import('../pages/goods_presell_detail_cf.vue' /* webpackChunkName: "pages/goods_presell_detail_cf" */))
const _c3487b5e = () => interopDefault(import('../pages/goods_presell_detail_close_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_close_back_pro44" */))
const _d45c52ce = () => interopDefault(import('../pages/goods_presell_detail_crowntip.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip" */))
const _2480a5e9 = () => interopDefault(import('../pages/goods_presell_detail_crowntip2.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip2" */))
const _2b0600b2 = () => interopDefault(import('../pages/goods_presell_detail_ex10.vue' /* webpackChunkName: "pages/goods_presell_detail_ex10" */))
const _2ad3bfce = () => interopDefault(import('../pages/goods_presell_detail_hnd.vue' /* webpackChunkName: "pages/goods_presell_detail_hnd" */))
const _50e94f41 = () => interopDefault(import('../pages/goods_presell_detail_japan.vue' /* webpackChunkName: "pages/goods_presell_detail_japan" */))
const _4abf1d7b = () => interopDefault(import('../pages/goods_presell_detail_jp11.vue' /* webpackChunkName: "pages/goods_presell_detail_jp11" */))
const _09a971b6 = () => interopDefault(import('../pages/goods_presell_detail_open_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_open_back_pro44" */))
const _5d10b874 = () => interopDefault(import('../pages/goods_presell_detail_pancake_trainer.vue' /* webpackChunkName: "pages/goods_presell_detail_pancake_trainer" */))
const _2b9641a8 = () => interopDefault(import('../pages/goods_presell_detail_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_pro44" */))
const _47499cba = () => interopDefault(import('../pages/goods_presell_detail_pro442.vue' /* webpackChunkName: "pages/goods_presell_detail_pro442" */))
const _36f80f00 = () => interopDefault(import('../pages/goods_presell_detail_rb5.vue' /* webpackChunkName: "pages/goods_presell_detail_rb5" */))
const _f0a92674 = () => interopDefault(import('../pages/goods_presell_detail - 副本.vue' /* webpackChunkName: "pages/goods_presell_detail - 副本" */))
const _1d7b57f2 = () => interopDefault(import('../pages/goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _602ad940 = () => interopDefault(import('../pages/goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _7f03be40 = () => interopDefault(import('../pages/goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _22726c03 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0ae2e0ad = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _11284665 = () => interopDefault(import('../pages/mobile_login/index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _a174c32e = () => interopDefault(import('../pages/order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _2a416f38 = () => interopDefault(import('../pages/order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _376700c0 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _30a93fce = () => interopDefault(import('../pages/refund.vue' /* webpackChunkName: "pages/refund" */))
const _26d613b6 = () => interopDefault(import('../pages/refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _627a265c = () => interopDefault(import('../pages/rule.vue' /* webpackChunkName: "pages/rule" */))
const _76752304 = () => interopDefault(import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _dd417bbe = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _0edfebe4 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _57882567 = () => interopDefault(import('../pages/user/address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _b0cab324 = () => interopDefault(import('../pages/user/balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _33ebc1bc = () => interopDefault(import('../pages/user/collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _e3748964 = () => interopDefault(import('../pages/user/messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _2d16d6d0 = () => interopDefault(import('../pages/user/myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _39f01e1e = () => interopDefault(import('../pages/user/orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _7bafe0af = () => interopDefault(import('../pages/user/userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _5a92afa1 = () => interopDefault(import('../pages/wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _58cac8ec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _69bc361e = () => interopDefault(import('../pages/goods_detail/_id/index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alipay",
    component: _1fc511a0,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _25c7bd13,
    name: "AppChat"
  }, {
    path: "/evaluation",
    component: _5ab652dc,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _3f2483ee,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _e7410c86,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _0cf091a6,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _5476453a,
    name: "goods_presell_detail"
  }, {
    path: "/goods_presell_detail_base%20copy",
    component: _081a961f,
    name: "goods_presell_detail_base copy"
  }, {
    path: "/goods_presell_detail_c2",
    component: _29c042f8,
    name: "goods_presell_detail_c2"
  }, {
    path: "/goods_presell_detail_Catcher-PRO44",
    component: _602098fa,
    name: "goods_presell_detail_Catcher-PRO44"
  }, {
    path: "/goods_presell_detail_cb44",
    component: _d76f1398,
    name: "goods_presell_detail_cb44"
  }, {
    path: "/goods_presell_detail_cb442",
    component: _16440ca4,
    name: "goods_presell_detail_cb442"
  }, {
    path: "/goods_presell_detail_cf",
    component: _2406b690,
    name: "goods_presell_detail_cf"
  }, {
    path: "/goods_presell_detail_close_back_pro44",
    component: _c3487b5e,
    name: "goods_presell_detail_close_back_pro44"
  }, {
    path: "/goods_presell_detail_crowntip",
    component: _d45c52ce,
    name: "goods_presell_detail_crowntip"
  }, {
    path: "/goods_presell_detail_crowntip2",
    component: _2480a5e9,
    name: "goods_presell_detail_crowntip2"
  }, {
    path: "/goods_presell_detail_ex10",
    component: _2b0600b2,
    name: "goods_presell_detail_ex10"
  }, {
    path: "/goods_presell_detail_hnd",
    component: _2ad3bfce,
    name: "goods_presell_detail_hnd"
  }, {
    path: "/goods_presell_detail_japan",
    component: _50e94f41,
    name: "goods_presell_detail_japan"
  }, {
    path: "/goods_presell_detail_jp11",
    component: _4abf1d7b,
    name: "goods_presell_detail_jp11"
  }, {
    path: "/goods_presell_detail_open_back_pro44",
    component: _09a971b6,
    name: "goods_presell_detail_open_back_pro44"
  }, {
    path: "/goods_presell_detail_pancake_trainer",
    component: _5d10b874,
    name: "goods_presell_detail_pancake_trainer"
  }, {
    path: "/goods_presell_detail_pro44",
    component: _2b9641a8,
    name: "goods_presell_detail_pro44"
  }, {
    path: "/goods_presell_detail_pro442",
    component: _47499cba,
    name: "goods_presell_detail_pro442"
  }, {
    path: "/goods_presell_detail_rb5",
    component: _36f80f00,
    name: "goods_presell_detail_rb5"
  }, {
    path: "/goods_presell_detail%20-%20%E5%89%AF%E6%9C%AC",
    component: _f0a92674,
    name: "goods_presell_detail - 副本"
  }, {
    path: "/goods_search",
    component: _1d7b57f2,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _602ad940,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _7f03be40,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _22726c03,
    name: "login"
  }, {
    path: "/logistics",
    component: _0ae2e0ad,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _11284665,
    name: "mobile_login"
  }, {
    path: "/order_confirm",
    component: _a174c32e,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _2a416f38,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _376700c0,
    name: "payment"
  }, {
    path: "/refund",
    component: _30a93fce,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _26d613b6,
    name: "refund_goods"
  }, {
    path: "/rule",
    component: _627a265c,
    name: "rule"
  }, {
    path: "/shoppingCart",
    component: _76752304,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _dd417bbe,
    children: [{
      path: "",
      component: _0edfebe4,
      name: "user"
    }, {
      path: "address_list",
      component: _57882567,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _b0cab324,
      name: "user-balance"
    }, {
      path: "collect",
      component: _33ebc1bc,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _e3748964,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _2d16d6d0,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _39f01e1e,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _7bafe0af,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _5a92afa1,
    name: "wxPay"
  }, {
    path: "/",
    component: _58cac8ec,
    name: "index"
  }, {
    path: "/goods_detail/:id",
    component: _69bc361e,
    name: "goods_detail-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
