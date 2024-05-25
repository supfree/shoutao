import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad66b27e = () => interopDefault(import('../pages/alipay.vue' /* webpackChunkName: "pages/alipay" */))
const _659a67dc = () => interopDefault(import('../pages/AppChat.vue' /* webpackChunkName: "pages/AppChat" */))
const _762af333 = () => interopDefault(import('../pages/evaluation.vue' /* webpackChunkName: "pages/evaluation" */))
const _3aaabee2 = () => interopDefault(import('../pages/goods_cate.vue' /* webpackChunkName: "pages/goods_cate" */))
const _2fe5965e = () => interopDefault(import('../pages/goods_list.vue' /* webpackChunkName: "pages/goods_list" */))
const _fea3b536 = () => interopDefault(import('../pages/goods_presell.vue' /* webpackChunkName: "pages/goods_presell" */))
const _6fddcc9b = () => interopDefault(import('../pages/goods_presell_detail.vue' /* webpackChunkName: "pages/goods_presell_detail" */))
const _53ad1840 = () => interopDefault(import('../pages/goods_presell_detail_base copy.vue' /* webpackChunkName: "pages/goods_presell_detail_base copy" */))
const _0039e0fa = () => interopDefault(import('../pages/goods_presell_detail_c2.vue' /* webpackChunkName: "pages/goods_presell_detail_c2" */))
const _2c423d24 = () => interopDefault(import('../pages/goods_presell_detail_Catcher-PRO44.vue' /* webpackChunkName: "pages/goods_presell_detail_Catcher-PRO44" */))
const _f5f9391a = () => interopDefault(import('../pages/goods_presell_detail_cb44.vue' /* webpackChunkName: "pages/goods_presell_detail_cb44" */))
const _1b80b44f = () => interopDefault(import('../pages/goods_presell_detail_cb442.vue' /* webpackChunkName: "pages/goods_presell_detail_cb442" */))
const _02bfd5b7 = () => interopDefault(import('../pages/goods_presell_detail_cf.vue' /* webpackChunkName: "pages/goods_presell_detail_cf" */))
const _4759c910 = () => interopDefault(import('../pages/goods_presell_detail_close_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_close_back_pro44" */))
const _ae73e750 = () => interopDefault(import('../pages/goods_presell_detail_crowntip.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip" */))
const _7013280a = () => interopDefault(import('../pages/goods_presell_detail_crowntip2.vue' /* webpackChunkName: "pages/goods_presell_detail_crowntip2" */))
const _49902634 = () => interopDefault(import('../pages/goods_presell_detail_ex10.vue' /* webpackChunkName: "pages/goods_presell_detail_ex10" */))
const _6e390efa = () => interopDefault(import('../pages/goods_presell_detail_hnd.vue' /* webpackChunkName: "pages/goods_presell_detail_hnd" */))
const _778c09e2 = () => interopDefault(import('../pages/goods_presell_detail_japan.vue' /* webpackChunkName: "pages/goods_presell_detail_japan" */))
const _3b7a0aba = () => interopDefault(import('../pages/goods_presell_detail_jp11.vue' /* webpackChunkName: "pages/goods_presell_detail_jp11" */))
const _e5fc26f4 = () => interopDefault(import('../pages/goods_presell_detail_open_back_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_open_back_pro44" */))
const _634e4927 = () => interopDefault(import('../pages/goods_presell_detail_pancake_trainer.vue' /* webpackChunkName: "pages/goods_presell_detail_pancake_trainer" */))
const _5238fc49 = () => interopDefault(import('../pages/goods_presell_detail_pro44.vue' /* webpackChunkName: "pages/goods_presell_detail_pro44" */))
const _1603938e = () => interopDefault(import('../pages/goods_presell_detail_pro442.vue' /* webpackChunkName: "pages/goods_presell_detail_pro442" */))
const _6826e761 = () => interopDefault(import('../pages/goods_presell_detail_rb5.vue' /* webpackChunkName: "pages/goods_presell_detail_rb5" */))
const _78665a05 = () => interopDefault(import('../pages/goods_presell_detail - 副本.vue' /* webpackChunkName: "pages/goods_presell_detail - 副本" */))
const _68986730 = () => interopDefault(import('../pages/goods_search.vue' /* webpackChunkName: "pages/goods_search" */))
const _43a8271f = () => interopDefault(import('../pages/goods_seckill.vue' /* webpackChunkName: "pages/goods_seckill" */))
const _cb2974be = () => interopDefault(import('../pages/goods_seckill_detail.vue' /* webpackChunkName: "pages/goods_seckill_detail" */))
const _a9f9a27c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _f873a828 = () => interopDefault(import('../pages/logistics.vue' /* webpackChunkName: "pages/logistics" */))
const _ec479bf4 = () => interopDefault(import('../pages/mobile_login/index.vue' /* webpackChunkName: "pages/mobile_login/index" */))
const _23033228 = () => interopDefault(import('../pages/order_confirm.vue' /* webpackChunkName: "pages/order_confirm" */))
const _04b2e799 = () => interopDefault(import('../pages/order_detail.vue' /* webpackChunkName: "pages/order_detail" */))
const _e890e2c2 = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _8b9e5622 = () => interopDefault(import('../pages/refund.vue' /* webpackChunkName: "pages/refund" */))
const _71f322f4 = () => interopDefault(import('../pages/refund_goods.vue' /* webpackChunkName: "pages/refund_goods" */))
const _25bf5633 = () => interopDefault(import('../pages/rule.vue' /* webpackChunkName: "pages/rule" */))
const _c1923242 = () => interopDefault(import('../pages/shoppingCart.vue' /* webpackChunkName: "pages/shoppingCart" */))
const _2f48a8fc = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _9b33eef6 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _72707cb4 = () => interopDefault(import('../pages/user/address_list.vue' /* webpackChunkName: "pages/user/address_list" */))
const _fbe7c262 = () => interopDefault(import('../pages/user/balance.vue' /* webpackChunkName: "pages/user/balance" */))
const _0e5d3a1d = () => interopDefault(import('../pages/user/collect.vue' /* webpackChunkName: "pages/user/collect" */))
const _06f9a6ef = () => interopDefault(import('../pages/user/messageCenter.vue' /* webpackChunkName: "pages/user/messageCenter" */))
const _be572ae2 = () => interopDefault(import('../pages/user/myCoupon.vue' /* webpackChunkName: "pages/user/myCoupon" */))
const _3de5023f = () => interopDefault(import('../pages/user/orderList.vue' /* webpackChunkName: "pages/user/orderList" */))
const _1350fea4 = () => interopDefault(import('../pages/user/userCoupon.vue' /* webpackChunkName: "pages/user/userCoupon" */))
const _39b91b40 = () => interopDefault(import('../pages/wxPay.vue' /* webpackChunkName: "pages/wxPay" */))
const _3d48e8aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _495f693f = () => interopDefault(import('../pages/goods_detail/_id/index.vue' /* webpackChunkName: "pages/goods_detail/_id/index" */))

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
    component: _ad66b27e,
    name: "alipay"
  }, {
    path: "/AppChat",
    component: _659a67dc,
    name: "AppChat"
  }, {
    path: "/evaluation",
    component: _762af333,
    name: "evaluation"
  }, {
    path: "/goods_cate",
    component: _3aaabee2,
    name: "goods_cate"
  }, {
    path: "/goods_list",
    component: _2fe5965e,
    name: "goods_list"
  }, {
    path: "/goods_presell",
    component: _fea3b536,
    name: "goods_presell"
  }, {
    path: "/goods_presell_detail",
    component: _6fddcc9b,
    name: "goods_presell_detail"
  }, {
    path: "/goods_presell_detail_base%20copy",
    component: _53ad1840,
    name: "goods_presell_detail_base copy"
  }, {
    path: "/goods_presell_detail_c2",
    component: _0039e0fa,
    name: "goods_presell_detail_c2"
  }, {
    path: "/goods_presell_detail_Catcher-PRO44",
    component: _2c423d24,
    name: "goods_presell_detail_Catcher-PRO44"
  }, {
    path: "/goods_presell_detail_cb44",
    component: _f5f9391a,
    name: "goods_presell_detail_cb44"
  }, {
    path: "/goods_presell_detail_cb442",
    component: _1b80b44f,
    name: "goods_presell_detail_cb442"
  }, {
    path: "/goods_presell_detail_cf",
    component: _02bfd5b7,
    name: "goods_presell_detail_cf"
  }, {
    path: "/goods_presell_detail_close_back_pro44",
    component: _4759c910,
    name: "goods_presell_detail_close_back_pro44"
  }, {
    path: "/goods_presell_detail_crowntip",
    component: _ae73e750,
    name: "goods_presell_detail_crowntip"
  }, {
    path: "/goods_presell_detail_crowntip2",
    component: _7013280a,
    name: "goods_presell_detail_crowntip2"
  }, {
    path: "/goods_presell_detail_ex10",
    component: _49902634,
    name: "goods_presell_detail_ex10"
  }, {
    path: "/goods_presell_detail_hnd",
    component: _6e390efa,
    name: "goods_presell_detail_hnd"
  }, {
    path: "/goods_presell_detail_japan",
    component: _778c09e2,
    name: "goods_presell_detail_japan"
  }, {
    path: "/goods_presell_detail_jp11",
    component: _3b7a0aba,
    name: "goods_presell_detail_jp11"
  }, {
    path: "/goods_presell_detail_open_back_pro44",
    component: _e5fc26f4,
    name: "goods_presell_detail_open_back_pro44"
  }, {
    path: "/goods_presell_detail_pancake_trainer",
    component: _634e4927,
    name: "goods_presell_detail_pancake_trainer"
  }, {
    path: "/goods_presell_detail_pro44",
    component: _5238fc49,
    name: "goods_presell_detail_pro44"
  }, {
    path: "/goods_presell_detail_pro442",
    component: _1603938e,
    name: "goods_presell_detail_pro442"
  }, {
    path: "/goods_presell_detail_rb5",
    component: _6826e761,
    name: "goods_presell_detail_rb5"
  }, {
    path: "/goods_presell_detail%20-%20%E5%89%AF%E6%9C%AC",
    component: _78665a05,
    name: "goods_presell_detail - 副本"
  }, {
    path: "/goods_search",
    component: _68986730,
    name: "goods_search"
  }, {
    path: "/goods_seckill",
    component: _43a8271f,
    name: "goods_seckill"
  }, {
    path: "/goods_seckill_detail",
    component: _cb2974be,
    name: "goods_seckill_detail"
  }, {
    path: "/login",
    component: _a9f9a27c,
    name: "login"
  }, {
    path: "/logistics",
    component: _f873a828,
    name: "logistics"
  }, {
    path: "/mobile_login",
    component: _ec479bf4,
    name: "mobile_login"
  }, {
    path: "/order_confirm",
    component: _23033228,
    name: "order_confirm"
  }, {
    path: "/order_detail",
    component: _04b2e799,
    name: "order_detail"
  }, {
    path: "/payment",
    component: _e890e2c2,
    name: "payment"
  }, {
    path: "/refund",
    component: _8b9e5622,
    name: "refund"
  }, {
    path: "/refund_goods",
    component: _71f322f4,
    name: "refund_goods"
  }, {
    path: "/rule",
    component: _25bf5633,
    name: "rule"
  }, {
    path: "/shoppingCart",
    component: _c1923242,
    name: "shoppingCart"
  }, {
    path: "/user",
    component: _2f48a8fc,
    children: [{
      path: "",
      component: _9b33eef6,
      name: "user"
    }, {
      path: "address_list",
      component: _72707cb4,
      name: "user-address_list"
    }, {
      path: "balance",
      component: _fbe7c262,
      name: "user-balance"
    }, {
      path: "collect",
      component: _0e5d3a1d,
      name: "user-collect"
    }, {
      path: "messageCenter",
      component: _06f9a6ef,
      name: "user-messageCenter"
    }, {
      path: "myCoupon",
      component: _be572ae2,
      name: "user-myCoupon"
    }, {
      path: "orderList",
      component: _3de5023f,
      name: "user-orderList"
    }, {
      path: "userCoupon",
      component: _1350fea4,
      name: "user-userCoupon"
    }]
  }, {
    path: "/wxPay",
    component: _39b91b40,
    name: "wxPay"
  }, {
    path: "/",
    component: _3d48e8aa,
    name: "index"
  }, {
    path: "/goods_detail/:id",
    component: _495f693f,
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
