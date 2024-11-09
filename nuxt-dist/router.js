import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _475d95fa = () => interopDefault(import('../pages/alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _1d80780e = () => interopDefault(import('../pages/AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _9160c428 = () => interopDefault(import('../pages/evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _23cf4b48 = () => interopDefault(import('../pages/goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _710a4117 = () => interopDefault(import('../pages/goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _4aa5540c = () => interopDefault(import('../pages/goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _0bfb2414 = () => interopDefault(import('../pages/goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _48622c79 = () => interopDefault(import('../pages/goods_presell_detail_base copy.vue' /* webpackChunkName: "pages/goods_presell_detail_base copy" */))
const _3a69596a = () => interopDefault(import('../pages/goods_presell_detail_c2.vue' /* webpackChunkName: "pages/goods_presell_detail_c2" */))
const _491ee646 = () => interopDefault(import('../pages/goods_presell_detail_Catcher-PRO44.vue' /* webpackChunkName: "pages/goods_presell_detail_Catcher-PRO44" */))
const _371ecf9a = () => interopDefault(import('../pages/goods_presell_detail_cb44.vue' /* webpackChunkName: "pages/goods_presell_detail_cb44" */))
const _a65a65f0 = () => interopDefault(import('../pages/goods_presell_detail_cb442.vue' /* webpackChunkName: "pages/goods_presell_detail_cb442" */))
const _3d461f9e = () => interopDefault(import('../pages/goods_presell_detail_cf.vue' /* webpackChunkName: "pages/goods_presell_detail_cf" */))
const _45a932b7 = () => interopDefault(import('../pages/goods_presell_detail_close_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_close_back_pro44" */))
const _6d1de602 = () => interopDefault(import('../pages/goods_presell_detail_crowntip.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip" */))
const _64c83c43 = () => interopDefault(import('../pages/goods_presell_detail_crowntip2.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip2" */))
const _e5594de6 = () => interopDefault(import('../pages/goods_presell_detail_ex10.vue' /* webpackChunkName: "pages/goods_presell_detail_ex10" */))
const _f707fc1a = () => interopDefault(import('../pages/goods_presell_detail_hnd.vue' /* webpackChunkName: "pages/goods_presell_detail_hnd" */))
const _08de229b = () => interopDefault(import('../pages/goods_presell_detail_japan.vue' /* webpackChunkName: "pages/goods_presell_detail_japan" */))
const _24d5123e = () => interopDefault(import('../pages/goods_presell_detail_jp11.vue' /* webpackChunkName: "pages/goods_presell_detail_jp11" */))
const _29db31ff = () => interopDefault(import('../pages/goods_presell_detail_open_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_open_back_pro44" */))
const _00278ea0 = () => interopDefault(import('../pages/goods_presell_detail_pancake_trainer.vue' /* webpackChunkName: "pages/goods_presell_detail_pancake_trainer" */))
const _38e9d5fc = () => interopDefault(import('../pages/goods_presell_detail_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_pro44" */))
const _e42196c0 = () => interopDefault(import('../pages/goods_presell_detail_pro442.vue' /* webpackChunkName: "pages/goods_presell_detail_pro442" */))
const _7e69da5a = () => interopDefault(import('../pages/goods_presell_detail_rb5.vue' /* webpackChunkName: "pages/goods_presell_detail_rb5" */))
const _2a81c62c = () => interopDefault(import('../pages/goods_presell_detail - 副本.vue' /* webpackChunkName: "pages/goods_presell_detail - 副本" */))
const _5658ace1 = () => interopDefault(import('../pages/goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _0d9f55c6 = () => interopDefault(import('../pages/goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _36889d1a = () => interopDefault(import('../pages/goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _2c2a172e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4f1673da = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _03a9d882 = () => interopDefault(import('../pages/mobile_login/index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _260b3e62 = () => interopDefault(import('../pages/order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _e1506fdc = () => interopDefault(import('../pages/order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _a076f2f4 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _5841c428 = () => interopDefault(import('../pages/refund.vue' /* webpackChunkName: "pages/refund" */))
const _51ab4eff = () => interopDefault(import('../pages/refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _1f84bfac = () => interopDefault(import('../pages/rule.vue' /* webpackChunkName: "pages/rule" */))
const _29dbc758 = () => interopDefault(import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _3bbdd60a = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _18ea9984 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _4ea944cd = () => interopDefault(import('../pages/user/address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _0cb0ff48 = () => interopDefault(import('../pages/user/balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _cdfbcad4 = () => interopDefault(import('../pages/user/collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _7b4888a8 = () => interopDefault(import('../pages/user/messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _6acb9936 = () => interopDefault(import('../pages/user/myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _9a58af10 = () => interopDefault(import('../pages/user/orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _1f3da195 = () => interopDefault(import('../pages/user/userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _220b3807 = () => interopDefault(import('../pages/wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _20435152 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5384c678 = () => interopDefault(import('../pages/goods_detail/_id/index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))

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
    component: _475d95fa,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _1d80780e,
    name: "AppChat"
  }, {
    path: "/evaluation",
    component: _9160c428,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _23cf4b48,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _710a4117,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _4aa5540c,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _0bfb2414,
    name: "goods_presell_detail"
  }, {
    path: "/goods_presell_detail_base%20copy",
    component: _48622c79,
    name: "goods_presell_detail_base copy"
  }, {
    path: "/goods_presell_detail_c2",
    component: _3a69596a,
    name: "goods_presell_detail_c2"
  }, {
    path: "/goods_presell_detail_Catcher-PRO44",
    component: _491ee646,
    name: "goods_presell_detail_Catcher-PRO44"
  }, {
    path: "/goods_presell_detail_cb44",
    component: _371ecf9a,
    name: "goods_presell_detail_cb44"
  }, {
    path: "/goods_presell_detail_cb442",
    component: _a65a65f0,
    name: "goods_presell_detail_cb442"
  }, {
    path: "/goods_presell_detail_cf",
    component: _3d461f9e,
    name: "goods_presell_detail_cf"
  }, {
    path: "/goods_presell_detail_close_back_pro44",
    component: _45a932b7,
    name: "goods_presell_detail_close_back_pro44"
  }, {
    path: "/goods_presell_detail_crowntip",
    component: _6d1de602,
    name: "goods_presell_detail_crowntip"
  }, {
    path: "/goods_presell_detail_crowntip2",
    component: _64c83c43,
    name: "goods_presell_detail_crowntip2"
  }, {
    path: "/goods_presell_detail_ex10",
    component: _e5594de6,
    name: "goods_presell_detail_ex10"
  }, {
    path: "/goods_presell_detail_hnd",
    component: _f707fc1a,
    name: "goods_presell_detail_hnd"
  }, {
    path: "/goods_presell_detail_japan",
    component: _08de229b,
    name: "goods_presell_detail_japan"
  }, {
    path: "/goods_presell_detail_jp11",
    component: _24d5123e,
    name: "goods_presell_detail_jp11"
  }, {
    path: "/goods_presell_detail_open_back_pro44",
    component: _29db31ff,
    name: "goods_presell_detail_open_back_pro44"
  }, {
    path: "/goods_presell_detail_pancake_trainer",
    component: _00278ea0,
    name: "goods_presell_detail_pancake_trainer"
  }, {
    path: "/goods_presell_detail_pro44",
    component: _38e9d5fc,
    name: "goods_presell_detail_pro44"
  }, {
    path: "/goods_presell_detail_pro442",
    component: _e42196c0,
    name: "goods_presell_detail_pro442"
  }, {
    path: "/goods_presell_detail_rb5",
    component: _7e69da5a,
    name: "goods_presell_detail_rb5"
  }, {
    path: "/goods_presell_detail%20-%20%E5%89%AF%E6%9C%AC",
    component: _2a81c62c,
    name: "goods_presell_detail - 副本"
  }, {
    path: "/goods_search",
    component: _5658ace1,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _0d9f55c6,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _36889d1a,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _2c2a172e,
    name: "login"
  }, {
    path: "/logistics",
    component: _4f1673da,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _03a9d882,
    name: "mobile_login"
  }, {
    path: "/order_confirm",
    component: _260b3e62,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _e1506fdc,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _a076f2f4,
    name: "payment"
  }, {
    path: "/refund",
    component: _5841c428,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _51ab4eff,
    name: "refund_goods"
  }, {
    path: "/rule",
    component: _1f84bfac,
    name: "rule"
  }, {
    path: "/shoppingCart",
    component: _29dbc758,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _3bbdd60a,
    children: [{
      path: "",
      component: _18ea9984,
      name: "user"
    }, {
      path: "address_list",
      component: _4ea944cd,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _0cb0ff48,
      name: "user-balance"
    }, {
      path: "collect",
      component: _cdfbcad4,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _7b4888a8,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _6acb9936,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _9a58af10,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _1f3da195,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _220b3807,
    name: "wxPay"
  }, {
    path: "/",
    component: _20435152,
    name: "index"
  }, {
    path: "/goods_detail/:id",
    component: _5384c678,
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
